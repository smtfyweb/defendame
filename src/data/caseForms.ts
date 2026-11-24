// Perguntas específicas de cada demanda no formulário "Verificar meu caso".
// tipo: text | select | money | date | month. Para adicionar uma pergunta, inclua um item em "campos".
export interface Campo { id: string; rotulo: string; tipo: 'text' | 'select' | 'money' | 'date' | 'month'; opcoes?: string[]; placeholder?: string; obrigatorio: boolean }
export const CASE_FORMS: Record<string, { titulo: string; campos: Campo[] }> = {
  "negativacao-indevida": {
    "titulo": "Informações da negativação",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Empresa que negativou",
        "tipo": "text",
        "placeholder": "Ex.: operadora, loja, banco",
        "obrigatorio": true
      },
      {
        "id": "orgao",
        "rotulo": "Onde está negativado",
        "tipo": "select",
        "opcoes": [
          "Serasa",
          "SPC",
          "Boa Vista",
          "Não sei"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor da dívida (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 480,00",
        "obrigatorio": false
      },
      {
        "id": "motivo",
        "rotulo": "Motivo",
        "tipo": "select",
        "opcoes": [
          "Não reconheço a dívida",
          "Dívida já paga",
          "Contrato aberto por golpista",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "outras",
        "rotulo": "Há outras negativações no seu nome?",
        "tipo": "select",
        "opcoes": [
          "Não",
          "Sim",
          "Não sei"
        ],
        "obrigatorio": true
      }
    ]
  },
  "consignado-rmc": {
    "titulo": "Informações do desconto",
    "campos": [
      {
        "id": "banco",
        "rotulo": "Banco que faz o desconto",
        "tipo": "text",
        "placeholder": "Ex.: BMG, Pan, C6 Consignado",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de problema",
        "tipo": "select",
        "opcoes": [
          "Empréstimo que não contratei",
          "Cartão consignado RMC/RCC",
          "Desconto acima do contratado",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor descontado por mês (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 150,00",
        "obrigatorio": true
      },
      {
        "id": "desde",
        "rotulo": "Desde quando",
        "tipo": "month",
        "placeholder": "",
        "obrigatorio": false
      },
      {
        "id": "beneficio",
        "rotulo": "Tipo de benefício",
        "tipo": "select",
        "opcoes": [
          "Aposentadoria",
          "Pensão",
          "BPC/LOAS",
          "Outro"
        ],
        "obrigatorio": true
      }
    ]
  },
  "cartao-de-credito": {
    "titulo": "Informações do cartão",
    "campos": [
      {
        "id": "banco",
        "rotulo": "Banco ou emissor",
        "tipo": "text",
        "placeholder": "Ex.: Itaú, Santander",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de problema",
        "tipo": "select",
        "opcoes": [
          "Anuidade cobrada indevidamente",
          "Compra que não reconheço",
          "Cartão que não solicitei",
          "Juros ou tarifas abusivas",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor contestado (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 1.200,00",
        "obrigatorio": false
      }
    ]
  },
  "superendividamento": {
    "titulo": "Sua situação financeira",
    "campos": [
      {
        "id": "renda",
        "rotulo": "Renda líquida mensal (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 2.800,00",
        "obrigatorio": true
      },
      {
        "id": "parcelas",
        "rotulo": "Total pago em dívidas por mês (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 2.100,00",
        "obrigatorio": true
      },
      {
        "id": "credores",
        "rotulo": "Quantos credores",
        "tipo": "select",
        "opcoes": [
          "1 a 2",
          "3 a 5",
          "Mais de 5"
        ],
        "obrigatorio": true
      },
      {
        "id": "tipos",
        "rotulo": "Principais dívidas",
        "tipo": "select",
        "opcoes": [
          "Empréstimos pessoais",
          "Consignado",
          "Cartão de crédito",
          "Cheque especial",
          "Várias"
        ],
        "obrigatorio": false
      }
    ]
  },
  "protesto-indevido": {
    "titulo": "Informações do protesto",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Quem protestou",
        "tipo": "text",
        "placeholder": "Ex.: empresa de cobrança",
        "obrigatorio": true
      },
      {
        "id": "cidade_cartorio",
        "rotulo": "Cidade do cartório",
        "tipo": "text",
        "placeholder": "Ex.: Barueri",
        "obrigatorio": false
      },
      {
        "id": "valor",
        "rotulo": "Valor do título (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 950,00",
        "obrigatorio": false
      },
      {
        "id": "motivo",
        "rotulo": "Motivo",
        "tipo": "select",
        "opcoes": [
          "Não reconheço a dívida",
          "Dívida já paga",
          "Dívida prescrita (mais de 5 anos)",
          "Outro"
        ],
        "obrigatorio": true
      }
    ]
  },
  "energia-eletrica": {
    "titulo": "Informações do fornecimento",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Distribuidora",
        "tipo": "select",
        "opcoes": [
          "Enel SP",
          "CPFL",
          "Neoenergia Elektro",
          "Outra"
        ],
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de problema",
        "tipo": "select",
        "opcoes": [
          "Falta de energia prolongada",
          "Aparelhos queimados",
          "TOI ou multa por irregularidade",
          "Cobrança indevida",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "horas",
        "rotulo": "Tempo sem energia",
        "tipo": "select",
        "opcoes": [
          "Menos de 24 horas",
          "De 1 a 3 dias",
          "Mais de 3 dias",
          "Não se aplica"
        ],
        "obrigatorio": false
      },
      {
        "id": "valor",
        "rotulo": "Prejuízo estimado (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 1.800,00",
        "obrigatorio": false
      }
    ]
  },
  "telefonia": {
    "titulo": "Informações da operadora",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Operadora",
        "tipo": "select",
        "opcoes": [
          "Vivo",
          "Claro",
          "TIM",
          "Oi",
          "Outra"
        ],
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de problema",
        "tipo": "select",
        "opcoes": [
          "Cobrança após cancelamento",
          "Portabilidade não autorizada",
          "Clonagem de chip (SIM swap)",
          "Serviço que não contratei",
          "Internet ou linha sem funcionar",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "protocolo",
        "rotulo": "Número de protocolo",
        "tipo": "text",
        "placeholder": "Se tiver",
        "obrigatorio": false
      }
    ]
  },
  "planos-de-saude": {
    "titulo": "Informações do plano",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Operadora do plano",
        "tipo": "text",
        "placeholder": "Ex.: Notredame, Hapvida, Amil, SulAmérica, Unimed",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Tipo de problema",
        "tipo": "select",
        "opcoes": [
          "Negativa de cirurgia ou procedimento",
          "Negativa de medicamento",
          "Negativa de exame",
          "Reajuste abusivo",
          "Descredenciamento",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "urgencia",
        "rotulo": "É urgente?",
        "tipo": "select",
        "opcoes": [
          "Sim, urgente",
          "Não"
        ],
        "obrigatorio": true
      },
      {
        "id": "laudo",
        "rotulo": "Tem pedido ou laudo médico?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Não"
        ],
        "obrigatorio": false
      }
    ]
  },
  "transporte-aereo": {
    "titulo": "Informações do voo",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Companhia aérea",
        "tipo": "select",
        "opcoes": [
          "LATAM",
          "GOL",
          "Azul",
          "TAP",
          "Outra"
        ],
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "O que aconteceu",
        "tipo": "select",
        "opcoes": [
          "Voo cancelado",
          "Atraso",
          "Overbooking (preterição)",
          "Perda de conexão",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "atraso",
        "rotulo": "Atraso na chegada ao destino",
        "tipo": "select",
        "opcoes": [
          "Menos de 4 horas",
          "De 4 a 8 horas",
          "Mais de 8 horas",
          "Perdi a viagem"
        ],
        "obrigatorio": true
      },
      {
        "id": "data",
        "rotulo": "Data do voo",
        "tipo": "date",
        "placeholder": "",
        "obrigatorio": true
      },
      {
        "id": "assistencia",
        "rotulo": "Recebeu assistência (alimentação, hotel)?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Parcialmente",
          "Não"
        ],
        "obrigatorio": false
      }
    ]
  },
  "bagagem": {
    "titulo": "Informações da bagagem",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Companhia aérea",
        "tipo": "select",
        "opcoes": [
          "LATAM",
          "GOL",
          "Azul",
          "TAP",
          "Outra"
        ],
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "O que aconteceu",
        "tipo": "select",
        "opcoes": [
          "Bagagem extraviada",
          "Entregue com atraso",
          "Bagagem danificada",
          "Itens furtados",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "dias",
        "rotulo": "Dias sem a bagagem",
        "tipo": "select",
        "opcoes": [
          "1 a 2 dias",
          "3 a 7 dias",
          "Mais de 7 dias",
          "Não foi devolvida"
        ],
        "obrigatorio": false
      },
      {
        "id": "valor",
        "rotulo": "Valor estimado dos itens (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 3.000,00",
        "obrigatorio": false
      },
      {
        "id": "rib",
        "rotulo": "Fez o registro no aeroporto (RIB)?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Não"
        ],
        "obrigatorio": false
      }
    ]
  },
  "compras-online": {
    "titulo": "Informações da compra",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Loja ou plataforma",
        "tipo": "text",
        "placeholder": "Ex.: Mercado Livre, Shopee, Amazon",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "O que aconteceu",
        "tipo": "select",
        "opcoes": [
          "Produto não entregue",
          "Produto com defeito",
          "Troca ou devolução negada",
          "Arrependimento negado (7 dias)",
          "Cancelamento de curso ou serviço",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor pago (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 650,00",
        "obrigatorio": true
      },
      {
        "id": "data",
        "rotulo": "Data da compra",
        "tipo": "date",
        "placeholder": "",
        "obrigatorio": false
      }
    ]
  },
  "acidente-de-transito": {
    "titulo": "Informações do acidente",
    "campos": [
      {
        "id": "tipo",
        "rotulo": "Tipo de colisão",
        "tipo": "select",
        "opcoes": [
          "Traseira",
          "Lateral",
          "Frontal",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "seguro",
        "rotulo": "O outro motorista tem seguro?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Não",
          "Não sei"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor do orçamento do conserto (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 4.200,00",
        "obrigatorio": true
      },
      {
        "id": "data",
        "rotulo": "Data do acidente",
        "tipo": "date",
        "placeholder": "",
        "obrigatorio": true
      },
      {
        "id": "provas",
        "rotulo": "Tem B.O., fotos ou testemunhas?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Não"
        ],
        "obrigatorio": false
      }
    ]
  },
  "desvio-produtivo": {
    "titulo": "Informações do atendimento",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Empresa",
        "tipo": "text",
        "placeholder": "Nome da empresa",
        "obrigatorio": true
      },
      {
        "id": "servico",
        "rotulo": "Tipo de serviço",
        "tipo": "text",
        "placeholder": "Ex.: internet, banco, loja",
        "obrigatorio": false
      },
      {
        "id": "contatos",
        "rotulo": "Quantos contatos ou protocolos",
        "tipo": "select",
        "opcoes": [
          "1 a 3",
          "4 a 10",
          "Mais de 10"
        ],
        "obrigatorio": true
      },
      {
        "id": "tempo",
        "rotulo": "Há quanto tempo tenta resolver",
        "tipo": "select",
        "opcoes": [
          "Menos de 1 mês",
          "1 a 6 meses",
          "Mais de 6 meses"
        ],
        "obrigatorio": true
      }
    ]
  },
  "outro": {
    "titulo": "Informações do caso",
    "campos": [
      {
        "id": "empresa",
        "rotulo": "Empresa envolvida",
        "tipo": "text",
        "placeholder": "Nome da empresa",
        "obrigatorio": false
      }
    ]
  },
  "golpe-pix": {
    "titulo": "Informações da fraude",
    "campos": [
      {
        "id": "banco",
        "rotulo": "Banco ou instituição",
        "tipo": "text",
        "placeholder": "Ex.: Nubank, Itaú, Bradesco",
        "obrigatorio": true
      },
      {
        "id": "tipo",
        "rotulo": "Como aconteceu",
        "tipo": "select",
        "opcoes": [
          "Falsa central telefônica",
          "Invasão de conta ou aplicativo",
          "Pix para conta desconhecida",
          "Boleto ou link falso",
          "Outro"
        ],
        "obrigatorio": true
      },
      {
        "id": "valor",
        "rotulo": "Valor perdido (R$)",
        "tipo": "money",
        "placeholder": "Ex.: 7.500,00",
        "obrigatorio": true
      },
      {
        "id": "data",
        "rotulo": "Data da transação",
        "tipo": "date",
        "placeholder": "",
        "obrigatorio": true
      },
      {
        "id": "comunicou",
        "rotulo": "Comunicou o banco?",
        "tipo": "select",
        "opcoes": [
          "Sim, em até 24 horas",
          "Sim, depois de 24 horas",
          "Ainda não"
        ],
        "obrigatorio": true
      },
      {
        "id": "bo",
        "rotulo": "Registrou boletim de ocorrência?",
        "tipo": "select",
        "opcoes": [
          "Sim",
          "Não"
        ],
        "obrigatorio": false
      }
    ]
  }
};
