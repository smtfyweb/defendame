/**
 * Detalhamento Jurimétrico, Provas Indispensáveis e Orientações Oficiais por Demanda.
 * Baseado na pesquisa jurisprudencial do DefendaMe sobre 39.727 decisões do TJSP
 * e nos Modelos Oficiais de Atermação do Juizado Especial Cível [Lei 9.099/1995 e CDC].
 */

export interface ProvaIndispensavel {
  icone: string;
  titulo: string;
  descricao: string;
  tag: string;
}

export interface FichaTecnicaTema {
  tribunal: string;
  abrangencia: string;
  unidadeAnalise: string;
  periodo: string;
  criterioExito: string;
}

export interface DetalhamentoJurimetria {
  total: number;
  procedenteTotalPct: number;
  parcialPct: number;
  improcedentePct: number;
  acordosPct: number;
  faixaDanoMoral: string;
  faixaDescricao?: string;
  comentario: string;
  fichaTecnica?: FichaTecnicaTema;
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
      faixaDescricao: 'Valores médios para cancelamento sem assistência material ou atraso superior a 4 horas',
      comentario: 'Em 30,3% das ações com procedência parcial, o passageiro recupera os gastos materiais comprovados, mas o dano moral é reduzido ou afastado quando não há prova de atraso superior a 4 horas ou perda de compromisso inadiável. O registro documental das tentativas de assistência é decisivo.',
      fichaTecnica: {
        tribunal: 'Tribunal de Justiça do Estado de São Paulo [TJSP]',
        abrangencia: '10 Regiões Administrativas Judiciárias [Capital, Grande SP, Litoral e Interior]',
        unidadeAnalise: 'Sentenças de primeiro grau e acórdãos das Turmas Recursais',
        periodo: '2023 a 2026',
        criterioExito: 'Procedência total: acolhimento de dano material e moral; Parcial: ressarcimento material com exclusão ou redução do dano moral.'
      }
    },
    provasIndispensaveis: [
      {
        icone: 'plane',
        titulo: 'Cartão de embarque e código localizador',
        descricao: 'Comprovante do bilhete aéreo contratado [físico ou gerado no aplicativo da companhia], contendo o código de reserva e trechos originais.',
        tag: 'Contrato e Voo'
      },
      {
        icone: 'doc',
        titulo: 'Declaração formal de contingência',
        descricao: 'Documento emitido no balcão da companhia atestando o cancelamento ou o horário real de pouso, conforme Art. 20 da Resolução 400 da ANAC.',
        tag: 'Certidão da Cia'
      },
      {
        icone: 'clock',
        titulo: 'Registro visual do atraso',
        descricao: 'Fotografias do painel do aeroporto indicando o status de voo atrasado ou cancelado e capturas de tela do histórico oficial do voo.',
        tag: 'Prova Temporal'
      },
      {
        icone: 'receipt',
        titulo: 'Comprovantes de gastos com assistência material',
        descricao: 'Notas fiscais de alimentação, transporte e hotel pagos pelo passageiro em decorrência da recusa ou insuficiência de assistência pela companhia.',
        tag: 'Dano Material'
      },
      {
        icone: 'chat',
        titulo: 'Protocolo de reclamação prévia',
        descricao: 'Registro de solicitação perante o SAC da empresa ou na plataforma Consumidor.gov.br, com a resposta ou decurso de prazo sem atendimento.',
        tag: 'Tentativa Prévia'
      }
    ],
    regrasJec: {
      foro: 'Fórum da comarca do domicílio do consumidor [Art. 101, I do CDC]',
      orgaoPrevio: 'Consumidor.gov.br e canais da ANAC',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 salários mínimos ou em fase recursal perante o Colégio Recursal, patrocínio privativo por advogado.'
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
      faixaDescricao: 'Valores médios para extravios temporários superiores a 3 dias ou avarias materiais comprovadas',
      comentario: 'O TJSP considera o extravio temporário superior a 3 dias como fato gerador de abalo indenizável quando acompanhado de comprovantes de aquisição de itens emergenciais no destino. O registro imediato do RIB no saguão de desembarque é determinante.',
      fichaTecnica: {
        tribunal: 'Tribunal de Justiça do Estado de São Paulo [TJSP]',
        abrangencia: 'Comarcas com aeroportos e domicílio dos passageiros no Estado de SP',
        unidadeAnalise: 'Sentenças do JEC e decisões colegiadas das Turmas Recursais',
        periodo: '2023 a 2026',
        criterioExito: 'Procedência integral: indenização moral somada ao ressarcimento das despesas emergenciais e danos materiais comprovados.'
      }
    },
    provasIndispensaveis: [
      {
        icone: 'luggage',
        titulo: 'Formulário RIB [Registro de Irregularidade de Bagagem]',
        descricao: 'Documento expedido obrigatoriamente no saguão de desembarque antes da saída da área restrita do aeroporto.',
        tag: 'Documento Vital'
      },
      {
        icone: 'doc',
        titulo: 'Comprovante de despacho e etiqueta da mala',
        descricao: 'Etiqueta autoadesiva anexada ao cartão de embarque atestando a custódia da bagagem pela companhia aérea transportadora.',
        tag: 'Vínculo de Despacho'
      },
      {
        icone: 'receipt',
        titulo: 'Notas fiscais de itens de primeira necessidade',
        descricao: 'Comprovantes de compra de artigos de vestuário, medicamentos e itens de higiene pessoal no local de destino durante a ausência da mala.',
        tag: 'Dano Emergente'
      },
      {
        icone: 'chat',
        titulo: 'Protocolo de rastreamento e SAC',
        descricao: 'Histórico de comunicações telefônicas ou eletrônicas solicitando a localização e devolução da bagagem extraviada.',
        tag: 'Tentativa Prévia'
      }
    ],
    regrasJec: {
      foro: 'Fórum da comarca do domicílio do consumidor [Art. 101, I do CDC]',
      orgaoPrevio: 'ANAC e Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 salários mínimos ou em fase recursal, patrocínio privativo por advogado.'
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
      faixaDescricao: 'Restituição integral do valor transferido somada a dano moral em falhas evidentes de segurança e perfil',
      comentario: 'Nas decisões examinadas, a identificação de operações incompatíveis com o perfil habitual de movimentação do correntista e de falhas nos mecanismos preventivos de segurança das instituições figura como elemento determinante na fundamentação de decisões favoráveis. Em 20,4% das ações com procedência parcial, o Judiciário determina a devolução dos valores, mas afasta a indenização extrapatrimonial.',
      fichaTecnica: {
        tribunal: 'Tribunal de Justiça do Estado de São Paulo [TJSP]',
        abrangencia: '10 Regiões Administrativas Judiciárias paulistas',
        unidadeAnalise: 'Sentenças do JEC e acórdãos das Turmas Recursais cíveis',
        periodo: '2023 a 2026',
        criterioExito: 'Procedente: condenação à restituição integral com ou sem danos morais; Improcedente: reconhecimento de culpa exclusiva da vítima ou terceiro.'
      }
    },
    provasIndispensaveis: [
      {
        icone: 'pix',
        titulo: 'Comprovante oficial com ID da transação Pix',
        descricao: 'Comprovante bancário contendo chave Pix, CPF ou CNPJ de destino, instituição recebedora e o código identificador EndToEnd.',
        tag: 'Rastro Bancário'
      },
      {
        icone: 'doc',
        titulo: 'Boletim de Ocorrência detalhado',
        descricao: 'Registro policial contendo a narrativa cronológica circunstanciada dos fatos, número telefônico chamador e dados da conta fraudadora.',
        tag: 'Fé Pública'
      },
      {
        icone: 'shield',
        titulo: 'Protocolo de contestação e solicitação do MED',
        descricao: 'Comunicação imediata à instituição financeira solicitando o Mecanismo Especial de Devolução [Resolução BCB nº 103 de 2021 e normas vigentes]. O acionamento célere amplia a viabilidade de retenção preventiva dos fundos.',
        tag: 'MED / Banco Central'
      },
      {
        icone: 'chat',
        titulo: 'Registros de spoofing e contatos fraudulentos',
        descricao: 'Capturas de tela de chamadas telefônicas com mascaramento de número [falsa central], mensagens SMS ou diálogos por aplicativo de mensagens.',
        tag: 'Falha de Segurança'
      }
    ],
    regrasJec: {
      foro: 'Fórum da comarca do domicílio do correntista [Art. 101, I do CDC]',
      orgaoPrevio: 'Banco Central do Brasil e plataforma Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 salários mínimos ou em fase recursal perante o Colégio Recursal, patrocínio privativo por advogado.'
    },
    guiasPrevistos: []
  },
  'negativacao-indevida': {
    slug: 'negativacao-indevida',
    tituloSecaoGuias: 'Nome sujo indevidamente: decisões do TJSP, prazos de exclusão e dano moral',
    subtituloSecaoGuias: 'Série jurídica sobre exclusão do CPF dos órgãos de restrição ao crédito e parâmetros para quantificação de indenizações perante as Turmas Recursais:',
    jurimetria: {
      total: 5966,
      procedenteTotalPct: 41.2,
      parcialPct: 23.6,
      improcedentePct: 35.2,
      acordosPct: 21.0,
      faixaDanoMoral: 'R$ 5.000 a R$ 10.000',
      faixaDescricao: 'Valores habituais fixados pelas Turmas Recursais em negativações indevidas sem inscrição legítima preexistente',
      comentario: 'Nas ações acolhidas integralmente, o cancelamento da restrição é determinado em conjunto com a condenação em danos morais in re ipsa. Nos casos de procedência parcial [23,6%], a anotação irregular é excluída, mas a indenização pecuniária é mitigada ou afastada quando identificadas anotações preexistentes controvertidas, nos termos da interpretação conferida à Súmula 385 do STJ e ao REsp 1.981.798/MG.',
      fichaTecnica: {
        tribunal: 'Tribunal de Justiça do Estado de São Paulo [TJSP]',
        abrangencia: 'Todas as comarcas do Estado de São Paulo [10 RAJs]',
        unidadeAnalise: 'Sentenças cíveis do JEC e acórdãos colegiados das Turmas Recursais',
        periodo: '2023 a 2026',
        criterioExito: 'Procedente: exclusão do gravame cumulada com dano moral; Parcial: baixa cadastral com rejeição ou mitigação do dano extrapatrimonial.'
      }
    },
    provasIndispensaveis: [
      {
        icone: 'doc',
        titulo: 'Extrato analítico oficial do Serasa ou SPC',
        descricao: 'Relatório circunstanciado obtido nos canais oficiais dos birôs de crédito com data da inclusão, valor inscrito, contrato e CNPJ do apontante.',
        tag: 'Prova Material'
      },
      {
        icone: 'receipt',
        titulo: 'Comprovante de pagamento ou termo de quitação',
        descricao: 'Comprovante de adimplemento tempestivo ou termo de quitação demonstrando que o débito já havia sido liquidado antes da restrição ou do prazo do credor.',
        tag: 'Quitação Prévia'
      },
      {
        icone: 'shield',
        titulo: 'Boletim de Ocorrência por fraude documental',
        descricao: 'Registro policial lavrado em hipótese de contratação espúria perpetrada por terceiro mediante uso indevido dos dados cadastrais do consumidor.',
        tag: 'Fraude / Terceiro'
      },
      {
        icone: 'file-x',
        titulo: 'Documentação sobre apontamentos antecedentes',
        descricao: 'Certidões e elementos probatórios que permitam demonstrar a ilegitimidade ou discussão judicial idônea de eventuais restrições anteriores [REsp 1.981.798/MG do STJ].',
        tag: 'Súmula 385 STJ'
      }
    ],
    regrasJec: {
      foro: 'Fórum da comarca do domicílio do consumidor [Art. 101, I do CDC]',
      orgaoPrevio: 'Procon e Consumidor.gov.br',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 salários mínimos ou em fase recursal perante o Colégio Recursal, patrocínio privativo por advogado.'
    },
    guiasPrevistos: []
  },
  'consignado-rmc': {
    slug: 'consignado-rmc',
    tituloSecaoGuias: 'Descontos indevidos no INSS e reserva de margem [RMC/RCC]: decisões do TJSP',
    subtituloSecaoGuias: 'Análises jurimétricas e guias técnicos sobre fraudes contra aposentados, cancelamento de contratos e restituição de valores no Juizado Especial:',
    jurimetria: {
      total: 1199,
      procedenteTotalPct: 24.5,
      parcialPct: 15.6,
      improcedentePct: 59.9,
      acordosPct: 16.4,
      faixaDanoMoral: 'R$ 3.000 a R$ 8.000 + Restituição de valores',
      faixaDescricao: 'Valores médios arbitrados em caso de fraude documental ou retenção indevida de margem consignável',
      comentario: 'Nas decisões examinadas no TJSP, a distinção central reside na modalidade de contratação: empréstimos consignados não autorizados com assinaturas falsificadas geram restituição e danos morais quando comprovada a ausência de contratação; já em litígios de cartão RMC/RCC, as decisões exigem a demonstração do vício de consentimento e da omissão dos deveres de informação sobre os encargos do cartão.',
      fichaTecnica: {
        tribunal: 'Tribunal de Justiça do Estado de São Paulo [TJSP]',
        abrangencia: '10 Regiões Administrativas Judiciárias paulistas',
        unidadeAnalise: 'Sentenças do JEC e acórdãos das Turmas Recursais cíveis',
        periodo: '2023 a 2026',
        criterioExito: 'Procedente: cancelamento do contrato com devolução dos descontos e dano moral; Parcial: cancelamento com devolução simples dos valores sem dano moral.'
      }
    },
    provasIndispensaveis: [
      {
        icone: 'receipt',
        titulo: 'Extrato de Pagamento de Benefício do INSS [HISCRE]',
        descricao: 'Demonstrativo analítico oficial emitido pela previdência social contendo a discriminação mensal das rubricas de desconto aplicadas ao benefício.',
        tag: 'Rastro Previdenciário'
      },
      {
        icone: 'doc',
        titulo: 'Histórico de Empréstimos Consignados [HISCON]',
        descricao: 'Documento oficial do INSS elencando todos os contratos ativos, suspensos e excluídos, informando o banco credor e o valor das parcelas.',
        tag: 'Histórico de Contratos'
      },
      {
        icone: 'shield',
        titulo: 'Extrato bancário da conta receptora do benefício',
        descricao: 'Extrato integral do período da suposta contratação demonstrando o não recebimento de TED/PIX ou a restituição imediata do mútuo não solicitado.',
        tag: 'Ausência de Proveito'
      },
      {
        icone: 'chat',
        titulo: 'Faturas e histórico de uso do cartão RMC ou RCC',
        descricao: 'Documentação da instituição financeira demonstrando se o cartão de crédito emitido foi ou não utilizado para aquisição de bens no comércio varejista.',
        tag: 'Vício de Consentimento'
      },
      {
        icone: 'file-x',
        titulo: 'Protocolo de contestação perante o banco e o INSS',
        descricao: 'Comprovação de reclamação formal registrada no portal Meu INSS, no Consumidor.gov.br ou perante o SAC da instituição financeira.',
        tag: 'Tentativa Prévia'
      }
    ],
    regrasJec: {
      foro: 'Fórum da comarca do domicílio do beneficiário do INSS [Art. 101, I do CDC]',
      orgaoPrevio: 'Plataforma Consumidor.gov.br e Ouvidoria do INSS',
      jusPostulandi: 'Até 20 salários mínimos sem advogado; acima de 20 salários mínimos ou em fase recursal perante o Colégio Recursal, patrocínio privativo por advogado.'
    },
    guiasPrevistos: [
      {
        titulo: 'Empréstimo consignado não contratado: direitos do aposentado e precedentes do TJSP',
        formato: 'guia',
        leitura: 6,
        linha: 'Como contestar descontos indevidos no benefício do INSS e exigir a repetição do indébito.',
        icone: 'receipt'
      },
      {
        titulo: 'Cartão de crédito consignado RMC e RCC: como comprovar vício de consentimento',
        formato: 'analise',
        leitura: 8,
        linha: 'Análise de decisões das Turmas Recursais paulistas sobre a conversão em empréstimo tradicional e dano moral.',
        icone: 'card'
      }
    ]
  }
};

export function getTemaDetalhamento(slug: string): TemaDetalhamento | null {
  return TEMAS_DETALHAMENTO[slug] || null;
}
