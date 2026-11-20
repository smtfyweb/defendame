// As 14 verticais do JEC. "decisoes" = decisões do TJSP mapeadas no tema (RAJs 1 e 4).
export type Grupo = 'banco' | 'essencial' | 'viagem' | 'cotidiano';
export interface Tema { ordem: number; slug: string; nome: string; curto: string; grupo: Grupo; icone: string; linha: string; decisoes: number; palavras: string; }

export const GRUPOS: Record<Grupo, string> = {
  banco: 'Bancos e crédito',
  essencial: 'Serviços essenciais',
  viagem: 'Viagens',
  cotidiano: 'Compras e cotidiano',
};

export const TEMAS: Tema[] = [
  {"ordem": 1, "slug": "golpe-pix", "nome": "Fraude bancária e golpe do Pix", "curto": "Golpe do Pix", "grupo": "banco", "icone": "pix", "linha": "Falsa central, invasão de conta, contas \"laranja\"", "decisoes": 657, "palavras": "pix golpe falsa central banco conta invadida transferência spoofing"},
  {"ordem": 2, "slug": "negativacao-indevida", "nome": "Negativação indevida", "curto": "Nome negativado", "grupo": "banco", "icone": "user-x", "linha": "Nome no SPC/Serasa por dívida inexistente ou já quitada", "decisoes": 2832, "palavras": "serasa spc nome sujo negativado cadastro dívida"},
  {"ordem": 7, "slug": "consignado-rmc", "nome": "Consignado fraudulento e RMC/RCC", "curto": "Consignado / INSS", "grupo": "banco", "icone": "receipt", "linha": "Descontos no benefício do INSS sem contratação", "decisoes": 1115, "palavras": "inss aposentado consignado rmc rcc desconto benefício empréstimo"},
  {"ordem": 9, "slug": "cartao-de-credito", "nome": "Cartão de crédito", "curto": "Cartão de crédito", "grupo": "banco", "icone": "card", "linha": "Anuidade indevida, compras clonadas, juros do rotativo", "decisoes": 93, "palavras": "cartão anuidade clonado fatura rotativo"},
  {"ordem": 10, "slug": "superendividamento", "nome": "Superendividamento", "curto": "Superendividamento", "grupo": "banco", "icone": "trending-down", "linha": "Dívidas que comprometem o mínimo existencial", "decisoes": 539, "palavras": "dívidas superendividamento repactuação empréstimos renda"},
  {"ordem": 12, "slug": "protesto-indevido", "nome": "Protesto indevido de títulos", "curto": "Protesto indevido", "grupo": "banco", "icone": "file-x", "linha": "Título protestado sem causa ou dívida prescrita", "decisoes": 181, "palavras": "protesto cartório duplicata boleto título"},
  {"ordem": 3, "slug": "energia-eletrica", "nome": "Energia elétrica", "curto": "Energia elétrica", "grupo": "essencial", "icone": "zap", "linha": "Apagão, aparelhos queimados, TOI arbitrário", "decisoes": 1396, "palavras": "luz energia enel apagão queda toi conta"},
  {"ordem": 4, "slug": "telefonia", "nome": "Telefonia e telecomunicações", "curto": "Telefonia e internet", "grupo": "essencial", "icone": "phone", "linha": "Cobrança após cancelamento, portabilidade, SIM swap", "decisoes": 2265, "palavras": "telefone celular internet operadora vivo claro tim cancelamento chip"},
  {"ordem": 11, "slug": "planos-de-saude", "nome": "Planos de saúde", "curto": "Plano de saúde", "grupo": "essencial", "icone": "heart-pulse", "linha": "Negativa de cobertura e reajuste abusivo", "decisoes": 176, "palavras": "plano de saúde convênio cirurgia exame remédio reajuste"},
  {"ordem": 5, "slug": "transporte-aereo", "nome": "Transporte aéreo", "curto": "Voo", "grupo": "viagem", "icone": "plane", "linha": "Voo cancelado, atraso acima de 4h, overbooking", "decisoes": 1173, "palavras": "voo avião cancelado atraso companhia aérea overbooking conexão"},
  {"ordem": 6, "slug": "bagagem", "nome": "Extravio e dano de bagagem", "curto": "Bagagem", "grupo": "viagem", "icone": "luggage", "linha": "Mala extraviada, entregue com atraso ou danificada", "decisoes": 51, "palavras": "mala bagagem extraviada perdida danificada"},
  {"ordem": 8, "slug": "compras-online", "nome": "Compras online e rescisão contratual", "curto": "Compras online", "grupo": "cotidiano", "icone": "cart", "linha": "Produto não entregue, troca negada, arrependimento", "decisoes": 1923, "palavras": "compra online loja produto entrega troca arrependimento curso"},
  {"ordem": 13, "slug": "acidente-de-transito", "nome": "Acidente de trânsito", "curto": "Acidente de trânsito", "grupo": "cotidiano", "icone": "car", "linha": "Colisão com recusa de pagar o conserto", "decisoes": 118, "palavras": "acidente batida carro colisão seguro franquia"},
  {"ordem": 14, "slug": "desvio-produtivo", "nome": "Dano moral e desvio produtivo", "curto": "Tempo perdido / SAC", "grupo": "cotidiano", "icone": "hourglass", "linha": "Tempo perdido com SAC, Procon e falhas graves", "decisoes": 6346, "palavras": "tempo perdido sac procon atendimento desvio produtivo dano moral"}
];

export const TEMA_SLUGS = TEMAS.map((t) => t.slug);
export const temaPorSlug = (slug: string) => TEMAS.find((t) => t.slug === slug);
export const temasDoGrupo = (g: Grupo) => TEMAS.filter((t) => t.grupo === g);
export const fmt = (n: number) => n.toLocaleString('pt-BR');
