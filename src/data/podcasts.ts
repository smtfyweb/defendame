/**
 * Catálogo de Episódios do DefendaMe Podcast.
 * Alimentado pelas gravações e Audio Overviews baseadas em sentenças reais do TJSP.
 */

export interface EpisodioPodcast {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
  tema: string;
  audioUrl: string;
  duracaoSegundos: number;
  duracaoFormatada: string;
  dataPublicacao: Date;
  arquivoBytes: number;
  youtubeId?: string;
}

export const PODCAST_INFO = {
  titulo: 'DefendaMe Podcast — Jurimetria e Defesa do Consumidor',
  subtitulo: 'Casos Reais, Sentenças do TJSP e Direitos do Consumidor Descomplicados',
  descricao: 'Podcast semanal do DefendaMe com debates dinâmicos, análises de casos reais e estatísticas de decisões dos Juizados Especiais Cíveis do Tribunal de Justiça de São Paulo. Apresentação e curadoria por André L. Silva.',
  autor: 'DefendaMe & André L. Silva',
  email: 'podcast@defendame.online',
  siteUrl: 'https://defendame.pages.dev',
  feedUrl: 'https://defendame.pages.dev/podcast.xml',
  imagem: 'https://defendame.pages.dev/og-default.jpg',
  categoria: 'Government',
  subcategoria: 'Law',
  linguagem: 'pt-BR',
};

export const EPISODIOS_PODCAST: EpisodioPodcast[] = [
  {
    id: 'ep01-golpe-pix-falsa-central',
    numero: 1,
    titulo: 'Episódio 1: O Golpe da Falsa Central e a Devolução do Pix no TJSP',
    subtitulo: 'Quando a inteligência artificial antifraude do banco falha e o Judiciário condena',
    descricao: 'Neste episódio de estreia, nossos apresentadores debatem o caso real da cliente que transferiu suas economias após receber ligação com spoofing da central do banco. Descubra por que 52,5% das ações no TJSP acolhem a responsabilidade das instituições financeiras e o que fazer nas primeiras horas do MED.',
    tema: 'golpe-pix',
    audioUrl: '/audio/podcast-ep01-golpe-pix.mp3',
    duracaoSegundos: 720,
    duracaoFormatada: '12:00',
    dataPublicacao: new Date('2026-11-20T10:00:00Z'),
    arquivoBytes: 11520000,
  },
  {
    id: 'ep02-voo-cancelado-aeroporto',
    numero: 2,
    titulo: 'Episódio 2: Preso no Aeroporto: 7 Horas de Atraso e o Casamento Perdido',
    subtitulo: 'A linha que separa o mero aborrecimento da indenização moral nas Turmas Recursais de SP',
    descricao: 'A história dramática da passageira que perdeu o casamento da filha após um cancelamento injustificado e desassistência da companhia aérea. Análise de 4.848 decisões do TJSP e a tabela de valores reais arbitrados para danos morais e materiais.',
    tema: 'transporte-aereo',
    audioUrl: '/audio/podcast-ep02-voo-cancelado.mp3',
    duracaoSegundos: 850,
    duracaoFormatada: '14:10',
    dataPublicacao: new Date('2026-11-23T10:00:00Z'),
    arquivoBytes: 13600000,
  }
];
