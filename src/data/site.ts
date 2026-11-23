export const SITE = {
  name: 'DefendaMe',
  url: 'https://defendame.online',
  tagline: 'Seus direitos no Juizado Especial Cível, explicados com dados',
  description: 'Artigos e guias sobre as demandas mais comuns do Juizado Especial Cível, construídos a partir de decisões reais do TJSP.',
  locale: 'pt_BR',
  email: 'contato@defendame.online',          // confirmar
  privacyEmail: 'privacidade@defendame.online', // confirmar
  youtube: 'https://www.youtube.com/@defendame',
  instagram: 'https://www.instagram.com/defendame.online',
  whatsapp: 'https://wa.me/5511966016189',
  linkedin: 'https://www.linkedin.com/company/defendame',
  twitter: 'https://x.com/defendame',
  ogDefault: '/og-default.jpg',
  // Endpoint que recebe o formulário "Verificar meu caso" (Formspree, Cloudflare Worker, etc.)
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
};

export const AUTHOR = {
  name: 'André L. Silva',
  role: 'Especialista em Jurimetria e Análise de Dados',
  jobTitle: 'Especialista em Jurimetria e Legal Analytics no JEC',
  photo: '/images/andre-l-silva.jpg',
  url: '/autor/andre-l-silva/',
  alumniOf: [
    'UNIP — Universidade Paulista',
    'PUC-PR — Pontifícia Universidade Católica do Paraná',
    'EPN — Escola Paulista de Negócios',
    'UMC — Universidade de Mogi das Cruzes'
  ],
};

export const DATASET = {
  total: 39727,
  totalFmt: '39.727',
  recorte: 'Estado de São Paulo',
  fonte: 'Decisões públicas do Tribunal de Justiça de São Paulo — 10 Regiões Administrativas',
  mediaFavoravel: '61,4%',
};

export const OAB_NOTE = 'Conteúdo informativo em conformidade com o Provimento CFOAB nº 205/2021. Sem promessa de resultado.';

/** Rótulos dos formatos editoriais (ver docs/GUIA-DE-ESTILO.md §12). */
export const FORMATOS = {
  analise: { rotulo: 'Análise', desc: 'Coluna assinada: leitura do especialista sobre os dados, em primeira pessoa.' },
  guia: { rotulo: 'Guia', desc: 'Texto de serviço da Redação, com revisão técnica do especialista.' },
} as const;
