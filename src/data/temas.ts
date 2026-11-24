// As verticais do JEC com dados consolidados do TJSP (Estado de São Paulo).
export type Grupo = 'banco' | 'essencial' | 'viagem' | 'cotidiano';
export interface Tema {
  ordem: number;
  slug: string;
  nome: string;
  curto: string;
  grupo: Grupo;
  icone: string;
  linha: string;
  decisoes: number;
  procedenciaPct: number;
  palavras: string;
  hookCuriosidade: string;
  seoH1?: string;
  seoH1Html?: string;
  secaoGuiasH2?: string;
  secaoGuiasH2Html?: string;
  secaoGuiasSub?: string;
}

export const GRUPOS: Record<Grupo, string> = {
  banco: 'Bancos e crédito',
  essencial: 'Serviços essenciais',
  viagem: 'Viagens',
  cotidiano: 'Compras e cotidiano',
};

export const TEMAS: Tema[] = [
  {"ordem": 1, "slug": "golpe-pix", "nome": "Fraude bancária e golpe do Pix", "curto": "Golpe do Pix", "grupo": "banco", "icone": "pix", "linha": "Falsa central, invasão de conta, contas \"laranja\"", "decisoes": 5837, "procedenciaPct": 52.5, "palavras": "pix golpe falsa central banco conta invadida transferencia spoofing nubank itau bradesco santander inter caixa mercado pago pan", "hookCuriosidade": "Por que o banco alegou culpa da vítima?", "seoH1": "Golpe do Pix, Falsa Central e Fraude Bancária: Como Recuperar Valores no JEC", "seoH1Html": "Golpe do Pix, Falsa Central e Fraude Bancária: <span class=\"title-pill-inv\">Como Recuperar Valores</span> no JEC", "secaoGuiasH2": "Fraude bancária e golpe do Pix: decisões do TJSP e devolução de valores", "secaoGuiasH2Html": "Fraude bancária e golpe do Pix: <span class=\"title-pill-inv\">decisões do TJSP e devolução de valores</span>", "secaoGuiasSub": "Guia e análises técnicas sobre responsabilidade objetiva dos bancos, prazo do MED e jurisprudência pacificada do TJSP:"},
  {"ordem": 2, "slug": "negativacao-indevida", "nome": "Negativação indevida", "curto": "Nome negativado", "grupo": "banco", "icone": "user-x", "linha": "Nome no SPC/Serasa por dívida inexistente ou já quitada", "decisoes": 5966, "procedenciaPct": 64.8, "palavras": "serasa spc boa vista nome sujo negativado cadastro divida protesto claro vivo tim itau bradesco santander casas bahia magazine luiza", "hookCuriosidade": "Havia outra restrição ativa no seu CPF?", "seoH1": "Nome Negativado no Serasa ou SPC Indevidamente: Como Limpar em 5 Dias e Indenização no JEC", "seoH1Html": "Nome Negativado no Serasa ou SPC Indevidamente: <span class=\"title-pill-inv\">Como Limpar em 5 Dias e Indenização</span> no JEC", "secaoGuiasH2": "Nome sujo indevidamente: decisões do TJSP, prazos de exclusão e dano moral", "secaoGuiasH2Html": "Nome sujo indevidamente: <span class=\"title-pill-inv\">decisões do TJSP</span>, prazos de exclusão e <span class=\"title-pill-inv\">dano moral</span>", "secaoGuiasSub": "Série jurídica completa sobre como retirar o CPF dos cadastros restritivos em até 5 dias úteis e quantificar indenizações contra bancos e securitizadoras:"},
  {"ordem": 7, "slug": "consignado-rmc", "nome": "Consignado fraudulento e RMC/RCC", "curto": "Consignado / INSS", "grupo": "banco", "icone": "receipt", "linha": "Descontos no benefício do INSS sem contratação", "decisoes": 1199, "procedenciaPct": 40.1, "palavras": "inss aposentado consignado rmc rcc desconto beneficio emprestimo bmg pan c6 daycoval facta itau bradesco mercantil", "hookCuriosidade": "O valor do empréstimo foi gasto ou devolvido?", "seoH1": "Consignado Não Autorizado e Cartão RMC/RCC: Como Cancelar e Restituição em Dobro no JEC", "seoH1Html": "Consignado Não Autorizado e Cartão RMC/RCC: <span class=\"title-pill-inv\">Como Cancelar e Restituição em Dobro</span> no JEC", "secaoGuiasH2": "Descontos indevidos no INSS e reserva de margem (RMC): decisões do TJSP", "secaoGuiasSub": "Análises jurimétricas sobre contratos fraudulentos contra aposentados e devolução em dobro de valores cobrados indevidamente:"},
  {"ordem": 9, "slug": "cartao-de-credito", "nome": "Cartão de crédito", "curto": "Cartão de crédito", "grupo": "banco", "icone": "card", "linha": "Anuidade indevida, compras clonadas, juros do rotativo", "decisoes": 482, "procedenciaPct": 48.0, "palavras": "cartao anuidade clonado fatura rotativo juros compras nubank itau bradesco santander pan inter caixa c6", "hookCuriosidade": "A compra fraudulenta usou chip e senha física?", "seoH1": "Fraude no Cartão de Crédito e Cobrança Indevida: Responsabilidade do Banco no JEC", "seoH1Html": "Fraude no Cartão de Crédito e Cobrança Indevida: <span class=\"title-pill-inv\">Responsabilidade do Banco</span> no JEC", "secaoGuiasH2": "Clonagem de cartão, anuidade e compras não reconhecidas: decisões do TJSP", "secaoGuiasSub": "Critérios da Justiça paulista sobre a fragilidade de sistemas de segurança bancária e ressarcimento de faturas fraudadas:"},
  {"ordem": 10, "slug": "superendividamento", "nome": "Superendividamento", "curto": "Superendividamento", "grupo": "banco", "icone": "trending-down", "linha": "Dívidas que comprometem o mínimo existencial", "decisoes": 539, "procedenciaPct": 42.0, "palavras": "dividas superendividamento repactuacao emprestimos renda parcelas credores itau bradesco santander caixa banco do brasil crefisa", "hookCuriosidade": "As parcelas ultrapassam 30% da sua renda?", "seoH1": "Superendividamento e Mínimo Existencial: Como Renegociar Dívidas pela Lei 14.181 no JEC", "seoH1Html": "Superendividamento e Mínimo Existencial: <span class=\"title-pill-inv\">Como Renegociar Dívidas</span> pela Lei 14.181 no JEC", "secaoGuiasH2": "Repactuação de dívidas e preservação do mínimo existencial no TJSP", "secaoGuiasSub": "Como aplicar a Lei do Superendividamento para limitar descontos bancários que sufocam o orçamento familiar:"},
  {"ordem": 12, "slug": "protesto-indevido", "nome": "Protesto indevido de títulos", "curto": "Protesto indevido", "grupo": "banco", "icone": "file-x", "linha": "Título protestado sem causa ou dívida prescrita", "decisoes": 381, "procedenciaPct": 58.0, "palavras": "protesto cartorio duplicata boleto titulo divida prescrita ativos recovery ipanema itau bradesco santander cobranca", "hookCuriosidade": "A dívida foi quitada antes do protesto?", "seoH1": "Protesto Indevido em Cartório e Dívida Prescrita: Cancelamento e Dano Moral no JEC", "seoH1Html": "Protesto Indevido em Cartório e <span class=\"title-pill-inv\">Dívida Prescrita</span>: Cancelamento e <span class=\"title-pill-inv\">Dano Moral</span> no JEC", "secaoGuiasH2": "Títulos protestados sem causa e certidões cartorárias: decisões do TJSP", "secaoGuiasSub": "Como sustar e cancelar protestos abusivos de duplicatas e cheques prescritos perante o Juizado Especial:"},
  {"ordem": 3, "slug": "energia-eletrica", "nome": "Energia elétrica", "curto": "Energia elétrica", "grupo": "essencial", "icone": "zap", "linha": "Apagão, aparelhos queimados, TOI arbitrário", "decisoes": 2056, "procedenciaPct": 70.7, "palavras": "luz energia enel apagao queda toi conta cpfl elektro neoenergia edp queimado corte", "hookCuriosidade": "Tem laudo dos aparelhos e protocolo em 90 dias?", "seoH1": "Apagão, Falta de Luz e Aparelhos Queimados: Indenizações da Enel e CPFL no JEC", "seoH1Html": "Apagão, Falta de Luz e Aparelhos Queimados: <span class=\"title-pill-inv\">Indenizações da Enel e CPFL</span> no JEC", "secaoGuiasH2": "Apagão, corte indevido e queima de equipamentos: precedentes do TJSP", "secaoGuiasSub": "Orientações práticas para reparação material de eletrodomésticos e danos morais por interrupção prolongada de energia:"},
  {"ordem": 4, "slug": "telefonia", "nome": "Telefonia e telecomunicações", "curto": "Telefonia e internet", "grupo": "essencial", "icone": "phone", "linha": "Cobrança após cancelamento, portabilidade, SIM swap", "decisoes": 3515, "procedenciaPct": 64.7, "palavras": "telefone celular internet operadora vivo claro tim oi fibra cancelamento chip sim swap portabilidade sinal", "hookCuriosidade": "Você anotou os protocolos de cancelamento?", "seoH1": "Cobrança Indevida de Telefonia, Portabilidade e Linha Cancelada: Ações no JEC", "seoH1Html": "Cobrança Indevida de Telefonia, <span class=\"title-pill-inv\">Portabilidade e Linha Cancelada</span>: Ações no JEC", "secaoGuiasH2": "Problemas com operadoras de telefonia e internet: jurisprudência do TJSP", "secaoGuiasSub": "Como reverter cobranças abusivas pós-cancelamento, SIM swap e falhas de sinal no Juizado Especial Cível:"},
  {"ordem": 11, "slug": "planos-de-saude", "nome": "Planos de saúde", "curto": "Plano de saúde", "grupo": "essencial", "icone": "heart-pulse", "linha": "Negativa de cobertura e reajuste abusivo", "decisoes": 2525, "procedenciaPct": 70.7, "palavras": "plano de saude convenio cirurgia exame remedio reajuste negativa amil notredame hapvida bradesco saude sulamerica unimed prevent senior porto saude", "hookCuriosidade": "O laudo médico justificou a urgência do pedido?", "seoH1": "Negativa de Cirurgia, Exames e Reajuste Abusivo no Plano de Saúde: Liminares no JEC", "seoH1Html": "Negativa de Cirurgia, Exames e <span class=\"title-pill-inv\">Reajuste Abusivo no Plano de Saúde</span>: Liminares no JEC", "secaoGuiasH2": "Negativa de cobertura e aumentos abusivos de convênio: decisões do TJSP", "secaoGuiasSub": "Como obter medicamentos de alto custo e autorização de cirurgias de urgência com base nas Súmulas do TJSP:"},
  {"ordem": 5, "slug": "transporte-aereo", "nome": "Transporte aéreo", "curto": "Voo", "grupo": "viagem", "icone": "plane", "linha": "Voo cancelado, atraso acima de 4h, overbooking", "decisoes": 4848, "procedenciaPct": 72.7, "palavras": "voo aviao cancelado atraso companhia aerea overbooking conexao latam gol azul tap air france klm", "hookCuriosidade": "O atraso na chegada passou de 4 horas?", "seoH1": "Voo Cancelado, Atrasado ou Overbooking: Direitos do Passageiro e Indenizações no JEC", "seoH1Html": "Voo Cancelado, Atrasado ou Overbooking: <span class=\"title-pill-inv\">Direitos do Passageiro e Indenizações</span> no JEC", "secaoGuiasH2": "Voo cancelado, atraso e overbooking: decisões do TJSP e direitos do passageiro", "secaoGuiasSub": "Trilha investigativa e análises baseadas na jurisprudência das Turmas Recursais de São Paulo. Saiba quando cabe dano moral e reembolso integral:"},
  {"ordem": 6, "slug": "bagagem", "nome": "Extravio e dano de bagagem", "curto": "Bagagem", "grupo": "viagem", "icone": "luggage", "linha": "Mala extraviada, entregue com atraso ou danificada", "decisoes": 310, "procedenciaPct": 68.0, "palavras": "mala bagagem extraviada perdida danificada rib aeroporto latam gol azul tap american airlines", "hookCuriosidade": "Registrou o formulário RIB no aeroporto?", "seoH1": "Extravio, Dano e Atraso de Bagagem em Voo: Direitos e Indenizações no JEC", "seoH1Html": "Extravio, Dano e Atraso de Bagagem em Voo: <span class=\"title-pill-inv\">Direitos e Indenizações</span> no JEC", "secaoGuiasH2": "Mala perdida ou danificada: como exigir reembolso e dano moral no TJSP", "secaoGuiasSub": "O papel indispensável do formulário RIB no aeroporto e os precedentes para indenização de bagagens aéreas:"},
  {"ordem": 8, "slug": "compras-online", "nome": "Compras online e rescisão contratual", "curto": "Compras online", "grupo": "cotidiano", "icone": "cart", "linha": "Produto não entregue, troca negada, arrependimento", "decisoes": 3175, "procedenciaPct": 70.4, "palavras": "compra online loja produto entrega troca arrependimento curso mercado livre shopee amazon magazine luiza casas bahia kabum aliexpress americanas", "hookCuriosidade": "Pediu o cancelamento dentro dos 7 dias?", "seoH1": "Produto Não Entregue, Golpe em Compra Online e Direito de Arrependimento no JEC", "seoH1Html": "Produto Não Entregue, Golpe em <span class=\"title-pill-inv\">Compra Online e Direito de Arrependimento</span> no JEC", "secaoGuiasH2": "Problemas no e-commerce, atraso na entrega e trocas negadas no TJSP", "secaoGuiasSub": "Aplicação do prazo de reflexão de 7 dias e responsabilização de marketplaces e lojistas virtuais:"},
  {"ordem": 13, "slug": "acidente-de-transito", "nome": "Acidente de trânsito", "curto": "Acidente de trânsito", "grupo": "cotidiano", "icone": "car", "linha": "Colisão com recusa de pagar o conserto", "decisoes": 1953, "procedenciaPct": 69.3, "palavras": "acidente batida carro colisao seguro franquia seguradora porto seguro bradesco azul tokio allianz mapfre hdi conserto", "hookCuriosidade": "Tem o B.O. com a dinâmica e 3 orçamentos?", "seoH1": "Acidente de Trânsito e Recusa da Seguradora: Como Cobrar o Conserto no JEC", "seoH1Html": "Acidente de Trânsito e Recusa da Seguradora: <span class=\"title-pill-inv\">Como Cobrar o Conserto</span> no JEC", "secaoGuiasH2": "Colisão veicular, negativa de cobertura e orçamentos: jurisprudência do TJSP", "secaoGuiasSub": "Roteiro probatório com boletim de ocorrência, dinâmica do acidente e cobrança de franquia contra causadores do dano:"},
  {"ordem": 14, "slug": "desvio-produtivo", "nome": "Dano moral e desvio produtivo", "curto": "Tempo perdido / SAC", "grupo": "cotidiano", "icone": "hourglass", "linha": "Tempo perdido com SAC, Procon e falhas graves", "decisoes": 6346, "procedenciaPct": 61.4, "palavras": "tempo perdido sac procon atendimento desvio produtivo dano moral horas ligacao protocolo reclamacao claro vivo tim enel itau bradesco", "hookCuriosidade": "Por que o juiz considerou 'mero aborrecimento'?", "seoH1": "Tempo Perdido com SAC e Falha de Atendimento: Dano Moral por Desvio Produtivo no JEC", "seoH1Html": "Tempo Perdido com SAC e Falha de Atendimento: <span class=\"title-pill-inv\">Dano Moral por Desvio Produtivo</span> no JEC", "secaoGuiasH2": "Desvio produtivo do consumidor: quando o tempo perdido no SAC gera indenização no TJSP", "secaoGuiasSub": "A superação da tese do mero aborrecimento quando o cidadão desperdiça horas de sua vida útil para resolver problemas da empresa:"}
];

export const TEMA_SLUGS = TEMAS.map((t) => t.slug);
export const temaPorSlug = (slug: string) => TEMAS.find((t) => t.slug === slug);
export const temasDoGrupo = (g: Grupo) => TEMAS.filter((t) => t.grupo === g);
export const fmt = (n: number) => n.toLocaleString('pt-BR');

/**
 * Retorna o ícone contextual do artigo.
 * Se houver um ícone explícito no frontmatter (iconeExplicit), utiliza-o.
 * Caso contrário, deduz a partir de palavras-chave no slug do artigo, ou faz fallback ao ícone do tema.
 */
export function getIconeArtigo(slug: string, fallbackTemaIcone: string, iconeExplicit?: string): string {
  if (iconeExplicit) return iconeExplicit;
  const s = slug.toLowerCase();
  if (s.includes('o-que-fazer') || s.includes('primeiras-24-horas') || s.includes('passo-a-passo') || s.includes('urgente')) return 'clock';
  if (s.includes('banco-devolve') || s.includes('banco') || s.includes('conta')) return 'bank';
  if (s.includes('dano-moral') || s.includes('sumula') || s.includes('sentenca') || s.includes('jurisprudencia')) return 'gavel';
  if (s.includes('indenizacao') || s.includes('valores') || s.includes('radar') || s.includes('tabela')) return 'chart';
  if (s.includes('nome-sujo') || s.includes('extrato') || s.includes('contrato') || s.includes('documento')) return 'doc';
  if (s.includes('cancelado') || s.includes('overbooking')) return 'alert';
  return fallbackTemaIcone;
}

export interface SecaoCorrelatosConfig {
  titulo: string;
  tituloHtml?: string;
  subtitulo: string;
  slotsH: string;
  top: Tema;
  side: Tema[];
  maisDoGrupo: Tema[];
}

const AFINIDADES_MAP: Record<string, { titulo: string; tituloHtml?: string; subtitulo: string; slotsH: string; top: string; side: string[] }> = {
  'transporte-aereo': {
    titulo: 'Direitos do Passageiro Aéreo e Demandas de Viagem no JEC',
    tituloHtml: 'Direitos do <span class="title-pill-inv">Passageiro Aéreo e Demandas de Viagem</span> no JEC',
    subtitulo: 'Análise jurimétrica de 5.158 decisões do TJSP sobre problemas em voos, bagagens e compras de viagens.',
    slotsH: 'Demandas de consumo frequentes em viagens',
    top: 'bagagem',
    side: ['compras-online', 'desvio-produtivo', 'cartao-de-credito']
  },
  'bagagem': {
    titulo: 'Direitos do Viajante e Transporte Aéreo no Juizado Especial',
    tituloHtml: 'Direitos do Viajante e <span class="title-pill-inv">Transporte Aéreo</span> no Juizado Especial',
    subtitulo: 'Decisões do TJSP sobre extravio de malas, cancelamentos de voo e indenizações ao consumidor.',
    slotsH: 'Demandas correlatas de transporte e consumo',
    top: 'transporte-aereo',
    side: ['desvio-produtivo', 'compras-online', 'cartao-de-credito']
  },
  'golpe-pix': {
    titulo: 'Outras Ações de Direito Bancário e Proteção ao Crédito no JEC',
    tituloHtml: 'Outras <span class="title-pill-inv">Ações de Direito Bancário e Proteção ao Crédito</span> no JEC',
    subtitulo: 'Decisões reais do TJSP sobre fraudes financeiras, juros e restrições indevidas no CPF.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'negativacao-indevida',
    side: ['cartao-de-credito', 'consignado-rmc', 'protesto-indevido']
  },
  'negativacao-indevida': {
    titulo: 'Ações de Proteção ao Crédito e Direito Bancário no JEC',
    tituloHtml: 'Ações de <span class="title-pill-inv">Proteção ao Crédito e Direito Bancário</span> no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre restrições cadastrais no SPC/Serasa, golpes e cobranças indevidas.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'protesto-indevido',
    side: ['golpe-pix', 'cartao-de-credito', 'telefonia']
  },
  'telefonia': {
    titulo: 'Serviços Essenciais e Concessionárias no Juizado Especial',
    tituloHtml: 'Serviços Essenciais e <span class="title-pill-inv">Concessionárias no Juizado Especial</span>',
    subtitulo: 'Como os juízes de SP julgam cobranças indevidas de operadoras, cortes de luz e planos de saúde.',
    slotsH: 'Concessionárias e serviços essenciais correlatos',
    top: 'energia-eletrica',
    side: ['planos-de-saude', 'desvio-produtivo', 'negativacao-indevida']
  },
  'energia-eletrica': {
    titulo: 'Serviços Essenciais e Concessionárias Públicas no JEC',
    tituloHtml: 'Serviços Essenciais e <span class="title-pill-inv">Concessionárias Públicas</span> no JEC',
    subtitulo: 'Decisões do TJSP sobre apagões, queima de aparelhos, telecomunicações e serviços contínuos.',
    slotsH: 'Outros serviços essenciais analisados',
    top: 'telefonia',
    side: ['planos-de-saude', 'desvio-produtivo', 'acidente-de-transito']
  },
  'planos-de-saude': {
    titulo: 'Planos de Saúde e Serviços Essenciais no Juizado Especial',
    tituloHtml: 'Planos de Saúde e <span class="title-pill-inv">Serviços Essenciais</span> no Juizado Especial',
    subtitulo: 'Jurisprudência do TJSP sobre negativas de cobertura cirúrgica, reajustes abusivos e serviços essenciais.',
    slotsH: 'Serviços essenciais e direitos correlatos',
    top: 'energia-eletrica',
    side: ['telefonia', 'desvio-produtivo', 'cartao-de-credito']
  },
  'compras-online': {
    titulo: 'Direito do Consumidor e Comércio Eletrônico no JEC',
    tituloHtml: 'Direito do Consumidor e <span class="title-pill-inv">Comércio Eletrônico</span> no JEC',
    subtitulo: 'Como o TJSP decide ações sobre produtos não entregues, trocas negadas e fraudes no e-commerce.',
    slotsH: 'Demandas correlatas de consumo e e-commerce',
    top: 'desvio-produtivo',
    side: ['cartao-de-credito', 'negativacao-indevida', 'transporte-aereo']
  },
  'desvio-produtivo': {
    titulo: 'Dano Moral e Perda de Tempo Útil no Juizado Especial Cível',
    tituloHtml: '<span class="title-pill-inv">Dano Moral e Perda de Tempo Útil</span> no Juizado Especial Cível',
    subtitulo: 'Decisões do TJSP que acolhem o desvio produtivo contra concessionárias, operadoras e companhias aéreas.',
    slotsH: 'Segmentos com maior índice de desvio produtivo',
    top: 'compras-online',
    side: ['telefonia', 'transporte-aereo', 'energia-eletrica']
  },
  'acidente-de-transito': {
    titulo: 'Acidentes de Trânsito e Reparação de Danos no JEC',
    tituloHtml: 'Acidentes de Trânsito e <span class="title-pill-inv">Reparação de Danos</span> no JEC',
    subtitulo: 'Decisões do TJSP sobre colisões de veículos, recusa de conserto por seguradoras e danos materiais.',
    slotsH: 'Outras demandas de reparação de danos no JEC',
    top: 'desvio-produtivo',
    side: ['compras-online', 'energia-eletrica', 'protesto-indevido']
  },
  'cartao-de-credito': {
    titulo: 'Cartão de Crédito e Fraudes Financeiras no JEC',
    tituloHtml: '<span class="title-pill-inv">Cartão de Crédito</span> e Fraudes Financeiras no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre compras clonadas, juros rotativos e golpes bancários.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'golpe-pix',
    side: ['negativacao-indevida', 'superendividamento', 'consignado-rmc']
  },
  'consignado-rmc': {
    titulo: 'Empréstimos Consignados e Proteção ao Aposentado no JEC',
    tituloHtml: '<span class="title-pill-inv">Empréstimos Consignados</span> e Proteção ao Aposentado no JEC',
    subtitulo: 'Decisões do TJSP sobre descontos indevidos no INSS, cartões RMC/RCC e fraudes financeiras.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'golpe-pix',
    side: ['superendividamento', 'negativacao-indevida', 'cartao-de-credito']
  },
  'superendividamento': {
    titulo: 'Superendividamento e Repactuação de Dívidas no JEC',
    tituloHtml: 'Superendividamento e <span class="title-pill-inv">Repactuação de Dívidas</span> no JEC',
    subtitulo: 'Como a Justiça paulista aplica a Lei do Superendividamento contra abusos de bancos e financeiras.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'cartao-de-credito',
    side: ['consignado-rmc', 'negativacao-indevida', 'golpe-pix']
  },
  'protesto-indevido': {
    titulo: 'Protesto de Títulos e Proteção Cadastral no JEC',
    tituloHtml: 'Protesto de Títulos e <span class="title-pill-inv">Proteção Cadastral</span> no JEC',
    subtitulo: 'Jurisprudência do TJSP sobre cancelamento de protestos ilegítimos e indenizações por danos morais.',
    slotsH: 'Ações bancárias e financeiras analisadas',
    top: 'negativacao-indevida',
    side: ['golpe-pix', 'cartao-de-credito', 'acidente-de-transito']
  }
};

export function getSecaoCorrelatos(slug: string): SecaoCorrelatosConfig {
  const cfg = AFINIDADES_MAP[slug];
  const tema = temaPorSlug(slug);
  const outrosMesmoGrupo = tema ? TEMAS.filter((t) => t.grupo === tema.grupo && t.slug !== slug) : [];

  if (cfg) {
    const topTema = temaPorSlug(cfg.top)!;
    const sideTemas = cfg.side.map((s) => temaPorSlug(s)!).filter(Boolean);
    const usados = new Set([slug, cfg.top, ...cfg.side]);
    const maisDoGrupo = outrosMesmoGrupo.filter((t) => !usados.has(t.slug));

    return {
      titulo: cfg.titulo,
      tituloHtml: cfg.tituloHtml,
      subtitulo: cfg.subtitulo,
      slotsH: cfg.slotsH,
      top: topTema,
      side: sideTemas,
      maisDoGrupo
    };
  }

  // Fallback seguro
  const top = outrosMesmoGrupo[0] || TEMAS.find((t) => t.slug !== slug)!;
  const side = TEMAS.filter((t) => t.slug !== slug && t.slug !== top.slug).slice(0, 3);
  return {
    titulo: 'Demandas correlatas no Juizado Especial Cível',
    subtitulo: 'Decisões públicas do Tribunal de Justiça de São Paulo analisadas pelo portal.',
    slotsH: 'Outras ações frequentes no JEC',
    top,
    side,
    maisDoGrupo: []
  };
}
