/**
 * Glossário Jurídico dos Juizados Especiais Cíveis (JEC)
 * Baseado no Vocabulário Oficial do TJSP e nas normas da Lei Federal nº 9.099/1995 e CDC.
 * Fonte oficial: https://www.tjsp.jus.br/JuizadosEspeciais/JuizadosEspeciais/VocabularioJuridico
 */

export interface TermoGlossario {
  termo: string;
  definicao: string;
  letra: string;
}

export const GLOSSARIO_JEC: TermoGlossario[] = [
  {
    "termo": "Ação",
    "definicao": "Processo movido em juízo para defesa de um direito ameaçado ou violado.",
    "letra": "A"
  },
  {
    "termo": "Acordo",
    "definicao": "Ajuste instituído entre duas ou mais pessoas, que se acertam em estabelecê-lo. Composição amigável.",
    "letra": "A"
  },
  {
    "termo": "Ajuizar",
    "definicao": "Ingressar com uma ação na Justiça para buscar a solução de um conflito de interesses.",
    "letra": "A"
  },
  {
    "termo": "Astreintes (multa diária)",
    "definicao": "Multa periódica fixada pelo magistrado para forçar a empresa a cumprir com urgência uma determinação judicial (obrigação de fazer ou não fazer), como excluir uma negativação indevida no Serasa ou restabelecer sinal de telefone.",
    "letra": "A"
  },
  {
    "termo": "Atermação",
    "definicao": "Ato pelo qual o setor de atendimento do Juizado Especial Cível reduz a termo (escreve no sistema ou formulário) o relato verbal e as pretensões do cidadão que comparece desacompanhado de advogado, gerando a petição inicial formal (art. 14 da Lei 9.099/1995).",
    "letra": "A"
  },
  {
    "termo": "Audiência de conciliação",
    "definicao": "Audiência em que a lei permite o acordo.",
    "letra": "A"
  },
  {
    "termo": "Audiência de instrução e julgamento",
    "definicao": "Momento em que o juiz recebe em sua sala as partes e seus advogados para tentar a conciliação, ouvir as testemunhas, examinar documentos e, em alguns casos, dar a decisão final.",
    "letra": "A"
  },
  {
    "termo": "Causa",
    "definicao": "O mesmo que Ação.",
    "letra": "C"
  },
  {
    "termo": "Cejusc",
    "definicao": "Centro Judiciário de Solução de Conflitos e Cidadania mantido pelo Tribunal de Justiça de São Paulo para a realização de sessões de conciliação e mediação pré-processuais, buscando compor litígios antes da propositura da ação judicial.",
    "letra": "C"
  },
  {
    "termo": "Conciliação",
    "definicao": "Acordo amigável.",
    "letra": "C"
  },
  {
    "termo": "Conciliador",
    "definicao": "Profissional, preferencialmente bacharel em Direito que, junto ao Juizado Especial Cível, busca promover a conciliação entre as partes.",
    "letra": "C"
  },
  {
    "termo": "Consenso",
    "definicao": "Acordo, concordância, aprovação.",
    "letra": "C"
  },
  {
    "termo": "Contestação",
    "definicao": "Primeira defesa do réu, feita de modo direto às pretensões do autor, indicando-se a negação ou a refutação ao pedido formulado contra si.",
    "letra": "C"
  },
  {
    "termo": "Contraditório",
    "definicao": "Princípio constitucional que assegura a toda pessoa, uma vez demandada em juízo, o direito de ampla defesa da acusação ou para proteção do seu direito.",
    "letra": "C"
  },
  {
    "termo": "Contrato",
    "definicao": "Ajuste, convenção, pacto, transação.",
    "letra": "C"
  },
  {
    "termo": "Contravenção penal",
    "definicao": "Infração à qual a lei estabelece pena de prisão simples ou multa, ou ambas.",
    "letra": "C"
  },
  {
    "termo": "Crime",
    "definicao": "Fato proibido por lei, sob ameaça de uma pena, instituída em benefício da coletividade e segurança social do Estado.",
    "letra": "C"
  },
  {
    "termo": "Custas processuais",
    "definicao": "Despesas, encargos, gastos, acarretados por um processo.",
    "letra": "C"
  },
  {
    "termo": "Dano",
    "definicao": "Mal que se faz a alguém; prejuízo ou deterioração de coisa alheia; perda.",
    "letra": "D"
  },
  {
    "termo": "Dano moral",
    "definicao": "Ofensa ou violação que não vem ferir os bens patrimoniais, propriamente ditos, de uma pessoa, mas os seus bens de ordem moral, tais sejam os que se referem à sua liberdade, à sua honra, à sua pessoa ou à sua família.",
    "letra": "D"
  },
  {
    "termo": "Decisão",
    "definicao": "É o ato pelo qual o juiz soluciona os desentendimentos que lhe chegam por via judicial.",
    "letra": "D"
  },
  {
    "termo": "Defensor Público",
    "definicao": "Advogado que exerce a Defensoria Pública, nomeado pelo Estado para orientar e defender judicialmente pessoas comprovadamente sem condições de contratar advogado.",
    "letra": "D"
  },
  {
    "termo": "Deferir",
    "definicao": "Conceder ou atender o que é solicitado em uma petição ou requerimento.",
    "letra": "D"
  },
  {
    "termo": "Demanda",
    "definicao": "Ação em curso.",
    "letra": "D"
  },
  {
    "termo": "Desvio produtivo do consumidor",
    "definicao": "Construção doutrinária e jurisprudencial acolhida pelo STJ em que a perda de tempo vital e desgastes excessivos suportados pelo consumidor para solucionar falhas crônicas de fornecedores ensejam indenização civil autônoma.",
    "letra": "D"
  },
  {
    "termo": "Empresa de pequeno porte",
    "definicao": "É a sociedade empresária, a sociedade simples, a empresa individual de responsabilidade limitada e o empresário a que se refere o art. 966 da Lei n. 10.406, de 10 de janeiro de 2002 (Código Civil), devidamente registrados no Registro de Empresas Mercantis ou no Registro Civil de Pessoas Jurídicas, conforme o caso, desde que aufira, em cada ano-calendário, receita bruta superior a R$ 360.000,00 (trezentos e sessenta mil reais) e igual ou inferior a R$ 3.600.000,00 (três milhões e seiscentos mil reais).",
    "letra": "E"
  },
  {
    "termo": "Execução",
    "definicao": "Ato por que se cumpre a decisão de uma sentença, compelindo ou constrangendo o condenado ao pagamento do objeto do decisório.",
    "letra": "E"
  },
  {
    "termo": "Extinção do processo",
    "definicao": "Fim da ação, interrupção da tramitação judicial do processo, conforme decisão do juiz.",
    "letra": "E"
  },
  {
    "termo": "Firma individual",
    "definicao": "Firma adotada individualmente pela pessoa para uso em seu comércio.",
    "letra": "F"
  },
  {
    "termo": "Fortuito interno e externo",
    "definicao": "Distinção na responsabilidade civil: fortuito interno envolve riscos inerentes à própria atividade econômica (como fraudes bancárias no Pix, Súmula 479 do STJ) e não isenta a empresa; fortuito externo é evento totalmente estranho à atividade.",
    "letra": "F"
  },
  {
    "termo": "Incapaz",
    "definicao": "Pessoa que, por sua condição física e mental, não tem capacidade de exercer por si mesma certos direitos e obrigações.",
    "letra": "I"
  },
  {
    "termo": "Indenização",
    "definicao": "Toda compensação ou retribuição monetária feita por uma pessoa a outrem, para reembolsar de despesas feitas ou para a ressarcir de perdas tidas.",
    "letra": "I"
  },
  {
    "termo": "Insolvente civil",
    "definicao": "Pessoa física que tem dívidas superiores ao total de seus bens.",
    "letra": "I"
  },
  {
    "termo": "Instrução",
    "definicao": "Atos necessários ao esclarecimento de um processo, antes do julgamento. Abrange depoimentos das partes e de testemunhas, apresentação de documentos e de provas e anexação de pareceres e laudos técnicos.",
    "letra": "I"
  },
  {
    "termo": "Interrogatório",
    "definicao": "Soma de perguntas ou indagações, promovida pelo juiz ao acusado, no curso de um processo.",
    "letra": "I"
  },
  {
    "termo": "Intimação",
    "definicao": "Notificação às partes, seus advogados ou pessoas ligadas ao processo, expedida pelo Juiz, sobre algum procedimento referente à ação judicial.",
    "letra": "I"
  },
  {
    "termo": "Inversão do ônus da prova",
    "definicao": "Mecanismo de proteção do consumidor previsto no art. 6º, inciso VIII do CDC, em que o juiz atribui à empresa ré a obrigação técnica de provar que não houve vício, defeito na prestação de serviço ou cobrança indevida.",
    "letra": "I"
  },
  {
    "termo": "Juiz de Direito",
    "definicao": "Magistrado de carreira, também chamado de juiz togado, que ingressa no cargo mediante concurso público.",
    "letra": "J"
  },
  {
    "termo": "Julgamento",
    "definicao": "Ato pelo qual o juiz ou o tribunal decide sobre a causa.",
    "letra": "J"
  },
  {
    "termo": "Jus postulandi",
    "definicao": "Capacidade conferida pela lei ao próprio cidadão para ingressar em juízo e exercer sua defesa perante o Juizado Especial Cível, sem a intermediação de advogado, nas causas com valor de até 20 salários mínimos (art. 9º da Lei 9.099/1995).",
    "letra": "J"
  },
  {
    "termo": "Lide",
    "definicao": "Demanda ou a questão forense ou judiciária em que as partes contendoras procuram mostrar e provar a verdade ou razão de seu direito.",
    "letra": "L"
  },
  {
    "termo": "Litígio",
    "definicao": "Demanda proposta em justiça, quando é contestada.",
    "letra": "L"
  },
  {
    "termo": "Massa falida",
    "definicao": "Acervo de bens e obrigações da empresa falida.",
    "letra": "M"
  },
  {
    "termo": "Microempresa",
    "definicao": "É a sociedade empresária, a sociedade simples, a empresa individual de responsabilidade limitada e o empresário a que se refere o art. 966 da Lei n. 10.446, de 10 de janeiro de 2002 (Código Civil), devidamente registrados no Registro de Empresas Mercantis ou no Registro Civil de Pessoas Juridicas, conforme o caso, desde que aufira, em cada ano-calendário, receita bruta igual ou inferior a R$ 360.000,00 (trezentos e sessenta mil reais).",
    "letra": "M"
  },
  {
    "termo": "Paridade de armas",
    "definicao": "Princípio processual e constitucional (art. 7º do CPC) que assegura a igualdade substancial de tratamento e oportunidades entre as partes no processo, prevenindo que o consumidor sofra desvantagem técnica contra grandes bancas jurídicas empresariais.",
    "letra": "P"
  },
  {
    "termo": "Parte",
    "definicao": "Pessoa que ajuíza uma ação ou contra quem a ação é ajuizada.",
    "letra": "P"
  },
  {
    "termo": "Pena",
    "definicao": "Qualquer espécie de imposição, de castigo ou de aflição, a que se submete a pessoa por qualquer espécie de falta cometida.",
    "letra": "P"
  },
  {
    "termo": "Pessoa capaz",
    "definicao": "Aquela que, segundo as regras legalmente instituídas, pode exercitar seus direitos, assumindo, validamente, obrigações.",
    "letra": "P"
  },
  {
    "termo": "Pessoa física",
    "definicao": "Ser humano, pessoa propriamente dita.",
    "letra": "P"
  },
  {
    "termo": "Pessoa jurídica",
    "definicao": "Entidade à qual a lei reconhece personalidade jurídica. Pode ser pública (União, Estado e Município) ou privada (empresas e fundações).",
    "letra": "P"
  },
  {
    "termo": "Preclusão probatória",
    "definicao": "Perda do direito de praticar um ato ou apresentar provas no processo em razão do término do prazo legal. No rito sumaríssimo do JEC, as provas documentais devem obrigatoriamente acompanhar a petição inicial, sob risco de indeferimento (art. 33 da Lei 9.099/1995).",
    "letra": "P"
  },
  {
    "termo": "Preparo",
    "definicao": "Pagamento das despesas judiciais para o encaminhamento do recurso para julgamento por três Juízes de Direito.",
    "letra": "P"
  },
  {
    "termo": "Preposto",
    "definicao": "Representante indicado e credenciado pela empresa ré para comparecer à audiência do Juizado Especial Cível, dotado de poderes formais para negociar acordos e responder pelos fatos da causa.",
    "letra": "P"
  },
  {
    "termo": "Prescrição",
    "definicao": "O modo pelo qual o direito de punir se extingue, em vista do não exercício dele por certo lapso de tempo.",
    "letra": "P"
  },
  {
    "termo": "Proferir",
    "definicao": "Quando o juiz torna conhecida sua decisão.",
    "letra": "P"
  },
  {
    "termo": "Promotor de Justiça",
    "definicao": "Membro da instituição Ministério Público à qual compete a iniciativa para promoção dos processos criminais, em que se faz valer a ação da justiça acerca dos crimes e contravenções que se tenham cometido.",
    "letra": "P"
  },
  {
    "termo": "Proporação",
    "definicao": "O mesmo que ajuizar.",
    "letra": "P"
  },
  {
    "termo": "Prova",
    "definicao": "Demonstração de algo, utilizada para convencer o juiz sobre o que se quer comprovar.",
    "letra": "P"
  },
  {
    "termo": "Reclamação",
    "definicao": "Ajuizamento da Ação no Juizado Especial Cível ou registro da ocorrência no Juizado Especial Criminal.",
    "letra": "R"
  },
  {
    "termo": "Recurso",
    "definicao": "Contestação da decisão. Meio que pode utilizar a parte vencida, ou quem se julgar prejudicado pela decisão, para anulá-la ou reformá-la, total ou parcialmente.",
    "letra": "R"
  },
  {
    "termo": "Recurso Inominado",
    "definicao": "Espécie de recurso prevista na Lei 9.099/1995 (art. 41), cabível contra a sentença do Juizado Especial Cível no prazo de 10 dias. Para sua interposição e resposta, a representação por advogado é obrigatória por lei.",
    "letra": "R"
  },
  {
    "termo": "Reincidência",
    "definicao": "Prática de novo crime.",
    "letra": "R"
  },
  {
    "termo": "Renúncia ao excedente",
    "definicao": "Ato formal pelo qual o autor declara abrir mão da quantia de seu pedido que ultrapassar o teto legal de 40 salários mínimos, visando manter a tramitação rápida e gratuita de sua ação no Juizado Especial Cível (art. 3º, § 3º da Lei 9.099/1995).",
    "letra": "R"
  },
  {
    "termo": "Repetição do indébito em dobro",
    "definicao": "Direito assegurado ao consumidor pelo art. 42, parágrafo único do CDC, de reaver o valor cobrado e pago indevidamente acrescido de 100% (em dobro), além de juros legais e correção monetária, salvo engano justificável.",
    "letra": "R"
  },
  {
    "termo": "Réu",
    "definicao": "Pessoa contra quem é ajuizada a ação.",
    "letra": "R"
  },
  {
    "termo": "Revelia",
    "definicao": "Falta de defesa inicial do réu, regularmente citado.",
    "letra": "R"
  },
  {
    "termo": "Sentença",
    "definicao": "Decisão final do Juiz, colocando fim à controvérsia.",
    "letra": "S"
  },
  {
    "termo": "Suspensão do processo",
    "definicao": "Paralisação do processo, até que aconteça outro fato que determine o prosseguimento da ação.",
    "letra": "S"
  },
  {
    "termo": "Transação penal",
    "definicao": "Finalização do processo mediante concessões mútuas entre as partes.",
    "letra": "T"
  },
  {
    "termo": "Turma Recursal (Colégio Recursal)",
    "definicao": "Órgão jurisdicional colegiado, composto por três juízes de primeiro grau togados, encarregado de julgar os recursos inominados interpostos contra decisões e sentenças dos Juizados Especiais Cíveis (art. 41 da Lei 9.099/1995).",
    "letra": "T"
  },
  {
    "termo": "Tutela provisória de urgência (liminar)",
    "definicao": "Ordem judicial deferida em caráter imediato pelo juiz logo no início do processo, antes da audiência ou da sentença, para salvaguardar direitos em risco de perecimento iminente (art. 300 do CPC).",
    "letra": "T"
  }
];
