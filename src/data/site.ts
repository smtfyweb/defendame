export const SITE = {
  name: 'DefendaMe',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://defendame.pages.dev',
  tagline: 'Inteligência jurídica independente. Decisões reais. Informação para o cidadão.',
  description: 'Plataforma de pesquisa jurimétrica e informação jurídica que investiga decisões judiciais, interpreta padrões decisórios e traduz conhecimento jurídico em informação acessível sobre as relações de consumo no Juizado Especial Cível paulista.',
  locale: 'pt_BR',
  email: 'contato@defendame.online',
  privacyEmail: 'privacidade@defendame.online',
  youtube: 'https://www.youtube.com/@defendame',
  instagram: 'https://www.instagram.com/defendame.online',
  whatsapp: 'https://wa.me/5511966016189',
  linkedin: 'https://www.linkedin.com/company/defendame',
  twitter: 'https://x.com/defendame',
  facebook: '#',
  substack: '#',
  ogDefault: '/og-default.jpg',
  // Endpoint que recebe o formulário "Verificar meu caso" (Google Apps Script Web App / Formspree)
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || 'https://script.google.com/macros/s/AKfycbw5Ecm-R6v8GKfF_EQAAwka_EsQaD6FTMGerkNLdwlc8Ll3yGYpaasjjHkDRvi29jkVyg/exec',
};

export const AUTHOR = {
  name: 'André L. Silva',
  role: 'Pesquisador Jurídico | Jurimetria e Legal Analytics',
  jobTitle: 'Pesquisador Jurídico e Coordenador de Jurimetria',
  headline: 'Pesquisa jurídica orientada por evidências, análise empírica de decisões judiciais e investigação dos conflitos nas relações de consumo.',
  bioShort: 'Pesquisador jurídico responsável pela estruturação das análises jurimétricas do DefendaMe. Graduado em Direito pela UNIP, em Marketing pela UMC e com formação complementar em Ciência de Dados, IA e Analytics Aplicado pela PUC-PR.',
  photo: '/images/andre-l-silva.jpg',
  url: '/autor/andre-l-silva/',
  alumniOf: [
    'Universidade Paulista (UNIP)',
    'Universidade de Mogi das Cruzes (UMC)',
    'Pontifícia Universidade Católica do Paraná (PUC-PR)'
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

/** Rótulos dos formatos editoriais oficiais do DefendaMe. */
export const FORMATOS = {
  guia: { rotulo: 'Guia Técnico', desc: 'Material informativo da Redação DefendaMe, com revisão técnica do especialista.' },
  analise: { rotulo: 'Análise Autoral', desc: 'Coluna assinada por André L. Silva: investigação de teses e jurisprudência em primeira pessoa.' },
  estudo: { rotulo: 'Estudo Especial', desc: 'Pesquisa aprofundada: levantamento empírico e jurimetria multirregional pela equipe de pesquisa.' },
} as const;
