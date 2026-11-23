/**
 * Perguntas e Respostas Frequentes sobre os Juizados Especiais Cíveis (JEC)
 * Baseado no repositório oficial do Tribunal de Justiça de São Paulo (TJSP) e Lei Federal nº 9.099/1995.
 * Fonte oficial: https://www.tjsp.jus.br/JuizadosEspeciais/JuizadosEspeciais/PerguntasFrequentes
 */

export interface ItemFaq {
  pergunta: string;
  resposta: string;
}

export interface CategoriaFaq {
  id: string;
  titulo: string;
  descricao: string;
  itens: ItemFaq[];
}

export const FAQ_JEC: CategoriaFaq[] = [
  {
    "id": "onde-ajuizar",
    "titulo": "Onde entrar com a ação e Competência do JEC",
    "descricao": "Limites de valor, regras de foro competente (sua cidade vs. cidade da empresa) e causas admitidas.",
    "itens": [
      {
        "pergunta": "Onde entrar com a ação no Juizado Especial Cível (qual o fórum competente)?",
        "resposta": "A regra do Juizado Especial Cível (art. 4º da Lei 9.099/95 e art. 101, I do CDC) é simples e favorece o cidadão:\n\n• **Na sua cidade (domicílio do autor):** Em problemas com compras ou serviços (relação de consumo com bancos, telefonia, companhias aéreas, lojas online, planos de saúde) ou ações de reparação de danos de qualquer natureza;\n• **Na cidade da empresa:** No fórum onde a empresa ré mantém sede, filial, agência, sucursal ou escritório;\n• **No fórum da cidade onde mora quem você irá processar:** Para causas cíveis em geral e contratos entre pessoas físicas (domicílio do réu)."
      },
      {
        "pergunta": "Nas ações fundadas em relação de consumo a ação poderá ser proposta no domicílio do consumidor?",
        "resposta": "Sim. O artigo 101, inciso I, do Código de Defesa do Consumidor (CDC) e o artigo 4º, inciso III, da Lei nº 9.099/1995 autorizam expressamente que o consumidor ajuíze a ação no fórum da comarca onde reside, facilitando plenamente o seu acesso à Justiça."
      },
      {
        "pergunta": "Qual a finalidade dos Juizados Especiais Cíveis (JEC)?",
        "resposta": "Resolver causas cíveis de menor complexidade com maior rapidez, simplicidade, gratuidade no primeiro grau e oralidade, buscando, sempre que possível, a composição amigável (acordo) entre as partes."
      },
      {
        "pergunta": "Quais são as causas cíveis de menor complexidade julgadas pelo JEC?",
        "resposta": "São consideradas causas cíveis de menor complexidade aquelas cujo valor não exceda a 40 salários mínimos; as ações de despejo para uso próprio e as ações possessórias sobre bens imóveis de valor não excedente a 40 salários mínimos (artigo 3º da Lei nº 9.099/95)."
      },
      {
        "pergunta": "É possível o ajuizamento de ação cujo valor da causa ultrapasse o limite de 40 salários mínimos?",
        "resposta": "Sim, é possível desde que o autor renuncie expressamente ao valor excedente aos 40 salários mínimos (art. 3º, § 3º da Lei 9.099/95) para manter o rito célere e gratuito do Juizado. Caso o cidadão não queira abrir mão da quantia excedente, a demanda deverá ser proposta na Vara Cível da Justiça Comum."
      },
      {
        "pergunta": "Quais as ações que normalmente são admitidas nos Juizados Especiais Cíveis?",
        "resposta": "• **Cobranças e condenações em dinheiro:** Quantias devidas a título de restituição ou contratos não cumpridos, cheques, notas promissórias e falhas de consumo;\n• **Obrigação de fazer ou não fazer:** Ordens para excluir negativação no Serasa/SPC, restabelecer fornecimento de energia, água ou telefone, ou autorizar cirurgias/exames por plano de saúde;\n• **Entrega de coisa certa:** Entrega de mercadoria comprada e não recebida;\n• **Despejo para uso próprio:** Do imóvel locado pelo proprietário;\n• **Reparação de danos:** Danos materiais (prejuízos financeiros) e danos morais."
      },
      {
        "pergunta": "Quais ações NÃO são admitidas nos Juizados Especiais Cíveis?",
        "resposta": "Não são admitidas: ações de alimentos (pensão alimentícia); ações de separação e divórcio; ações relacionadas à infância e juventude; pedidos de falência e recuperação judicial; inventários e heranças; ações trabalhistas (Justiça do Trabalho) e previdenciárias do INSS (Justiça Federal); e qualquer causa que exija a realização de perícia técnica complexa de engenharia ou contabilidade."
      }
    ]
  },
  {
    "id": "advogado-custas",
    "titulo": "Advogado, Custas e Gratuidade no JEC",
    "descricao": "Regras de obrigatoriedade de advogado, isenção de taxas no 1º grau e riscos processuais.",
    "itens": [
      {
        "pergunta": "É necessário contratar advogado para ingressar com uma ação nos Juizados Especiais Cíveis?",
        "resposta": "Nas causas de **até 20 salários mínimos não é obrigatória** a assistência de advogado (o cidadão pode ajuizar sozinho pelo jus postulandi). Nas causas de **valor superior a 20 até 40 salários mínimos, a assistência de advogado é obrigatória** por lei (artigo 9º da Lei nº 9.099/95)."
      },
      {
        "pergunta": "É possível contratar advogado mesmo que a causa seja inferior a 20 salários mínimos?",
        "resposta": "Sim, é perfeitamente possível e recomendado para garantir a paridade de armas técnica. Em litígios contra bancos, operadoras e grandes empresas, as rés comparecem representadas por bancas experientes. A assistência de um Advogado evita a perda de prazos e a preclusão probatória na petição inicial."
      },
      {
        "pergunta": "É necessário o pagamento de custas ou despesas para se ingressar com uma ação no JEC?",
        "resposta": "Não. O acesso ao primeiro grau de jurisdição no Juizado Especial Cível é 100% gratuito (artigo 54 da Lei nº 9.099/95). Não há pagamento de taxas judiciárias, custas de distribuição ou diligências de citação."
      },
      {
        "pergunta": "Há cobrança de honorários advocatícios da parte derrotada em primeiro grau?",
        "resposta": "Não. Em primeiro grau de jurisdição, a sentença não condenará o vencido em custas processuais nem em honorários de sucumbência (artigo 55 da Lei nº 9.099/95), salvo em caso de litigância de má-fé comprovada. A condenação em sucumbência só ocorre perante a Turma Recursal, caso a parte recorra e perca."
      }
    ]
  },
  {
    "id": "partes",
    "titulo": "Quem Pode e Quem Não Pode Ser Parte",
    "descricao": "Legitimidade ativa e passiva: pessoas físicas, MEI, Microempresa e impedimentos legais.",
    "itens": [
      {
        "pergunta": "Quem pode ingressar com uma ação como autor nos Juizados Especiais Cíveis?",
        "resposta": "Podem ser autores no JEC: pessoas físicas capazes (maiores de 18 anos); pessoas enquadradas como Microempreendedores Individuais (MEI), Microempresas (ME) e Empresas de Pequeno Porte (EPP) segundo a LC nº 123/06; Organizações da Sociedade Civil de Interesse Público (OSCIP); e sociedades de crédito ao microempreendedor."
      },
      {
        "pergunta": "Quem NÃO pode ser parte nos Juizados Especiais Cíveis?",
        "resposta": "Não podem ser partes no JEC: o incapaz (menores de idade ou pessoas civilmente interditadas sem representante nos moldes comuns); o preso; a massa falida; o insolvente civil; as pessoas jurídicas de direito público (União, Estados, Municípios e suas autarquias, que respondem na Vara da Fazenda Pública ou JEFAZ); e as empresas públicas da União."
      }
    ]
  },
  {
    "id": "audiencias-andamento",
    "titulo": "Andamento, Audiências e Acordos",
    "descricao": "O que ocorre após a distribuição, papel do conciliador, ausências e instrução e julgamento.",
    "itens": [
      {
        "pergunta": "O que acontece depois do ajuizamento da ação no Juizado Especial Cível?",
        "resposta": "Após o ajuizamento (seja por atermação no balcão ou peticionamento online), é autuado o processo, cadastrado o número CNJ e designada a audiência de conciliação, intimando-se o autor e citando-se a empresa ré."
      },
      {
        "pergunta": "O que acontece na audiência de conciliação e qual a função do conciliador?",
        "resposta": "O conciliador (auxiliar da Justiça treinado) busca aproximar as partes e facilitar um acordo mutuamente vantajoso. As partes conversam sobre o conflito e, se houver consenso sobre valores ou cumprimento da obrigação, o acordo é formalizado."
      },
      {
        "pergunta": "O que acontece se houver acordo na audiência de conciliação?",
        "resposta": "O acordo é reduzido a termo e homologado imediatamente pelo juiz togado por meio de sentença. Tem força de título executivo judicial, encerrando a discussão da causa."
      },
      {
        "pergunta": "E se não houver acordo na audiência de conciliação?",
        "resposta": "Não havendo acordo, a empresa ré apresenta sua defesa (contestação) e o processo é encaminhado para audiência de instrução e julgamento, ou, se a matéria for unicamente de direito e as provas documentais já estiverem completas nos autos, o juiz profere julgamento antecipado da lide."
      },
      {
        "pergunta": "O que acontece se o autor (consumidor) deixar de comparecer a uma audiência?",
        "resposta": "Se o autor faltar a qualquer das audiências (conciliação ou instrução) sem justificativa legal comprovada previamente, o processo será extinto sem julgamento do mérito (artigo 51, I da Lei 9.099/95), e o autor poderá ser condenado ao pagamento das custas do processo."
      },
      {
        "pergunta": "E se o réu (empresa processada) não comparecer à audiência?",
        "resposta": "Se a empresa ré for regularmente intimada e não comparecer à audiência, é decretada a revelia (artigo 20 da Lei 9.099/95), reputando-se como verdadeiros os fatos alegados pelo autor na petição inicial, salvo se o contrário resultar da convicção do juiz."
      }
    ]
  },
  {
    "id": "recursos-sentenca",
    "titulo": "Sentença e Recursos (Turma Recursal)",
    "descricao": "Procedimento em caso de inconformismo com a sentença, prazo e obrigação de advogado.",
    "itens": [
      {
        "pergunta": "Qual o procedimento a ser adotado se a parte não concordar com a sentença do juiz?",
        "resposta": "A parte inconformada com a decisão final do juiz pode interpor Recurso Inominado no prazo impreterível de 10 dias úteis, contados da ciência ou intimação da sentença (artigo 41 da Lei nº 9.099/95)."
      },
      {
        "pergunta": "Como apresentar recurso contra a sentença do Juizado Especial Cível?",
        "resposta": "Para interpor Recurso Inominado, a presença de Advogado regularmente inscrito na OAB é estritamente obrigatória por lei (art. 41, § 2º da Lei 9.099/95), mesmo em causas com valor inferior a 20 salários mínimos. Além disso, deve ser recolhido o preparo recursal em 48 horas úteis, salvo se houver concessão dos benefícios da Justiça Gratuita."
      }
    ]
  },
  {
    "id": "jefaz-jecrim",
    "titulo": "Juizados da Fazenda Pública e Criminais",
    "descricao": "Demandas contra o Estado/Prefeituras (JEFAZ) e infrações penais de menor potencial (JECRIM).",
    "itens": [
      {
        "pergunta": "O que são e quem responde nos Juizados Especiais da Fazenda Pública (JEFAZ)?",
        "resposta": "São juizados especializados regulados pela Lei nº 12.153/2009 para conciliar e julgar causas cíveis de interesse do Estado de São Paulo, dos Municípios paulistas e de suas respectivas autarquias, fundações e empresas públicas, com valor de até 60 salários mínimos (como cobranças de IPVA indevido, multas municipais irregulares e fornecimento de medicamentos pelo SUS)."
      },
      {
        "pergunta": "Quais os tipos de infrações julgadas pelos Juizados Especiais Criminais (JECRIM)?",
        "resposta": "O JECRIM julga as infrações penais de menor potencial ofensivo, assim consideradas as contravenções penais e os crimes cuja pena máxima privativa de liberdade cominada pela lei não seja superior a 2 (dois) anos, com aplicação de institutos despenalizadores como a composição civil de danos e a transação penal."
      }
    ]
  }
];
