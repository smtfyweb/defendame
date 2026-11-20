const _B = import.meta.env.BASE_URL.replace(/\/$/, '');
const _p = (path: string) => `${_B}/${path.replace(/^\//, '')}`;

export const SITE = {
  name: 'DefendaMe',
  url: 'https://smtfyweb.github.io/defendame',
  tagline: 'Seus direitos no Juizado Especial Cível, explicados com dados',
  description: 'Artigos e guias sobre as demandas mais comuns do Juizado Especial Cível, construídos a partir de decisões reais do TJSP.',
  locale: 'pt_BR',
  email: 'contato@defendame.online',          // confirmar
  privacyEmail: 'privacidade@defendame.online', // confirmar
  substack: 'https://substack.com/@andreluisilv',
  instagram: 'https://www.instagram.com/defendame.online/',
  ogDefault: _p('og-default.jpg'),
  // Endpoint que recebe o formulário "Verificar meu caso" (Formspree, Cloudflare Worker, etc.)
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
};

export const AUTHOR = {
  name: 'André L. Silva',
  role: 'Especialista em Legal Analytics',
  city: 'Barueri/SP',
  jobTitle: 'Especialista em Legal Analytics e Juizados Especiais Cíveis',
  photo: _p('images/andre-l-silva.jpg'),
  url: _p('autor/andre-l-silva/'),
  alumniOf: ['Universidade Paulista (UNIP)', 'Pontifícia Universidade Católica do Paraná (PUC-PR)', 'Escola Paulista de Negócios (EPN)', 'Universidade de Mogi das Cruzes (UMC)'],
};

export const DATASET = {
  total: 19558,
  totalFmt: '19.558',
  recorte: 'RAJs 1 e 4',
  fonte: 'Dados extraídos diretamente do TJSP · amostra das RAJs 1 e 4',
};

export const OAB_NOTE = 'Conteúdo informativo em conformidade com o Provimento CFOAB nº 205/2021. Sem promessa de resultado.';

/** Rótulos dos formatos editoriais (ver docs/GUIA-DE-ESTILO.md §12). */
export const FORMATOS = {
  analise: { rotulo: 'Análise', desc: 'Coluna assinada: leitura do especialista sobre os dados, em primeira pessoa.' },
  guia: { rotulo: 'Guia', desc: 'Texto de serviço da Redação, com revisão técnica do especialista.' },
} as const;
