/**
 * normas.ts
 * Banco Central de Normas, Precedentes Superiores e Enunciados (FONAJE / FOJESP / TJSP)
 * Ecossistema DefendaMe & SfyJEC.
 * 
 * Fornece o inteiro teor literal e notas explicativas para os popovers dinâmicos
 * acionados pelo componente <Legis />.
 */

export interface NormaItem {
  id: string;
  badge: string;
  titulo: string;
  diploma: string;
  rotuloTexto?: string;
  textoLiteral: string;
  explicacao?: string;
  linkOficial?: string;
}

export const BANCO_NORMAS: Record<string, NormaItem> = {
  // ── CONSTITUIÇÃO FEDERAL ──
  'art-5-cf': {
    id: 'art-5-cf',
    badge: 'CONSTITUIÇÃO FEDERAL',
    titulo: 'Artigo 5º, incisos V e X',
    diploma: 'Constituição da República Federativa do Brasil de 1988',
    textoLiteral: 'Art. 5º Todos são iguais perante a lei, sem distinção de qualquer natureza...\n\nV - é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem;\n\nX - são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação;',
    explicacao: 'Garante o princípio fundamental da ampla reparação do dano moral e material, base de toda indenização no ordenamento jurídico brasileiro.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'
  },

  // ── CÓDIGO CIVIL ──
  'art-186-cc': {
    id: 'art-186-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 186',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'Aquele que, por ação ou omissão voluntária, negligência ou imprudência, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilícito.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },
  'art-290-cc': {
    id: 'art-290-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 290',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'A cessão do crédito não tem eficácia em relação ao devedor, senão quando a este notificada; mas por notificado se tem o devedor que, em escrito público ou particular, se declarou ciente da cessão feita.',
    explicacao: 'Exige que fundos de securitização ou empresas de cobrança comprovem a notificação prévia da dívida antes de inscrever o devedor nos cadastros restritivos.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },
  'art-734-cc': {
    id: 'art-734-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 734',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'O transportador responde pelos danos causados às pessoas transportadas e suas bagagens, salvo motivo de força maior, sendo nula qualquer cláusula excludente da responsabilidade.',
    explicacao: 'Estabelece a responsabilidade objetiva do transportador e a cláusula implícita de incolumidade durante a viagem.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },
  'art-737-cc': {
    id: 'art-737-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 737',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'O transportador está sujeito aos horários e itinerários previstos, sob pena de responder por perdas e danos, salvo motivo de força maior.',
    explicacao: 'Fixa a obrigação legal de pontualidade no contrato de transporte: atrasos e cancelamentos imprevistos constituem inadimplemento contratual gerador de reparação civil.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },
  'art-927-cc': {
    id: 'art-927-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 927',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'Aquele que, por ato ilícito (arts. 186 e 187), causar dano a outrem, fica obrigado a repará-lo.\n\nParágrafo único. Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },
  'art-944-cc': {
    id: 'art-944-cc',
    badge: 'LEI SECA · CÓDIGO CIVIL',
    titulo: 'Artigo 944',
    diploma: 'Lei Federal nº 10.406/2002 (Código Civil)',
    textoLiteral: 'A indenização mede-se pela extensão do dano.\n\nParágrafo único. Se houver excessiva desproporção entre a gravidade da culpa e o dano, poderá o juiz fixar, equitativamente, a indenização.',
    explicacao: 'Princípio da Reparação Integral: norteia o arbitramento judicial de danos morais com base no sofrimento real, duração do descaso e prejuízos causados ao consumidor.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  },

  // ── CÓDIGO DE DEFESA DO CONSUMIDOR ──
  'art-6-cdc': {
    id: 'art-6-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 6º, incisos VI e VIII',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'São direitos básicos do consumidor:\n\nVI - a efetiva prevenção e reparação de danos patrimoniais e morais, individuais, coletivos e difusos;\n\nVIII - a facilitação da defesa de seus direitos, inclusive com a inversão do ônus da prova, a seu favor, no processo civil, quando, a critério do juiz, for verossímil a alegação ou quando for ele hipossuficiente, segundo as regras ordinárias de experiências;',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'art-14-cdc': {
    id: 'art-14-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 14',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'O fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços, bem como por informações insuficientes ou inadequadas sobre sua fruição e riscos.\n\n§ 1° O serviço é defeituoso quando não fornece a segurança que o consumidor dele pode esperar...',
    explicacao: 'Consagra a Responsabilidade Objetiva do fornecedor de serviços: o consumidor não precisa provar dolo ou negligência da empresa, apenas a falha do serviço e o dano resultante.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'art-20-cdc': {
    id: 'art-20-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 20',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'O fornecedor de serviços responde pelos vícios de qualidade que os tornem impróprios ao consumo ou lhes diminuam o valor, assim como por aqueles decorrentes da disparidade com as indicações constantes da oferta ou mensagem publicitária...',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'art-27-cdc': {
    id: 'art-27-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 27',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'Prescreve em cinco anos a pretensão à reparação pelos danos causados por fato do produto ou do serviço prevista na Seção II deste Capítulo, iniciando-se a contagem do prazo a partir do conhecimento do dano e de sua autoria.',
    explicacao: 'Prazo prescricional quinquenal (5 anos) para propositura de ações indenizatórias decorrentes de acidentes de consumo e má prestação de serviços (aplicável em voos domésticos e fraudes bancárias).',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'art-42-cdc': {
    id: 'art-42-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 42',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'Na cobrança de débitos, o consumidor inadimplente não será exposto a ridículo, nem será submetido a qualquer tipo de constrangimento ou ameaça.\n\nParágrafo único. O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros legais, salvo hipótese de engano justificável.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'art-43-cdc': {
    id: 'art-43-cdc',
    badge: 'LEI SECA · CDC',
    titulo: 'Artigo 43',
    diploma: 'Lei Federal nº 8.078/1990 (Código de Defesa do Consumidor)',
    textoLiteral: 'O consumidor terá acesso às informações existentes em cadastros, fichas, registros e dados pessoais e de consumo arquivados sobre ele, bem como sobre as suas respectivas fontes...\n\n§ 2° A abertura de cadastro, ficha, registro e dados pessoais e de consumo deverá ser comunicada por escrito ao consumidor, quando não solicitada por ele.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'cdc-geral': {
    id: 'cdc-geral',
    badge: 'LEGISLAÇÃO ESTRUTURANTE · CDC',
    titulo: 'Código de Defesa do Consumidor',
    diploma: 'Lei Federal nº 8.078/1990',
    textoLiteral: 'Art. 1º O presente código estabelece normas de proteção e defesa do consumidor, de ordem pública e interesse social, nos termos dos arts. 5º, inciso XXXII, 170, inciso V, da Constituição Federal e art. 48 de suas Disposições Transitórias.',
    explicacao: 'Estatuto de ordem pública e interesse social: garante a responsabilidade civil objetiva dos fornecedores e a reparação integral dos danos causados ao passageiro e ao consumidor.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm'
  },
  'decreto-5910-montreal': {
    id: 'decreto-5910-montreal',
    badge: 'TRATADO INTERNACIONAL · DECRETO',
    titulo: 'Decreto Federal nº 5.910/2006',
    diploma: 'Convenção de Montreal (Transporte Aéreo Internacional)',
    textoLiteral: 'Promulga a Convenção para a Unificação de Certas Regras Relativas ao Transporte Aéreo Internacional, celebrada em Montreal, em 28 de maio de 1999.',
    explicacao: 'Tratado internacional que rege o transporte aéreo exterior. O STF pacificou que suas limitações tarifárias aplicam-se unicamente ao extravio de bagagem e danos materiais, nunca ao dano moral.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/decreto/d5910.htm'
  },

  // ── LEI DOS JUIZADOS ESPECIAIS (LEI 9.099/1995) ──
  'lei-9099': {
    id: 'lei-9099',
    badge: 'LEGISLAÇÃO ESTRUTURANTE',
    titulo: 'Lei nº 9.099/1995',
    diploma: 'Lei dos Juizados Especiais Cíveis e Criminais',
    textoLiteral: 'Art. 2º O processo orientar-se-á pelos critérios da oralidade, simplicidade, informalidade, economia processual e celeridade, buscando, sempre que possível, a conciliação ou a transação.',
    explicacao: 'Diploma fundamental que instituiu os Juizados Especiais Cíveis (JEC): garante gratuidade da justiça no 1º grau (sem custas nem sucumbência) e solução ágil de litígios de até 40 salários mínimos.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm'
  },
  'art-3-lei-9099': {
    id: 'art-3-lei-9099',
    badge: 'LEI SECA · JEC',
    titulo: 'Artigo 3º, inciso I',
    diploma: 'Lei Federal nº 9.099/1995',
    textoLiteral: 'Art. 3º O Juizado Especial Cível tem competência para conciliação, processo e julgamento das causas cíveis de menor complexidade, assim consideradas:\n\nI - as causas cujo valor não exceda a quarenta vezes o salário mínimo;',
    explicacao: 'Define o teto de alçada do Juizado Especial Cível (40 salários mínimos nacionais na data de distribuição da ação).',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm'
  },
  'art-9-lei-9099': {
    id: 'art-9-lei-9099',
    badge: 'LEI SECA · JEC',
    titulo: 'Artigo 9º',
    diploma: 'Lei Federal nº 9.099/1995',
    textoLiteral: 'Art. 9º Nas causas de valor até vinte salários mínimos, as partes comparecerão pessoalmente, podendo ser assistidas por advogado; nas de valor superior, a assistência é obrigatória.',
    explicacao: 'Faculta o ajuizamento sem advogado apenas até 20 salários mínimos. Acima de 20 salários mínimos ou para recorrer ao Colégio Recursal, a representação por advogado é obrigatória.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm'
  },
  'art-41-lei-9099': {
    id: 'art-41-lei-9099',
    badge: 'LEI SECA · JEC',
    titulo: 'Artigo 41, § 2º',
    diploma: 'Lei Federal nº 9.099/1995',
    textoLiteral: 'Art. 41. Da sentença, excetuada a homologatória de conciliação ou laudo arbitral, caberá recurso para o próprio juizado.\n\n§ 1º O recurso será interposto no prazo de dez dias, contados da ciência da sentença...\n\n§ 2º No recurso, as partes serão obrigatoriamente representadas por advogado.',
    explicacao: 'Disciplina o Recurso Inominado contra sentença do juiz de 1º grau para julgamento pelo Colégio Recursal, exigindo patrocínio técnico obrigatório de advogado.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm'
  },
  'art-54-lei-9099': {
    id: 'art-54-lei-9099',
    badge: 'LEI SECA · JEC',
    titulo: 'Artigo 54',
    diploma: 'Lei Federal nº 9.099/1995',
    textoLiteral: 'Art. 54. O acesso ao Juizado Especial independerá, em primeiro grau de jurisdição, do pagamento de custas, taxas ou despesas.',
    explicacao: 'Garante o princípio da gratuidade inicial: nenhuma taxa judiciária ou honorário sucumbencial é devido pelo autor na tramitação perante a Vara do JEC em primeiro grau.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l9099.htm'
  },

  // ── CÓDIGO DE PROCESSO CIVIL ──
  'art-300-cpc': {
    id: 'art-300-cpc',
    badge: 'LEI SECA · CPC',
    titulo: 'Artigo 300',
    diploma: 'Lei Federal nº 13.105/2015 (Código de Processo Civil)',
    textoLiteral: 'A tutela de urgência será concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.',
    explicacao: 'Fundamenta pedidos liminares para exclusão imediata do nome em órgãos restritivos (SPC/Serasa) antes da citação da empresa ré.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l13105.htm'
  },
  'art-373-cpc': {
    id: 'art-373-cpc',
    badge: 'LEI SECA · CPC',
    titulo: 'Artigo 373, inciso II',
    diploma: 'Lei Federal nº 13.105/2015 (Código de Processo Civil)',
    textoLiteral: 'O ônus da prova incumbe:\n\nI - ao autor, quanto ao fato constitutivo de seu direito;\n\nII - ao réu, quanto à existência de fato impeditivo, modificativo ou extintivo do direito do autor.',
    linkOficial: 'https://www.planalto.gov.br/ccivil_03/leis/l13105.htm'
  },

  // ── REGULAÇÃO SETORIAL ANAC ──
  'resolucao-400-anac': {
    id: 'resolucao-400-anac',
    badge: 'REGULAÇÃO SETORIAL · ANAC',
    titulo: 'Resolução nº 400/2016',
    diploma: 'Agência Nacional de Aviação Civil (ANAC)',
    textoLiteral: 'Art. 21. O transportador deverá informar imediatamente ao passageiro pelos meios de comunicação disponíveis sobre alteração de horário ou cancelamento...\n\nArt. 27. A assistência material consiste em:\nI - facilidade de comunicação, a partir de 1h de atraso;\nII - alimentação por voucher individual, a partir de 2h de atraso;\nIII - hospedagem em caso de pernoite e traslado, a partir de 4h de atraso.\n\nArt. 28. O transportador deverá oferecer as alternativas de reacomodação gratuita, reembolso integral ou execução por outra modalidade à escolha do passageiro em atrasos superiores a 4h.',
    explicacao: 'Regulamenta os direitos operacionais de assistência material obrigatória e opções imediatas de reacomodação em benefício do passageiro.',
    linkOficial: 'https://www.anac.gov.br'
  },

  // ── PRECEDENTES STJ ──
  'resp-1584465-stj': {
    id: 'resp-1584465-stj',
    badge: 'PARADIGMA STJ · DIREITO PRIVADO',
    titulo: 'REsp 1.584.465/MG',
    diploma: 'Superior Tribunal de Justiça — 3ª Turma (Rel. Min. Nancy Andrighi)',
    rotuloTexto: 'Síntese do julgado:',
    textoLiteral: 'Na hipótese de atraso de voo, o dano moral não se configura in re ipsa (presumido). A frustração decorrente do descumprimento do horário contratado, por si só, caracteriza mero dissabor. A indenização exige a comprovação de lesão extrapatrimonial concreta, avaliada a partir do tempo de espera, da oferta de assistência material, de informações adequadas e de eventual perda de compromissos inadiáveis no destino.',
    explicacao: 'Precedente orientador das Turmas de Direito Privado do STJ que superou a tese de dano moral automático, exigindo prova de desamparo no aeroporto ou prejuízos concretos suportados.',
    linkOficial: 'https://processo.stj.jus.br/processo/pesquisa/?num_registro=201600378050'
  },
  'aresp-1520449-stj': {
    id: 'aresp-1520449-stj',
    badge: 'JURISPRUDÊNCIA CONSOLIDADA · 4ª TURMA STJ',
    titulo: 'AgInt no AREsp 1.520.449/SP',
    diploma: 'Superior Tribunal de Justiça — 4ª Turma (Rel. Min. Raul Araújo, DJe 04/10/2019)',
    rotuloTexto: 'Síntese do julgado:',
    textoLiteral: 'A jurisprudência da Segunda Seção do Superior Tribunal de Justiça firmou-se no sentido de que o atraso ou cancelamento de voo não enseja dano moral presumido (in re ipsa), demandando a comprovação de ofensa concreta aos direitos da personalidade, avaliada a partir das peculiaridades da causa e da recusa de assistência material tempestiva.',
    explicacao: 'Precedente canônico da Quarta Turma do STJ que alinha o entendimento com a Terceira Turma (REsp 1.584.465/MG), consolidando a exigência de prova de prejuízo extraordinário ou desamparo.',
    linkOficial: 'https://processo.stj.jus.br/processo/pesquisa/?num_registro=201901691238'
  },
  'aresp-2150150-stj': {
    id: 'aresp-2150150-stj',
    badge: 'JURISPRUDÊNCIA RECENTE · 4ª TURMA STJ',
    titulo: 'AgInt no AREsp 2.150.150/SP',
    diploma: 'Superior Tribunal de Justiça — 4ª Turma (Rel. Min. Raul Araújo, DJe 21/05/2024)',
    rotuloTexto: 'Síntese do julgado:',
    textoLiteral: 'Na hipótese de atraso de voo, o abalo moral indenizável não decorre automaticamente do mero descumprimento do contrato de transporte (ausência de dano moral in re ipsa), exigindo a comprovação de situação aflitiva extraordinária ou da falta de assistência material tempestiva pela concessionária aérea.',
    explicacao: 'Reafirmação contemporânea de 2024 da Quarta Turma do STJ, mantendo a firme exigência de comprovação do abalo concreto nos Juizados Especiais Cíveis.',
    linkOficial: 'https://processo.stj.jus.br/processo/pesquisa/?num_registro=202201844079'
  },
  'resp-1704002-stj': {
    id: 'resp-1704002-stj',
    badge: 'PRECEDENTE STJ · DISTINGUISHING',
    titulo: 'REsp 1.704.002/SP',
    diploma: 'Superior Tribunal de Justiça — 3ª Turma',
    textoLiteral: 'A existência de inscrição preexistente não impede a caracterização do dano moral quando a anotação anterior estiver sub judice ou for comprovadamente ilegítima.',
    explicacao: 'Consagra a principal hipótese de afastamento da restritiva Súmula 385 do STJ em ações de negativação indevida.',
    linkOficial: 'https://www.stj.jus.br'
  },
  'sumula-385-stj': {
    id: 'sumula-385-stj',
    badge: 'SÚMULA STJ',
    titulo: 'Súmula nº 385',
    diploma: 'Superior Tribunal de Justiça — Segunda Seção',
    textoLiteral: 'Da anotação irregular em cadastro de proteção ao crédito, não cabe indenização por dano moral, quando preexistente legítima inscrição, ressalvado o direito ao cancelamento.',
    explicacao: 'Afasta o dano moral se o cidadão possuía negativações legítimas anteriores não contestadas na Justiça.',
    linkOficial: 'https://www.stj.jus.br'
  },
  'sumula-479-stj': {
    id: 'sumula-479-stj',
    badge: 'SÚMULA STJ',
    titulo: 'Súmula nº 479',
    diploma: 'Superior Tribunal de Justiça — Segunda Seção',
    textoLiteral: 'As instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias.',
    explicacao: 'Fundamento mestre contra fraudes e golpes do Pix: bancos respondem civilmente pelos prejuízos decorrentes de falhas de segurança.',
    linkOficial: 'https://www.stj.jus.br'
  },
  'sumula-548-stj': {
    id: 'sumula-548-stj',
    badge: 'SÚMULA STJ',
    titulo: 'Súmula nº 548',
    diploma: 'Superior Tribunal de Justiça — Segunda Seção',
    textoLiteral: 'Incumbe ao credor a exclusão do registro da dívida em nome do devedor no cadastro de inadimplentes no prazo de cinco dias úteis, a partir do integral e efetivo pagamento do débito.',
    explicacao: 'O descumprimento do prazo de 5 dias úteis gera ato ilícito por manutenção indevida do nome negativado.',
    linkOficial: 'https://www.stj.jus.br'
  },

  // ── PRECEDENTES STF ──
  'tema-210-stf': {
    id: 'tema-210-stf',
    badge: 'REPERCUSSÃO GERAL · STF',
    titulo: 'Tema 210 (RE 636.331)',
    diploma: 'Supremo Tribunal Federal — Plenário (Rel. Min. Gilmar Mendes)',
    rotuloTexto: 'Tese de Repercussão Geral fixada pelo STF:',
    textoLiteral: 'Nos termos do art. 178 da Constituição da República, as normas e os tratados internacionais limitadores da responsabilidade das transportadoras aéreas de passageiros, especialmente as Convenções de Varsóvia e Montreal, têm prevalência em relação ao Código de Defesa do Consumidor exclusivamente quanto à tarifação dos danos materiais e ao prazo prescricional bienal.',
    explicacao: 'O STF fixou que a Convenção de Montreal limita apenas o dano material (bagagem tarifada em DES). Não se aplica aos danos morais.',
    linkOficial: 'https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=210'
  },
  'tema-1240-stf': {
    id: 'tema-1240-stf',
    badge: 'REPERCUSSÃO GERAL · STF',
    titulo: 'Tema 1.240 (ARE 1.373.406/SP)',
    diploma: 'Supremo Tribunal Federal — Plenário (Rel. Min. Rosa Weber)',
    rotuloTexto: 'Tese de Repercussão Geral fixada pelo STF:',
    textoLiteral: 'Não se aplicam as convenções internacionais às ações de reparação de dano moral decorrente de má prestação de serviços no transporte aéreo internacional, aplicando-se integralmente a legislação consumerista e a Constituição Federal.',
    explicacao: 'Pacifica em definitivo que a indenização por dano moral em voos internacionais é regida pelo Código de Defesa do Consumidor, sem qualquer teto tarifado internacional.',
    linkOficial: 'https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=1240'
  },

  // ── SÚMULAS ESTADUAIS TJSP ──
  'sumula-30-tjsp': {
    id: 'sumula-30-tjsp',
    badge: 'SÚMULA TJSP',
    titulo: 'Súmula nº 30',
    diploma: 'Tribunal de Justiça de São Paulo',
    textoLiteral: 'A indevida inscrição do nome do devedor em cadastros de inadimplentes gera o dever de indenizar por dano moral, independentemente da prova do prejuízo.',
    explicacao: 'Súmula emblemática do TJSP que reconhece o dano moral presumido (in re ipsa) na negativação indevida pura.',
    linkOficial: 'https://www.tjsp.jus.br'
  },

  // ── ENUNCIADOS FONAJE (Fórum Nacional de Juizados Especiais) ──
  'enunciado-170-fonaje': {
    id: 'enunciado-170-fonaje',
    badge: 'ENUNCIADO CÍVEL · FONAJE',
    titulo: 'Enunciado nº 170',
    diploma: 'Fórum Nacional de Juizados Especiais (XLI Encontro)',
    textoLiteral: 'No Sistema dos Juizados Especiais, não se aplica o disposto no inc. V do art. 292 do CPC/2015 especificamente quanto ao pedido de dano moral; caso o autor opte por atribuir um valor específico, este deverá ser computado conjuntamente com o valor da pretensão do dano material para efeito de alçada e pagamento de custas.',
    explicacao: 'Regra de ouro nas petições do JEC: quando o consumidor cumula pedido de ressarcimento material com compensação moral, o somatório de ambos define o limite de 40 salários mínimos da alçada.',
    linkOficial: 'https://www.fonaje.jus.br'
  },
  'enunciado-80-fonaje': {
    id: 'enunciado-80-fonaje',
    badge: 'ENUNCIADO CÍVEL · FONAJE',
    titulo: 'Enunciado nº 80',
    diploma: 'Fórum Nacional de Juizados Especiais',
    textoLiteral: 'O recurso inominado será julgado deserto quando não houver o recolhimento integral do preparo e sua respectiva comprovação obrigatoriamente, nas 48 horas seguintes à interposição de recurso, independentemente de intimação.',
    explicacao: 'Prazo estrito de 48 horas improrrogáveis para pagar as custas do Recurso Inominado, sem aviso do cartório.',
    linkOficial: 'https://www.fonaje.jus.br'
  },
  'enunciado-89-fonaje': {
    id: 'enunciado-89-fonaje',
    badge: 'ENUNCIADO CÍVEL · FONAJE',
    titulo: 'Enunciado nº 89',
    diploma: 'Fórum Nacional de Juizados Especiais',
    textoLiteral: 'A incompetência territorial pode ser reconhecida de ofício no sistema de juizados especiais cíveis.',
    explicacao: 'Garante que a ação de transporte aéreo pode ser ajuizada no foro do domicílio do passageiro (art. 101, I do CDC), evitando declinação indevida.',
    linkOficial: 'https://www.fonaje.jus.br'
  },

  // ── ENUNCIADOS FOJESP (Fórum dos Juizados Especiais do Estado de São Paulo) ──
  'enunciado-25-fojesp': {
    id: 'enunciado-25-fojesp',
    badge: 'ENUNCIADO · COLÉGIO RECURSAL TJSP / FOJESP',
    titulo: 'Enunciado nº 25',
    diploma: 'I Encontro de Juizados Especiais e Colégios Recursais de SP (FOJESP)',
    textoLiteral: 'O simples descumprimento do dever legal ou contratual, por caracterizar mero aborrecimento, em princípio, não configura dano moral, salvo se da infração advém circunstância que atinja a dignidade da parte.',
    explicacao: 'Enunciado nuclear citado pelos juízes paulistas: reforça por que o atraso de voo não gera dano moral pelo mero inadimplemento, exigindo prova de ofensa concreta à dignidade do passageiro e falha grave de assistência.',
    linkOficial: 'https://www.tjsp.jus.br'
  },
  'enunciado-39-fojesp': {
    id: 'enunciado-39-fojesp',
    badge: 'ENUNCIADO CÍVEL · FOJESP (SÃO PAULO)',
    titulo: 'Enunciado nº 39',
    diploma: 'Fórum dos Juizados Especiais do Estado de São Paulo',
    textoLiteral: 'Em caso de revelia, a presunção de veracidade dos fatos não implica automática procedência do pedido.',
    explicacao: 'Regra fundamental de prova no TJSP: mesmo se a companhia aérea for revel (faltar à audiência ou não contestar), o juiz não concederá o dano moral se o autor não tiver juntado a prova documental mínima do fato e do dano.',
    linkOficial: 'https://www.tjsp.jus.br'
  },
  'enunciado-47-fojesp': {
    id: 'enunciado-47-fojesp',
    badge: 'ENUNCIADO CÍVEL · FOJESP (SÃO PAULO)',
    titulo: 'Enunciado nº 47',
    diploma: 'Fórum dos Juizados Especiais do Estado de São Paulo',
    textoLiteral: 'O preparo no juizado especial cível sob pena de deserção deve ser efetuado, independentemente de intimação, nas 48 horas seguintes à interposição do recurso.',
    explicacao: 'Reforça no âmbito do TJSP o rigor temporal para interposição e pagamento de preparo no Colégio Recursal.',
    linkOficial: 'https://www.tjsp.jus.br'
  },

  // ── COLÉGIO RECURSAL DO TJSP ──
  'colegio-recursal-fortuito-interno-tjsp': {
    id: 'colegio-recursal-fortuito-interno-tjsp',
    badge: 'COLÉGIO RECURSAL · TJSP',
    titulo: 'Jurisprudência Uniformizada dos Colégios Recursais',
    diploma: 'Tribunal de Justiça de São Paulo — Turmas Recursais Cíveis',
    textoLiteral: 'Problemas mecânicos em aeronaves, manutenções imprevistas e readequações de malha aérea configuram fortuito interno, inerente aos riscos da atividade empresarial de transporte aéreo, não excluindo o dever de indenizar danos morais decorrentes do desamparo ao passageiro.',
    explicacao: 'Tese que veda a alegação de "segurança do voo" ou "quebra inesperada de peça" como excludente de responsabilidade das companhias aéreas perante os Juizados de SP.',
    linkOficial: 'https://www.tjsp.jus.br'
  }
};

/**
 * Função utilitária de busca inteligente no banco de normas.
 */
export function buscarNorma(props: {
  art?: string;
  lei?: string;
  sumula?: string | number;
  tribunal?: string;
  resp?: string;
  tema?: string;
  enunciado?: string | number;
  orgao?: string;
  texto?: string;
}): NormaItem | null {
  const { art, lei, sumula, tribunal, resp, tema, enunciado, orgao, texto } = props;

  // 1. Busca direta por Precedente STJ
  if (resp) {
    if (resp.includes('1.584.465')) return BANCO_NORMAS['resp-1584465-stj'];
    if (resp.includes('1.520.449')) return BANCO_NORMAS['aresp-1520449-stj'];
    if (resp.includes('2.150.150')) return BANCO_NORMAS['aresp-2150150-stj'];
    if (resp.includes('1.704.002')) return BANCO_NORMAS['resp-1704002-stj'];
  }

  // 2. Busca por Tema STF
  if (tema) {
    const t = String(tema).trim();
    if (t === '210' || t.includes('210')) return BANCO_NORMAS['tema-210-stf'];
    if (t === '1240' || t === '1.240' || t.includes('1.240')) return BANCO_NORMAS['tema-1240-stf'];
  }

  // 3. Busca por Súmula
  if (sumula) {
    const s = String(sumula).trim();
    const trib = (tribunal ?? '').toUpperCase();
    if (trib.includes('TJSP') && s === '30') return BANCO_NORMAS['sumula-30-tjsp'];
    if (s === '385') return BANCO_NORMAS['sumula-385-stj'];
    if (s === '479') return BANCO_NORMAS['sumula-479-stj'];
    if (s === '548') return BANCO_NORMAS['sumula-548-stj'];
  }

  // 4. Busca por Enunciado (FONAJE ou FOJESP)
  if (enunciado) {
    const e = String(enunciado).trim();
    const org = (orgao ?? '').toUpperCase();
    if (org.includes('FOJESP') || org.includes('SP') || org.includes('COLÉGIO')) {
      if (e === '25') return BANCO_NORMAS['enunciado-25-fojesp'];
      if (e === '39') return BANCO_NORMAS['enunciado-39-fojesp'];
      if (e === '47') return BANCO_NORMAS['enunciado-47-fojesp'];
    }
    if (e === '170') return BANCO_NORMAS['enunciado-170-fonaje'];
    if (e === '80') return BANCO_NORMAS['enunciado-80-fonaje'];
    if (e === '89') return BANCO_NORMAS['enunciado-89-fonaje'];
  }

  // 5. Busca por Artigo e Diploma
  const a = (art ?? '').toLowerCase();
  const l = (lei ?? '').toLowerCase();
  const tx = (props as any).texto ? String((props as any).texto).toLowerCase() : '';

  // Tratado de Montreal / Decreto 5.910
  if (l.includes('5.910') || a.includes('5.910') || tx.includes('5.910') || l.includes('montreal')) {
    return BANCO_NORMAS['decreto-5910-montreal'];
  }

  // Precedentes do STF por texto (ARE / RE)
  if (tx.includes('1.373.406') || a.includes('1.373.406')) {
    return BANCO_NORMAS['tema-1240-stf'];
  }
  if (tx.includes('636.331') || a.includes('636.331')) {
    return BANCO_NORMAS['tema-210-stf'];
  }

  // ANAC 400
  if (a.includes('resolução') || l.includes('anac') || a.includes('400') || tx.includes('anac') || tx.includes('resolução 400')) {
    return BANCO_NORMAS['resolucao-400-anac'];
  }

  // CF/88
  if (l.includes('cf') || l.includes('constituição') || tx.includes('cf/88')) {
    return BANCO_NORMAS['art-5-cf'];
  }

  // LEI 9.099/95
  if (a.includes('9.099') || l.includes('9.099') || l.includes('juizados especiais') || tx.includes('9.099')) {
    if (a.includes('54') || tx.includes('54')) return BANCO_NORMAS['art-54-lei-9099'];
    if (a.includes('3') || tx.includes('art. 3')) return BANCO_NORMAS['art-3-lei-9099'];
    if (a.includes('9') || tx.includes('artigo 9') || tx.includes('art. 9')) return BANCO_NORMAS['art-9-lei-9099'];
    if (a.includes('41') || tx.includes('41')) return BANCO_NORMAS['art-41-lei-9099'];
    return BANCO_NORMAS['lei-9099'];
  }

  // CDC
  if (l.includes('cdc') || l.includes('consumidor') || tx.includes('cdc') || tx.includes('consumidor')) {
    if (a.includes('14') || tx.includes('art. 14')) return BANCO_NORMAS['art-14-cdc'];
    if (a.includes('27') || tx.includes('art. 27')) return BANCO_NORMAS['art-27-cdc'];
    if (a.includes('43') || tx.includes('art. 43')) return BANCO_NORMAS['art-43-cdc'];
    if (a.includes('42') || tx.includes('art. 42')) return BANCO_NORMAS['art-42-cdc'];
    if (a.includes('20') || tx.includes('art. 20')) return BANCO_NORMAS['art-20-cdc'];
    if (a.includes('6') || tx.includes('art. 6')) return BANCO_NORMAS['art-6-cdc'];
    return BANCO_NORMAS['cdc-geral'];
  }

  // CÓDIGO CIVIL
  if (l.includes('civil') || l.includes('cc')) {
    if (a.includes('737')) return BANCO_NORMAS['art-737-cc'];
    if (a.includes('734')) return BANCO_NORMAS['art-734-cc'];
    if (a.includes('944')) return BANCO_NORMAS['art-944-cc'];
    if (a.includes('290')) return BANCO_NORMAS['art-290-cc'];
    if (a.includes('186')) return BANCO_NORMAS['art-186-cc'];
    if (a.includes('927')) return BANCO_NORMAS['art-927-cc'];
  }

  // CPC
  if (l.includes('cpc') || l.includes('processo civil')) {
    if (a.includes('300')) return BANCO_NORMAS['art-300-cpc'];
    if (a.includes('373')) return BANCO_NORMAS['art-373-cpc'];
  }

  // Colégio Recursal do TJSP
  if (l.includes('colégio recursal') || a.includes('colégio recursal')) {
    return BANCO_NORMAS['colegio-recursal-fortuito-interno-tjsp'];
  }

  return null;
}
