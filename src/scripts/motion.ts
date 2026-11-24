/**
 * Animações do DefendaMe (padrão "Jurimetria animada").
 *
 * Como usar no HTML (sem JavaScript extra na página):
 *   data-motion           → bloco que anima quando aparece na tela (uma vez)
 *   data-reveal           → item que entra com fade + leve subida   (ordem: style="--i:0,1,2…")
 *   data-bar              → barra que cresce até style="--w:52.5%"  (ordem: style="--i:…")
 *   data-count="39727"    → número que conta do zero
 *       data-dec="1"      → casas decimais (padrão 0)
 *       data-suffix="%"   → texto depois do número
 *       data-delay="350"  → atraso em ms (contadores em sequência)
 *   data-count-auto       → lê o próprio texto ("R$ 6.156", "52,5%", "72 h") e conta até ele
 *
 * Quem configurou o aparelho para reduzir movimento vê tudo pronto, sem animação.
 * Sem JavaScript, o HTML já vem com os valores finais (bom para SEO e acessibilidade).
 */

const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
// Velocidade única de TODOS os dados animados do site (números e barras).
// Para deixar mais lento ou mais rápido, mude aqui E em --dur-dados no global.css (mesmo valor).
const DUR = 2600; // ms
// começa devagar, acelera no meio e desacelera no fim (= --ease-dados)
const ease = (p: number) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);

function format(v: number, dec: number, suffix: string, prefix = '') {
  return prefix + v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
}

/** Converte "R$ 6.156", "52,5%", "39.727 decisões" em data-count/data-prefix/data-suffix. */
function parseAuto(el: HTMLElement) {
  const txt = (el.textContent || '').trim();
  const m = txt.match(/^([^\d]*?)(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?(.*)$/s);
  if (!m) return false;
  const int = m[2].replace(/\./g, '');
  el.dataset.count = m[3] ? `${int}.${m[3]}` : int;
  el.dataset.dec = String(m[3]?.length || 0);
  el.dataset.prefix = m[1];
  el.dataset.suffix = m[4];
  return true;
}
const pre = (el: HTMLElement) => el.dataset.prefix || '';

function setFinal(el: HTMLElement) {
  el.textContent = format(parseFloat(el.dataset.count!), Number(el.dataset.dec || 0), el.dataset.suffix || '', pre(el));
}

/** Conta um número do zero até o valor final. */
export function countUp(el: HTMLElement, extraDelay = 0) {
  const to = parseFloat(el.dataset.count!);
  const dec = Number(el.dataset.dec || 0);
  const suffix = el.dataset.suffix || '';
  if (reduce || Number.isNaN(to)) return setFinal(el);
  const start = performance.now() + Number(el.dataset.delay || 0) + extraDelay;
  el.textContent = format(0, dec, suffix, pre(el));
  const step = (now: number) => {
    const p = Math.min(1, Math.max(0, (now - start) / DUR));
    el.textContent = format(to * ease(p), dec, suffix, pre(el));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** Dispara as animações de um bloco (barras, entradas e contadores). */
export function play(block: HTMLElement) {
  block.classList.add('is-in');
  block.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    if (!el.closest('[hidden]')) countUp(el); // itens escondidos (outra aba) não contam
  });
}

/** Volta o bloco ao estado inicial e anima de novo (ex.: troca de aba). */
export function replay(block: HTMLElement) {
  block.classList.remove('is-in');
  block.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => { if (!reduce) el.textContent = format(0, Number(el.dataset.dec || 0), el.dataset.suffix || '', pre(el)); });
  void block.offsetWidth; // reinicia as transições
  play(block);
}

/** Mostra os valores finais de um bloco, sem animar (ex.: filtro de busca). */
export function settle(block: HTMLElement) {
  block.classList.add('is-in');
  block.querySelectorAll<HTMLElement>('[data-count]').forEach(setFinal);
}

/**
 * Textos longos (artigos, temas, institucionais): o texto NUNCA fica oculto (bom para SEO e leitura).
 * Só os títulos h2 ganham um fio verde decorativo que se desenha ao aparecer.
 */
function autoTag(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('.post-body > h2, .doc > h2').forEach((el) => {
    if (el.closest('[data-motion]') || el.hasAttribute('data-motion')) return;
    el.setAttribute('data-motion', '');
    el.classList.add('auto-in');
  });
}

/** Observa todos os blocos [data-motion] da página. */
export function initMotion(root: ParentNode = document) {
  autoTag(root);
  root.querySelectorAll<HTMLElement>('[data-count-auto]').forEach((el) => { if (!el.dataset.count) parseAuto(el); });
  const blocks = [...root.querySelectorAll<HTMLElement>('[data-motion]')];
  if (reduce || !('IntersectionObserver' in window)) {
    blocks.forEach((b) => { b.classList.add('is-in'); b.querySelectorAll<HTMLElement>('[data-count]').forEach(setFinal); });
    return;
  }
  // contadores começam no zero (ainda fora da tela ou antes de animar)
  blocks.forEach((b) => b.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    el.textContent = format(0, Number(el.dataset.dec || 0), el.dataset.suffix || '', pre(el));
  }));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      play(e.target as HTMLElement);
    });
  }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });
  blocks.forEach((b) => io.observe(b));
}
