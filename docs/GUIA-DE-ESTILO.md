# DefendaMe — Guia de Estilo e Padrão de Artigos

Versão 1.0 · novembro de 2026 · defendame.online

Este guia define a identidade visual, a escrita e a construção técnica de todas as páginas do DefendaMe.
Ele serve para pessoas e para assistentes de IA: **cole este arquivo inteiro em outro chat** antes de pedir um artigo, um gráfico ou uma página nova.

---

## 1. Princípios

1. **Clean e sóbrio.** Inspirado em produtos SaaS (referência visual: template DataNova). Muito respiro, poucos elementos por tela, nada de gradientes chamativos.
2. **Uma cor de destaque.** Teal é a única cor de marca. Âmbar só para alertas; vermelho só para erros de formulário.
3. **Dado antes de opinião.** Todo artigo abre com números (KPIs) e mostra a fonte de cada número.
4. **Ética da OAB em primeiro lugar.** Conteúdo informativo, sem promessa de resultado, sem preço, sem "grátis" (Provimento CFOAB nº 205/2021).
5. **Escuro por padrão.** O site abre no tema escuro; o visitante pode trocar para o claro (botão sol/lua). Todo componente precisa funcionar nos dois.

---

## 2. Marca

**Nome:** DefendaMe (D e M maiúsculos, junto). **Domínio:** defendame.online.

**Logotipo:** caixa teal com a letra **D** e uma **seta de devolução** no lugar da base da haste + "efenda" em texto + caixa teal com "**Me**".
- As letras D, M e e são contornos reais da DM Sans 600 (arquivo `src/components/Logo.astro`).
- As duas caixas têm a mesma altura (1,08 em), mesmo raio (0,19 em) e ficam alinhadas na linha de base do texto.
- Caixas sempre em `--logo-teal` (#12857e); letras dentro das caixas sempre brancas; "efenda" na cor do texto principal.
- Não usar: escudo, balança, azul-marinho, laranja, slogan junto do logo no menu.
- Ícone (favicon/avatar): só a caixa do D com a seta (`public/favicon.svg`).

---

## 3. Cores (tokens CSS)

Todas as cores vêm de variáveis em `src/styles/global.css`. **Nunca use cor fixa em componente** — use o token.

| Token | Uso | Claro | Escuro |
|---|---|---|---|
| `--bg` | fundo da página | #f6fbfa | #0b1719 |
| `--bg-hero` | fundo do topo/hero | #eaf6f4 | #0d1f22 |
| `--surface` | cartões, menu, caixas | #ffffff | #11252a |
| `--muted-bg` | painéis cinza, trilhos de barra | #ecefef | #15292d |
| `--teal` | **destaque**: botões, links, dado principal | #12857e | #2bb3a8 |
| `--teal-h` | hover do botão | #0f736d | #38c4b8 |
| `--teal-logo` | barras secundárias de gráfico | #3fa79e | #5ccfc4 |
| `--teal-pale` | fundo de chip, ícone, chamada | #e6f4f2 | #0f2f30 |
| `--line-teal` | bordas suaves teal, barra de referência | #cfe7e3 | #1f4542 |
| `--navy` | títulos e texto forte | #1d2939 | #e6eef0 |
| `--fg-mid` | texto corrido | #3b475a | #b7c5ca |
| `--fg-muted` | legendas, metadados | #667085 | #8a9ba1 |
| `--fg-light` | eixos, notas pequenas | #98a2b3 | #5f7176 |
| `--border` | bordas e divisórias | #e3e8ec | #1f373c |
| `--logo-teal` | caixas do logotipo (fixo) | #12857e | #12857e |

Cores de apoio (fixas): âmbar `#d97706` (alertas, "5 anos"), vermelho `#d64545` (erros), laranja Substack `#ff6719` (só no hover do ícone).

**Regra do texto sobre teal:** no tema escuro o botão teal usa texto escuro (`#052523`) para manter contraste; no claro, texto branco.

---

## 4. Tipografia

Fonte única: **DM Sans** (variável, hospedada no site via `@fontsource-variable/dm-sans`). Sem fontes serifadas.

| Elemento | Tamanho | Peso | Espaçamento | Altura de linha |
|---|---|---|---|---|
| H1 de artigo | clamp(32px, 4.6vw, 52px) | 400 | -0.04em | 1.08 |
| H1 da home | clamp(34px, 5.6vw, 68px) | 400 | -0.045em | 1.08 |
| H2 de artigo | clamp(26px, 3vw, 32px) | 400 | -0.035em | 1.15 |
| Título de seção (home) | clamp(30px, 4vw, 46px) | 400 | -0.04em | 1.1 |
| H3 / título de cartão | 16.5–18.5px | 600 | -0.015em | 1.3 |
| Texto do artigo | 18px (A−/A+: 16–22px) | 400 | 0 | 1.78 |
| Linha fina | clamp(17px, 1.6vw, 20px) | 400 | 0 | 1.55 |
| Texto de interface | 14–15px | 500 | 0 | 1.5 |
| Chapéu / rótulo | 12–13px, MAIÚSCULAS | 600 | +0.06em a +0.08em | — |
| Números grandes (KPI) | 26–52px | 400 | -0.04em | 1.1 (`tabular-nums`) |

Regras: títulos **leves** (peso 400) e letras apertadas; ênfase com **negrito 600**, nunca com sublinhado. Números sempre com `font-variant-numeric: tabular-nums`.

---

## 5. Espaço, raios e sombras

- **Largura máxima:** 1170px (conteúdo), 752px (coluna de leitura do artigo), barra lateral 300px.
- **Margem lateral no celular:** 16px.
- **Raios:** botões 6px (`--r-btn`) · campos e caixas 10px (`--r`) · cartões e painéis 16px (`--r-lg`) · chips 20px.
- **Sombras:** `--shadow` (cartões) e `--shadow-lg` (hover e modais). Nada além disso.
- **Ritmo vertical:** 96px entre seções da home; 52–56px antes de cada H2 no artigo; 30–36px em volta de citações, figuras e chamadas.

---

## 6. Ícones

Estilo **Lucide**: traço de 1.9–2px, pontas e cantos arredondados, grade 24×24, sem preenchimento.
Ícones de marca (WhatsApp, X, Facebook, LinkedIn, Substack, alto-falante) são preenchidos.

Uso: `<Icon name="plane" size={22} />` (arquivo `src/components/Icon.astro`).

| Grupo | Nomes disponíveis |
|---|---|
| Temas | `pix` `user-x` `receipt` `card` `trending-down` `file-x` `zap` `phone` `heart-pulse` `plane` `luggage` `cart` `car` `hourglass` `help` |
| Interface | `search` `search-plus` `chevron-down` `chevron-right` `arrow-right` `arrow-left` `menu` `x` `plus` `sun` `moon` `send` `check` `pencil` `link` `list` |
| Conteúdo | `lock` `clock` `alert` `swap` `exit` `gavel` `user` `bank` `doc` `chat` `folder` `stamp` `chart` `shield` `layers` `monitor` |
| Marcas | `whatsapp` `x-brand` `facebook` `linkedin` `substack` `volume` |

Ícone dentro de quadrado: 42–46px, raio 10px, fundo `--teal-pale`, ícone `--teal` (classe `med-icon`/`tcard-ic`).
Para criar um ícone novo: copie o SVG do Lucide (lucide.dev), mantenha `viewBox="0 0 24 24"` e cole o conteúdo no mapa `S` do `Icon.astro`.

---

## 7. Componentes de interface

- **Botão primário** (`.btn .btn-primary`): fundo teal, texto 15px/600, raio 6px, padding 12×24.
- **Botão contorno** (`.btn .btn-outline`): borda 2px teal, fundo da superfície.
- **Menu:** cartão flutuante (raio 16px) com logo, links, painel "Temas" em 4 colunas, botão de tema e "Verificar meu caso". No celular: menu lateral.
- **Cartão de tema** (`.tcard`): ícone em quadrado, grupo à direita, título 18px/600, linha descritiva, rodapé com "N decisões analisadas" e "Ler artigos →".
- **Chip/selo** (`.section-eyebrow`, `.feat-tag`): fundo `--teal-pale`, texto teal 13px/500, raio 6px.
- **Painel de números** (`.stats-panel`/`.juri-kpi-grid`): fundo `--muted-bg` com cartões brancos/superfície dentro; o número principal com borda teal.
- **Formulário Verificar meu caso:** modal em 3 etapas (categoria → detalhes específicos da demanda → revisão + contato + LGPD). Abre com qualquer elemento que tenha `data-open-case` (e `data-cat="<tema>"` para já entrar na etapa 2).
- **Aviso de cookies:** cartão fixo no rodapé, dois botões (Somente necessários / Aceitar todos).

---

## 8. Componentes de artigo (MDX)

Todos ficam em `src/components/article/` e podem ser usados no `.mdx` **sem importar**.

| Componente | Para quê | Exemplo |
|---|---|---|
| `<Quote>` | Fala do especialista. Mostra foto + "Análise de André L. Silva", destaca a 1ª frase e recolhe textos longos em ~6 linhas ("Ler análise completa"). Nos **Guias**, use 1 para a "voz do revisor". | `<Quote>Texto da fala.</Quote>` |
| `<Quote rotulo>` | **Olho** (pull-quote) nas **Análises**: frase curta do próprio texto, sem foto nem assinatura. 1–2 por artigo. | `<Quote rotulo="Ponto-chave">Frase.</Quote>` |
| `<CasoReal>` | Quadro de **caso extraído da base** (decisão pública do TJSP, anonimizada). Rodapé fixo: "nomes e detalhes alterados · não se trata de cliente". | `<CasoReal titulo="…" origem="JEC de Barueri · tema" nome="Seu João">…</CasoReal>` |
| `<Cta>` | Chamada "Verificar meu caso" no meio do texto. | `<Cta titulo="Passou por algo parecido?" texto="…" tema="golpe-pix" />` |
| `<AdSlot>` | Espaço de anúncio ("Publicidade"). `variant`: `in`, `side`, `wide`. | `<AdSlot />` |
| `<Figura>` | Moldura numerada com legenda. Envolve qualquer gráfico/fluxo. | `<Figura numero={1} legenda="…">…</Figura>` |
| `<StepFlow>` | Fluxo de 2 a 4 etapas em cartões com setas; opcionalmente número grande (24 h, 72 h…). | ver modelo |
| `<BarChart>` | Gráfico de barras verticais em SVG. | ver seção 9 |
| `<DataTable>` | Tabela jurimétrica; a linha `destaque` fica teal. | ver modelo |
| `<EvidenceGrid>` | Duas colunas comparativas (✓ teal × cadeado cinza). | ver modelo |
| `<ProofGrid>` | Cartões numerados (ex.: "as 5 provas"). | ver modelo |
| `<Callout>` | Ressalva âmbar (metodologia, OAB). | `<Callout titulo="…">texto</Callout>` |
| `<Parecer>` | Conclusão do especialista em destaque (1 por artigo). | `<Parecer>…</Parecer>` |
| `<Sumula>` | Destaque de súmula/enunciado/artigo de lei. | `<Sumula rotulo="Súmula 479 · STJ" fonte="…">texto</Sumula>` |
| `<LeiaTambem>` | Links para outros temas no meio do texto. | `<LeiaTambem temas={['negativacao-indevida']} />` |

O **layout do artigo** monta sozinho: trilha de navegação, selo do formato (Análise/Guia), chapéu, título, linha fina, autor e data, barra de ações (WhatsApp, X, Facebook, LinkedIn, Substack, copiar link, A−/A+, Ouvir), KPIs, índice "Neste artigo você vai encontrar", FAQ em acordeão, tags, chamada final, fontes + nota editorial, "Demandas correlatas", barra lateral (autor, dados da comarca, anúncio 300×250, chamada) e os dados estruturados (Article, FAQPage, BreadcrumbList).

---

## 9. Técnica dos gráficos, cartões e elementos gráficos

**Regra de ouro:** nenhum gráfico é imagem. Tudo é **HTML + CSS + SVG inline** usando os tokens de cor. Por isso funciona no tema claro e no escuro, fica nítido em qualquer tela e o texto é lido pelo Google e por leitores de tela.

### 9.1 Gráfico de barras (`BarChart`)
- SVG com `viewBox` largo (≥ 500 × 185–200), largura 100%, sem biblioteca.
- 3 linhas de grade horizontais (`--border`) + rótulos do eixo à esquerda em 10px `--fg-light` (60%, 45%, 30%, 15% quando `max = 60`).
- Barras de 64px, raio 4px. **Papéis de cor:**
  - `tom: 'base'` → `--line-teal` (média/referência);
  - sem tom → `--teal-logo` com 55% de opacidade (comparativos);
  - `tom: 'destaque'` → `--teal` sólido (o dado da comarca-foco). **Só uma barra de destaque por gráfico.**
- Valor acima da barra (12px/600; destaque 13px/700 teal); rótulo abaixo 11px; subrótulo 10px `--fg-light`; valor extra (ex.: dano moral) 10.5px/600.
- Dentro de um `chart-card`: cabeçalho com título 16px/500 à esquerda e subtítulo 12.5px à direita; nota de fonte 12px no rodapé.

### 9.2 Barras horizontais (ranking da home)
- Lista `ol.bars`: rótulo (13.5px) · trilho 8px `--muted-bg` com preenchimento `--teal` proporcional ao maior valor · número à direita (13px/600, `tabular-nums`).

### 9.3 Fluxos e linhas do tempo (`StepFlow`)
- Cartões `med-step`: fundo `--bg`, borda `--border`, raio 16px, padding 20×16.
- Topo: ícone em quadrado 46px (`--teal-pale`/`--teal`) à esquerda e "Etapa 01" (13px `--fg-light`) à direita.
- Número grande opcional (34–40px/400, unidade em teal 42% do tamanho), título 15px/600, descrição 13.5px `--fg-muted`.
- Setas `arrow-right` em `--fg-light` entre os cartões; no celular os cartões empilham e a seta gira 90°.

### 9.4 Cartões numerados (`ProofGrid`)
- Quadrado 38px teal com número branco (600), título 16.5px/600, texto 14.5px `--fg-muted`; grade automática (mín. 210px por cartão).

### 9.5 Comparativos (`EvidenceGrid`)
- Duas colunas de cartões; marcador 24px: teal com ✓ (lado positivo) ou cinza com cadeado (lado neutro). Frase de conclusão em teal 14px/600 abaixo.

### 9.6 Tabelas (`DataTable`)
- Cabeçalho 12px MAIÚSCULAS `--fg-muted` sobre `--bg`; células 14.5px; divisórias `--border`; linha destaque com fundo `--teal-pale` e texto teal; rolagem horizontal no celular.

### 9.7 Ao criar um elemento novo
1. Use só tokens de cor; teste nos dois temas.
2. Texto mínimo de 10px dentro de SVG; 12.5px fora.
3. Prefira HTML/CSS (grid/flex) a SVG quando não for gráfico de dados — fica responsivo sem esforço.
4. Uma informação de destaque por elemento, sempre em teal.
5. Envolva em `<Figura numero legenda>`; numere em ordem de aparição no texto.

---

## 10. Formatos editoriais e autoria

O DefendaMe é o **veículo e o laboratório de dados**; André L. Silva é a **voz e a autoridade**. Todo artigo declara o formato no frontmatter (`formato: analise` ou `formato: guia`) e o layout ajusta o resto sozinho.

| | **Análise** (`formato: analise`) | **Guia** (`formato: guia`) |
|---|---|---|
| Objetivo | Interpretar os dados: "o que as decisões mostram" | Serviço: "o que fazer agora" |
| Assinatura | "Por André L. Silva" (foto) | "Redação DefendaMe · Revisão técnica: André L. Silva" |
| Pessoa | **1ª pessoa** ("analisei", "nas decisões que li") | Fala com o leitor ("você"), 2ª pessoa |
| Selo | "Análise" (teal cheio) | "Guia" (contorno teal) |
| Citações | `Quote rotulo="Ponto-chave"` (olho) | 1 `Quote` com a voz do revisor |
| Conclusão | `Parecer titulo="Conclusão do autor"` | Checklist final |
| JSON-LD | `OpinionNewsArticle`, autor `Person` | `Article`, autor `Organization` + `reviewedBy` |
| Tamanho | 1.800–3.500 palavras | 900–1.600 palavras |

**Par Análise + Guia:** cada tema deve ter os dois, com link cruzado (a Análise aponta para o Guia "o que fazer"; o Guia aponta para a Análise "como o TJSP decide").

**Página do autor:** `/autor/andre-l-silva/` lista automaticamente as Análises assinadas e os Guias revisados. Byline e cartão lateral apontam para ela.

**Casos da base (`CasoReal`):**
- sempre de **decisão pública** da base do TJSP, nunca de cliente;
- nome fictício (`nome="Seu João"`) e detalhes alterados (idade aproximada, dia, valores arredondados) sem mudar a tese;
- desfecho descrito de forma **qualitativa** ("determinou a restituição e a indenização por dano moral"), sem apresentar valor de condenação como "resultado obtido";
- o caso precisa existir de fato na base: guarde o número do processo internamente (não publique).

---

## 11. Estrutura padrão de um artigo

### Análise

1. **Cabeçalho** (automático): chapéu, H1 com a palavra-chave no início, linha fina, autor/data/leitura, barra de ações.
2. **KPIs** (3 números; o principal com destaque) + nota de fonte.
3. **Índice** (automático, a partir dos H2).
4. **Seção 1 — o caso:** `CasoReal` da base + Figura 1 (como o problema acontece) + **CTA 1**.
5. **Seção 2 — a tese:** argumento em 1ª pessoa, 1 olho (`Quote rotulo`), doutrina citada por autor e obra.
6. **Seção 3 — os dados:** tabela + gráfico comparativo + `Callout` de ressalva metodológica + **CTA 2** + `AdSlot`.
7. **Seção 4 — a norma/procedimento:** prazos em `StepFlow`, súmulas em `Sumula`.
8. **Seção 5 — o que fazer:** checklist/`ProofGrid` + **CTA 3**.
9. **Seção 6 — conclusão:** `Parecer titulo="Conclusão do autor"` + link para o Guia do tema.
10. **Rodapé** (automático): FAQ, tags, CTA final, fontes, nota editorial, demandas correlatas.

Metas: 1.800–3.500 palavras · 3 CTAs no texto · 2 anúncios no texto (+1 lateral) · 3–5 figuras · 4–6 perguntas no FAQ · 6–10 fontes oficiais com link.

### Guia
1. **Cabeçalho** (automático) com "Redação · Revisão técnica" e KPIs de **prazos** (ex.: 24 h · 72 h · 80 dias).
2. Parágrafo de acolhimento + Figura 1 (linha do tempo em `StepFlow`).
3. H2 por providência, em ordem cronológica ("1. Na primeira hora…", "2. No mesmo dia…"), com listas curtas e `Callout` para alertas.
4. 1 `Quote` do revisor no ponto mais importante.
5. "Se a empresa negar": caminho administrativo → Juizado (sem custas no 1º grau).
6. Alerta contra o "segundo golpe" quando o tema envolver fraude.
7. Checklist final (`proof-checklist`) + link para a Análise do tema.

Metas: 900–1.600 palavras · 3 CTAs · 1 anúncio · 2–3 figuras · 4–5 perguntas no FAQ.

---

## 12. SEO e silo

- URL: `/<tema>/<slug>/` (ex.: `/golpe-pix/quando-o-banco-devolve/`). Slug curto, sem acentos.
- `seoTitle` até ~60 caracteres; `descricao` 140–160 caracteres.
- Um H1 por página; H2 numerados ("1. …") para o índice; H3 só dentro de seções.
- **Silo:** cada artigo pertence a um tema; a página do tema lista os artigos; "Leia também" e "Demandas correlatas" ligam temas do mesmo grupo. Não linkar para fora do silo sem motivo.
- Dados estruturados gerados automaticamente: Article, FAQPage, BreadcrumbList; WebSite na home; CollectionPage nos temas.
- Imagem de compartilhamento padrão: `public/og-default.jpg` (1200×630). Artigo pode ter a sua (`ogImage`).

---

## 13. Voz editorial

- **Tom:** sóbrio, técnico, objetivo e acessível. Explica o termo jurídico na primeira vez que aparece.
- **Pessoa:** nas Análises, André escreve em 1ª pessoa; nos Guias, a Redação fala com o leitor ("você") e cita André como revisor. Nunca "conversamos com o especialista".
- **Dados:** sempre com recorte e fonte ("dados extraídos diretamente do TJSP · amostra das RAJs 1 e 4").
- **Citações doutrinárias:** autor e obra. Edição e página **só** se conferidas no exemplar; na dúvida, omita. Não atribuir ao autor uma frase que é paráfrase nossa.
- **Normas:** conferir número e assunto na fonte oficial antes de citar (ex.: MED = Res. BCB 103/2021; bloqueio cautelar = Res. BCB 147/2021). Não citar normas revogadas (o Provimento 94/2000 foi substituído pelo 205/2021).
- **Evitar:** superlativos, urgência artificial, "garantido", "ganhe", promessas de valor, nomes de clientes reais.

### Regras da OAB (Provimento CFOAB nº 205/2021) — obrigatórias
- Proibido mencionar **valores de honorários, forma de pagamento, gratuidade ou descontos** (art. 3º, I). Não escrever "consulta grátis", "análise gratuita", "sem custo", "% no êxito".
- Permitido informar que **o processo no JEC não tem custas no 1º grau** (é informação sobre a lei, não sobre honorários).
- Proibido divulgar **resultados concretos de clientes** (valores ganhos em casos reais). Casos da base vão sempre no `CasoReal`, anonimizados e com desfecho qualitativo.
- Sempre: "conteúdo informativo, sem promessa de resultado".
- Cargo do autor: "Especialista em Legal Analytics". Só usar "Advogado" com inscrição ativa na OAB.

---

## 14. Prompt para usar em outro chat

> Você vai escrever um artigo para o site DefendaMe (Astro + MDX). Siga rigorosamente o Guia de Estilo abaixo (cores por tokens, DM Sans, formato `analise` ou `guia` (seção 10), componentes `Quote`, `CasoReal`, `Cta`, `AdSlot`, `Figura`, `StepFlow`, `BarChart`, `DataTable`, `EvidenceGrid`, `ProofGrid`, `Callout`, `Parecer`, `Sumula`, `LeiaTambem`; estrutura da seção 11 conforme o formato; 3 CTAs; 2 AdSlots; FAQ e fontes no frontmatter; regras do Provimento 205/2021). Entregue **um único arquivo .mdx** a partir do `docs/modelo-artigo.mdx`, sem CSS nem HTML solto, sem inventar dados: use apenas os números que eu fornecer.
> [cole aqui o GUIA-DE-ESTILO.md e os dados do tema]
