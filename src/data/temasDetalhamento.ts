/**
 * Detalhamento Jurimétrico, Provas Indispensáveis e Orientações Oficiais por Demanda.
 * Baseado na pesquisa jurisprudencial do DefendaMe sobre 39.727 decisões do TJSP
 * e nos Modelos Oficiais de Atermação do Juizado Especial Cível (Lei 9.099/1995 e CDC).
 */

export interface ProvaIndispensavel {
  icone: string;
  titulo: string;
  descricao: string;
  tag: string;
}

export interface DetalhamentoJurimetria {
  total: number;
  procedenteTotalPct: number;
  parcialPct: number;
  improcedentePct: number;
  acordosPct: number;
  faixaDanoMoral: string;
  comentario: string;
}

export interface RegrasJecTema {
  foro: string;
  orgaoPrevio: string;
  jusPostulandi: string;
}

export interface GuiaPrevisto {
  titulo: string;
  formato: 'analise' | 'guia';
  leitura: number;
  linha: string;
  icone?: string;
}

export interface TemaDetalhamento {
  slug: string;
  tituloSecaoGuias?: string;
  subtituloSecaoGuias?: string;
  jurimetria: DetalhamentoJurimetria;
  provasIndispensaveis: ProvaIndispensavel[];
  regrasJec: RegrasJecTema;
  guiasPrevistos: GuiaPrevisto[];
}

export const TEMAS_DETALHAMENTO: Record<string, TemaDetalhamento> = {
  'transporte-aereo': {
    slug: 'transporte-aereo',
    tituloSecaoGuias: 'Voo cancelado, atraso e overbooking: decisões do TJSP e direitos do passageiro',
    subtituloSecaoGuias: 'Guias práticos e análises baseadas na jurisprudência das Turmas Recursais de São Paulo. Saiba quando cabe dano moral e reembolso integral:',
    jurimetria: {
      total: 4848,
      procedenteTotalPct: 42.4,
      parcialPct: 30.3,
      improcedentePct: 27.3,
      acordosPct: 24.5,
      faixaDanoMoral: 'R$ 3.000 a R$ 6.000',
      comentario: 'Em 30,3% das ações com procedência parcial, o passageiro recupera os gastos materiais, mas o dano moral é reduzido ou afastado quando não há prova de atraso superior a 4 horas ou perda de compromisso. Nossos guias explicam exatamente como comprovar esse abalo no TJSP.'
    },
    provasIndispensaveis: [
      {
        icone: 'plane',
        titulo: 'Cartão de embarque e localizador',
        descricao: 'Comprovante do bilhete contratado (físico ou no app da companhia) com o código de reserva e trechos originais.',
        tag: 'Contrato e Voo'
      },
      {
        icone: 'doc',
        titulo: 'Declaração formal de contingência',
        descricao: 'Documento emitido no balcão do aeroporto atestando o cancelamento ou o horário real de pouso (Art. 20 da Res. 400 ANAC).',
        tag: 'Certidão da Cia'
      },
      {
        icone: 'clock',
        titulo: 'Registro visual do atraso',
        descricao: 'Fotos do painel do aeroporto com o status de voo atrasado/cancelado e prints do histórico do aplicativo da companhia aérea.',
        tag: 'Prova Temporal'
      },
      {
        icone: 'receipt',
        titulo: 'Comprovantes de gastos com assistência',
        descricao: 'Notas fiscais de alimentação, transporte (táxi/Uber) e hotel pagos do próprio bolso por recusa ou ausência de voucher da empresa.',
        tag: 'Dano Material'
      },
      {
        icone: 'chat',
        titulo: 'Protocolo de reclamação prévia',
        descricao: 'Registro de reclamação no portal Consumidor.gov.br ou SAC com a resposta ou silêncio da companhia aérea.',
        tag: 'Tentativa Prévia'
      }
    ],
    regrasJec: {
      foro: 'Fórum da sua própria comarca (domicílio do consumidor, Art. 101, I do CDC)',
      orgaoPrevio: 'ANAC e plataforma oficial Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 SM ou em fase recursal, advogado obrigatório.'
    },
    guiasPrevistos: [
      {
        titulo: 'Voo cancelado: critérios do TJSP para fixação de dano moral e reembolso',
        formato: 'guia',
        leitura: 6,
        linha: 'Entenda quando o cancelamento gera indenização e como comprovar a falha de assistência material da companhia aérea.',
        icone: 'file-x'
      },
      {
        titulo: 'Atraso superior a 4 horas: como demonstrar a perda de compromissos no JEC',
        formato: 'analise',
        leitura: 8,
        linha: 'Análise de decisões reais sobre alimentação, hospedagem e a linha que separa o mero aborrecimento da indenização.',
        icone: 'clock'
      },
      {
        titulo: 'Overbooking e perda de conexão: direitos imediatos do passageiro',
        formato: 'guia',
        leitura: 5,
        linha: 'Preterição de embarque e reacomodação em voo de terceiros sob a ótica da Lei 9.099/1995.',
        icone: 'user-x'
      }
    ]
  },
  'bagagem': {
    slug: 'bagagem',
    jurimetria: {
      total: 310,
      procedenteTotalPct: 45.2,
      parcialPct: 22.8,
      improcedentePct: 32.0,
      acordosPct: 28.0,
      faixaDanoMoral: 'R$ 2.500 a R$ 5.000',
      comentario: 'O TJSP considera o extravio temporário superior a 3 dias como fato gerador de dano moral presumido quando comprovada a compra de itens emergenciais no destino. Registrar o RIB no aeroporto é o divisor de águas entre o acolhimento e a rejeição.'
    },
    provasIndispensaveis: [
      {
        icone: 'luggage',
        titulo: 'Formulário RIB (Registro de Irregularidade de Bagagem)',
        descricao: 'Documento emitido obrigatoriamente no saguão de desembarque antes de sair da área restrita do aeroporto.',
        tag: 'Documento Vital'
      },
      {
        icone: 'doc',
        titulo: 'Comprovante de despacho e ticket da mala',
        descricao: 'Etiqueta autoadesiva fixada no cartão de embarque comprovando a entrega da bagagem à companhia aérea.',
        tag: 'Vínculo do Despacho'
      },
      {
        icone: 'receipt',
        titulo: 'Notas fiscais de itens de primeira necessidade',
        descricao: 'Recibos de compras de roupas, remédios e artigos de higiene adquiridos no destino enquanto a mala esteve ausente.',
        tag: 'Dano Emergente'
      },
      {
        icone: 'chat',
        titulo: 'Protocolo de busca e SAC da empresa',
        descricao: 'Histórico de contatos telefônicos ou por aplicativo cobrando a localização e a devolução da bagagem.',
        tag: 'Tentativa Prévia'
      }
    ],
    regrasJec: {
      foro: 'Fórum da sua própria comarca (domicílio do consumidor, Art. 101, I do CDC)',
      orgaoPrevio: 'ANAC e Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 SM ou em fase recursal, advogado obrigatório.'
    },
    guiasPrevistos: [
      {
        titulo: 'Extravio de bagagem: como comprovar o dano moral no TJSP',
        formato: 'guia',
        leitura: 6,
        linha: 'Critérios judiciais para arbitramento de indenização por mala perdida temporária ou definitivamente.'
      },
      {
        titulo: 'Mala danificada ou itens furtados: procedimentos no desembarque',
        formato: 'analise',
        leitura: 7,
        linha: 'Como produzir a prova fotográfica imediata e exigir o reparo ou indenização pela companhia aérea.'
      }
    ]
  },
  'golpe-pix': {
    slug: 'golpe-pix',
    jurimetria: {
      total: 5837,
      procedenteTotalPct: 32.1,
      parcialPct: 20.4,
      improcedentePct: 47.5,
      acordosPct: 18.2,
      faixaDanoMoral: 'Restituição integral + R$ 3.000 a R$ 8.000',
      comentario: 'Em 20,4% das ações parciais, o banco devolve o valor transferido mas não é condenado em dano moral quando alega facilitação do cliente. As vitórias integrais ocorrem quando há falha do mecanismo antifraude (transação fora do perfil ou limite noturno violado).'
    },
    provasIndispensaveis: [
      {
        icone: 'pix',
        titulo: 'Comprovante oficial com ID da transação Pix',
        descricao: 'Documento bancário contendo a chave Pix, CPF/CNPJ de destino, instituição recebedora e o código identificador EndToEnd.',
        tag: 'Rastro Bancário'
      },
      {
        icone: 'doc',
        titulo: 'Boletim de Ocorrência detalhado',
        descricao: 'Registro policial contendo narrativa cronológica dos fatos, número de telefone que fez a ligação e dados da conta fraudadora.',
        tag: 'Fé Pública'
      },
      {
        icone: 'shield',
        titulo: 'Protocolo de contestação MED (em 24h)',
        descricao: 'Comprovante do acionamento do Mecanismo Especial de Devolução (Resolução BCB nº 103) junto ao banco do correntista.',
        tag: 'MED / Banco Central'
      },
      {
        icone: 'chat',
        titulo: 'Prints e registros da falsa central / spoofing',
        descricao: 'Capturas de tela das ligações simulando o número oficial do banco, mensagens de SMS ou conversas com os golpistas.',
        tag: 'Falha de Segurança'
      }
    ],
    regrasJec: {
      foro: 'Fórum da sua própria comarca (domicílio do consumidor, Art. 101, I do CDC)',
      orgaoPrevio: 'Banco Central do Brasil (Bacen) e Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 SM ou em fase recursal, advogado obrigatório.'
    },
    guiasPrevistos: []
  },
  'negativacao-indevida': {
    slug: 'negativacao-indevida',
    tituloSecaoGuias: 'Nome sujo indevidamente: decisões do TJSP, prazos de exclusão e dano moral',
    subtituloSecaoGuias: 'Série jurídica completa sobre como retirar o CPF dos cadastros restritivos em até 5 dias úteis e quantificar indenizações contra bancos e securitizadoras:',
    jurimetria: {
      total: 5966,
      procedenteTotalPct: 41.2,
      parcialPct: 23.6,
      improcedentePct: 35.2,
      acordosPct: 21.0,
      faixaDanoMoral: 'R$ 5.000 a R$ 10.000',
      comentario: 'Em 23,6% dos casos com parcial procedência, a inscrição é cancelada liminarmente, mas o dano moral é afastado por força da Súmula 385 do STJ (anotação preexistente). As indenizações integrais (64,8% somadas) ocorrem quando comprovada a ausência de dívidas legítimas anteriores ou quando a dívida já fora quitada.'
    },
    provasIndispensaveis: [
      {
        icone: 'doc',
        titulo: 'Extrato analítico oficial do Serasa/SPC',
        descricao: 'Relatório completo baixado diretamente no portal oficial contendo data da inclusão, valor, número do contrato e CNPJ do credor.',
        tag: 'Prova Material'
      },
      {
        icone: 'receipt',
        titulo: 'Comprovante de pagamento ou acordo',
        descricao: 'Comprovante de quitação do boleto ou termo de acordo demonstrando que o débito já havia sido adimplido (Súmula 548 STJ).',
        tag: 'Quitação Prévia'
      },
      {
        icone: 'shield',
        titulo: 'Boletim de Ocorrência por fraude documental',
        descricao: 'Registro formal em caso de conta ou cartão aberto por golpistas sem consentimento do titular do CPF.',
        tag: 'Fraude / Terceiro'
      },
      {
        icone: 'file-x',
        titulo: 'Certidão de distribuição cível (afastamento Súmula 385)',
        descricao: 'Certidão que comprova que as demais anotações preexistentes também estão sendo discutidas judicialmente.',
        tag: 'Blindagem STJ'
      }
    ],
    regrasJec: {
      foro: 'Fórum da sua própria comarca (domicílio do consumidor, Art. 101, I do CDC)',
      orgaoPrevio: 'Procon estadual e plataforma Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 SM ou em fase recursal, advogado obrigatório.'
    },
    guiasPrevistos: []
  }
};

export function getTemaDetalhamento(slug: string): TemaDetalhamento | null {
  return TEMAS_DETALHAMENTO[slug] || null;
}
