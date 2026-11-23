// As verticais do JEC com dados consolidados do TJSP (Estado de São Paulo).
export type Grupo = 'banco' | 'essencial' | 'viagem' | 'cotidiano';
export interface Tema { ordem: number; slug: string; nome: string; curto: string; grupo: Grupo; icone: string; linha: string; decisoes: number; procedenciaPct: number; palavras: string; hookCuriosidade: string; }

export const GRUPOS: Record<Grupo, string> = {
  banco: 'Bancos e crédito',
  essencial: 'Serviços essenciais',
  viagem: 'Viagens',
  cotidiano: 'Compras e cotidiano',
};

export const TEMAS: Tema[] = [
  {"ordem": 1, "slug": "golpe-pix", "nome": "Fraude bancária e golpe do Pix", "curto": "Golpe do Pix", "grupo": "banco", "icone": "pix", "linha": "Falsa central, invasão de conta, contas \"laranja\"", "decisoes": 5837, "procedenciaPct": 52.5, "palavras": "pix golpe falsa central banco conta invadida transferência spoofing", "hookCuriosidade": "Por que o banco alegou culpa da vítima?"},
  {"ordem": 2, "slug": "negativacao-indevida", "nome": "Negativação indevida", "curto": "Nome negativado", "grupo": "banco", "icone": "user-x", "linha": "Nome no SPC/Serasa por dívida inexistente ou já quitada", "decisoes": 5966, "procedenciaPct": 64.8, "palavras": "serasa spc nome sujo negativado cadastro dívida", "hookCuriosidade": "Havia outra restrição ativa no seu CPF?"},
  {"ordem": 7, "slug": "consignado-rmc", "nome": "Consignado fraudulento e RMC/RCC", "curto": "Consignado / INSS", "grupo": "banco", "icone": "receipt", "linha": "Descontos no benefício do INSS sem contratação", "decisoes": 1199, "procedenciaPct": 40.1, "palavras": "inss aposentado consignado rmc rcc desconto benefício empréstimo", "hookCuriosidade": "O valor do empréstimo foi gasto ou devolvido?"},
  {"ordem": 9, "slug": "cartao-de-credito", "nome": "Cartão de crédito", "curto": "Cartão de crédito", "grupo": "banco", "icone": "card", "linha": "Anuidade indevida, compras clonadas, juros do rotativo", "decisoes": 482, "procedenciaPct": 48.0, "palavras": "cartão anuidade clonado fatura rotativo", "hookCuriosidade": "A compra fraudulenta usou chip e senha física?"},
  {"ordem": 10, "slug": "superendividamento", "nome": "Superendividamento", "curto": "Superendividamento", "grupo": "banco", "icone": "trending-down", "linha": "Dívidas que comprometem o mínimo existencial", "decisoes": 539, "procedenciaPct": 42.0, "palavras": "dívidas superendividamento repactuação empréstimos renda", "hookCuriosidade": "As parcelas ultrapassam 30% da sua renda?"},
  {"ordem": 12, "slug": "protesto-indevido", "nome": "Protesto indevido de títulos", "curto": "Protesto indevido", "grupo": "banco", "icone": "file-x", "linha": "Título protestado sem causa ou dívida prescrita", "decisoes": 381, "procedenciaPct": 58.0, "palavras": "protesto cartório duplicata boleto título", "hookCuriosidade": "A dívida foi quitada antes do protesto?"},
  {"ordem": 3, "slug": "energia-eletrica", "nome": "Energia elétrica", "curto": "Energia elétrica", "grupo": "essencial", "icone": "zap", "linha": "Apagão, aparelhos queimados, TOI arbitrário", "decisoes": 2056, "procedenciaPct": 70.7, "palavras": "luz energia enel apagão queda toi conta", "hookCuriosidade": "Tem laudo dos aparelhos e protocolo em 90 dias?"},
  {"ordem": 4, "slug": "telefonia", "nome": "Telefonia e telecomunicações", "curto": "Telefonia e internet", "grupo": "essencial", "icone": "phone", "linha": "Cobrança após cancelamento, portabilidade, SIM swap", "decisoes": 3515, "procedenciaPct": 64.7, "palavras": "telefone celular internet operadora vivo claro tim cancelamento chip", "hookCuriosidade": "Você anotou os protocolos de cancelamento?"},
  {"ordem": 11, "slug": "planos-de-saude", "nome": "Planos de saúde", "curto": "Plano de saúde", "grupo": "essencial", "icone": "heart-pulse", "linha": "Negativa de cobertura e reajuste abusivo", "decisoes": 2525, "procedenciaPct": 70.7, "palavras": "plano de saúde convênio cirurgia exame remédio reajuste", "hookCuriosidade": "O laudo médico justificou a urgência do pedido?"},
  {"ordem": 5, "slug": "transporte-aereo", "nome": "Transporte aéreo", "curto": "Voo", "grupo": "viagem", "icone": "plane", "linha": "Voo cancelado, atraso acima de 4h, overbooking", "decisoes": 4848, "procedenciaPct": 72.7, "palavras": "voo avião cancelado atraso companhia aérea overbooking conexão", "hookCuriosidade": "O atraso na chegada passou de 4 horas?"},
  {"ordem": 6, "slug": "bagagem", "nome": "Extravio e dano de bagagem", "curto": "Bagagem", "grupo": "viagem", "icone": "luggage", "linha": "Mala extraviada, entregue com atraso ou danificada", "decisoes": 310, "procedenciaPct": 68.0, "palavras": "mala bagagem extraviada perdida danificada", "hookCuriosidade": "Registrou o formulário RIB no aeroporto?"},
  {"ordem": 8, "slug": "compras-online", "nome": "Compras online e rescisão contratual", "curto": "Compras online", "grupo": "cotidiano", "icone": "cart", "linha": "Produto não entregue, troca negada, arrependimento", "decisoes": 3175, "procedenciaPct": 70.4, "palavras": "compra online loja produto entrega troca arrependimento curso", "hookCuriosidade": "Pediu o cancelamento dentro dos 7 dias?"},
  {"ordem": 13, "slug": "acidente-de-transito", "nome": "Acidente de trânsito", "curto": "Acidente de trânsito", "grupo": "cotidiano", "icone": "car", "linha": "Colisão com recusa de pagar o conserto", "decisoes": 1953, "procedenciaPct": 69.3, "palavras": "acidente batida carro colisão seguro franquia", "hookCuriosidade": "Tem o B.O. com a dinâmica e 3 orçamentos?"},
  {"ordem": 14, "slug": "desvio-produtivo", "nome": "Dano moral e desvio produtivo", "curto": "Tempo perdido / SAC", "grupo": "cotidiano", "icone": "hourglass", "linha": "Tempo perdido com SAC, Procon e falhas graves", "decisoes": 6346, "procedenciaPct": 61.4, "palavras": "tempo perdido sac procon atendimento desvio produtivo dano moral", "hookCuriosidade": "Por que o juiz considerou 'mero aborrecimento'?"}
];

export const TEMA_SLUGS = TEMAS.map((t) => t.slug);
export const temaPorSlug = (slug: string) => TEMAS.find((t) => t.slug === slug);
export const temasDoGrupo = (g: Grupo) => TEMAS.filter((t) => t.grupo === g);
export const fmt = (n: number) => n.toLocaleString('pt-BR');

export interface SecaoCorrelatosConfig {
  titulo: string;
  subtitulo: string;
  slotsH: string;
  top: Tema;
  side: Tema[];
  maisDoGrupo: Tema[];
}

const AFINIDADES_MAP: Record<string, { titulo: string; subtitulo: string; slotsH: string; top: string; side: string[] }> = {
  'transporte-aereo': {
    titulo: 'Direitos do Passageiro Aéreo e Demandas de Viagem no JEC',
    subtitulo: 'Análise jurimétrica de 5.158 decisões do TJSP sobre problemas em voos, bagagens e compras de viagens.',
    slotsH: 'Demandas de consumo frequentes em viagens',
    top: 'bagagem',
    side: ['compras-online', 'desvio-produtivo', 'cartao-de-credito']
  },
  'bagagem': {
    titulo: 'Direitos do Viajante e Transporte Aéreo no Juizado Especial',
    subtitulo: 'Decisões do TJSP sobre extravio de malas, cancelamentos de voo e indenizações ao consumidor.',
    slotsH: 'Demandas correlatas de transporte e consumo',
    top: 'transporte-aereo',
    side: ['desvio-produtivo', 'compras-online', 'cartao-de-credito']
  },
  'golpe-pix': {
    titulo: 'Outras Ações de Direito Bancário e Proteção ao Crédito no JEC',
    subtitulo: 'Decisões reais do TJSP sobre fraudes financeiras, juros e restrições indevidas no CPF.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'negativacao-indevida',
    side: ['cartao-de-credito', 'consignado-rmc', 'protesto-indevido']
  },
  'negativacao-indevida': {
    titulo: 'Ações de Proteção ao Crédito e Direito Bancário no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre restrições cadastrais no SPC/Serasa, golpes e cobranças indevidas.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'protesto-indevido',
    side: ['golpe-pix', 'cartao-de-credito', 'telefonia']
  },
  'telefonia': {
    titulo: 'Serviços Essenciais e Concessionárias no Juizado Especial',
    subtitulo: 'Como os juízes de SP julgam cobranças indevidas de operadoras, cortes de luz e planos de saúde.',
    slotsH: 'Concessionárias e serviços essenciais correlatos',
    top: 'energia-eletrica',
    side: ['planos-de-saude', 'desvio-produtivo', 'negativacao-indevida']
  },
  'energia-eletrica': {
    titulo: 'Serviços Essenciais e Concessionárias Públicas no JEC',
    subtitulo: 'Decisões do TJSP sobre apagões, queima de aparelhos, telecomunicações e serviços contínuos.',
    slotsH: 'Outros serviços essenciais analisados',
    top: 'telefonia',
    side: ['planos-de-saude', 'desvio-produtivo', 'acidente-de-transito']
  },
  'planos-de-saude': {
    titulo: 'Planos de Saúde e Serviços Essenciais no Juizado Especial',
    subtitulo: 'Jurisprudência do TJSP sobre negativas de cobertura cirúrgica, reajustes abusivos e serviços essenciais.',
    slotsH: 'Serviços essenciais e direitos correlatos',
    top: 'energia-eletrica',
    side: ['telefonia', 'desvio-produtivo', 'cartao-de-credito']
  },
  'compras-online': {
    titulo: 'Direito do Consumidor e Comércio Eletrônico no JEC',
    subtitulo: 'Como o TJSP decide ações sobre produtos não entregues, trocas negadas e fraudes no e-commerce.',
    slotsH: 'Demandas correlatas de consumo e e-commerce',
    top: 'desvio-produtivo',
    side: ['cartao-de-credito', 'negativacao-indevida', 'transporte-aereo']
  },
  'desvio-produtivo': {
    titulo: 'Dano Moral e Perda de Tempo Útil no Juizado Especial Cível',
    subtitulo: 'Decisões do TJSP que acolhem o desvio produtivo contra concessionárias, operadoras e companhias aéreas.',
    slotsH: 'Segmentos com maior índice de desvio produtivo',
    top: 'compras-online',
    side: ['telefonia', 'transporte-aereo', 'energia-eletrica']
  },
  'acidente-de-transito': {
    titulo: 'Acidentes de Trânsito e Reparação de Danos no JEC',
    subtitulo: 'Decisões do TJSP sobre colisões de veículos, recusa de conserto por seguradoras e danos materiais.',
    slotsH: 'Outras demandas de reparação de danos no JEC',
    top: 'desvio-produtivo',
    side: ['compras-online', 'energia-eletrica', 'protesto-indevido']
  },
  'cartao-de-credito': {
    titulo: 'Cartão de Crédito e Fraudes Financeiras no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre compras clonadas, juros rotativos e golpes bancários.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'golpe-pix',
    side: ['negativacao-indevida', 'superendividamento', 'consignado-rmc']
  },
  'consignado-rmc': {
    titulo: 'Empréstimos Consignados e Proteção ao Aposentado no JEC',
    subtitulo: 'Decisões do TJSP sobre descontos indevidos no INSS, cartões RMC/RCC e fraudes financeiras.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'golpe-pix',
    side: ['superendividamento', 'negativacao-indevida', 'cartao-de-credito']
  },
  'superendividamento': {
    titulo: 'Superendividamento e Repactuação de Dívidas no JEC',
    subtitulo: 'Como a Justiça paulista aplica a Lei do Superendividamento contra abusos de bancos e financeiras.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'cartao-de-credito',
    side: ['consignado-rmc', 'negativacao-indevida', 'golpe-pix']
  },
  'protesto-indevido': {
    titulo: 'Protesto de Títulos e Proteção Cadastral no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre cancelamento de protestos ilegítimos e indenizações por danos morais.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'negativacao-indevida',
    side: ['golpe-pix', 'cartao-de-credito', 'acidente-de-transito']
  }
};

export function getSecaoCorrelatos(slug: string): SecaoCorrelatosConfig {
  const cfg = AFINIDADES_MAP[slug];
  const tema = temaPorSlug(slug);
  const outrosMesmoGrupo = tema ? TEMAS.filter((t) => t.grupo === tema.grupo && t.slug !== slug) : [];

  if (cfg) {
    const topTema = temaPorSlug(cfg.top)!;
    const sideTemas = cfg.side.map((s) => temaPorSlug(s)!).filter(Boolean);
    const usados = new Set([slug, cfg.top, ...cfg.side]);
    const maisDoGrupo = outrosMesmoGrupo.filter((t) => !usados.has(t.slug));

    return {
      titulo: cfg.titulo,
      subtitulo: cfg.subtitulo,
      slotsH: cfg.slotsH,
      top: topTema,
      side: sideTemas,
      maisDoGrupo
    };
  }

  // Fallback seguro
  const top = outrosMesmoGrupo[0] || TEMAS.find((t) => t.slug !== slug)!;
  const side = TEMAS.filter((t) => t.slug !== slug && t.slug !== top.slug).slice(0, 3);
  return {
    titulo: 'Demandas correlatas no Juizado Especial Cível',
    subtitulo: 'Decisões públicas do Tribunal de Justiça de São Paulo analisadas pelo portal.',
    slotsH: 'Outras ações frequentes no JEC',
    top,
    side,
    maisDoGrupo: []
  };
}
