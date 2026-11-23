# RELATÓRIO DE AUDITORIA E ANÁLISE TÉCNICA UI/UX — PORTAL DEFENDAME
**Ambiente Auditado:** `http://localhost:4400/` (Porta ativa, Astro 5.x + Tailwind CSS v4 / DataNova)  
**Diretório de Origem:** `/home/sfy/projetos/defendame`  
**Data da Auditoria:** 22 de Novembro de 2026  
**Responsáveis:** Antigravity (Engenharia de Dados e Backend) & Claude (Especialista UI/UX e Design System)  
**Objetivo:** Inspeção minuciosa página por página, navegação, menus, botões, indicadores e levantamento de sessões ou funções esquecidas para transformar o protótipo no portal de maior autoridade jurimétrica do Brasil.

---

## 1. DIAGNÓSTICO GERAL E SINCRONIZAÇÃO DE DADOS

### 1.1 Status Operacional do Servidor Local (Porta 4400)
O servidor de desenvolvimento Astro está em execução estável (`http://localhost:4400/`), com tempo de resposta sub-milissegundo em desenvolvimento, sem erros de compilação no console e respondendo com código **HTTP 200 OK** em todas as rotas primárias testadas (`/`, `/artigos/`, `/quem-somos/`, `/golpe-pix/`, `/golpe-pix/quando-o-banco-devolve/`, `/autor/andre-l-silva/`, `/guia-de-estilo/`, `/privacidade/`, `/cookies/`).

### 1.2 O Principal "Gap" de Dados Identificado
O protótipo em `/home/sfy/projetos/defendame` ainda está baseado no primeiro mock estático do projeto:
- **No protótipo atual:** Cita **19.558 decisões**, restritas a apenas **2 RAJs** (RAJs 1 e 4 — Grande SP e Campinas) e **14 temas**.
- **No ecossistema real consolidado (`/home/sfy/export_site/`):** A base oficial `sfyjec.db` já possui **39.727 decisões judiciais**, cobrindo **todas as 10 RAJs do Estado de São Paulo** em 1º Grau + Turmas Recursais em 2º Grau, distribuídas em **15 verticais canônicas**.

> **Impacto no Usuário:** O portal já é excelente visualmente, mas está "escondendo metade do seu poder de fogo". Ao conectá-lo aos JSONs consolidados em `/home/sfy/export_site/`, o portal dobra seu volume de amostragem (39.727 decisões) e amplia a relevância para consumidores de todo o estado de SP (Santos, Ribeirão Preto, São José dos Campos, Sorocaba, Bauru, Presidente Prudente, Araçatuba, São José do Rio Preto, Campinas e Capital).

---

## 2. AUDITORIA PÁGINA POR PÁGINA: NAVEGAÇÃO, ELEMENTOS E GAPS

---

### 2.1 HEADER, NAVBAR GLOBAL E MENUS (DESKTOP E MOBILE)
*Arquivo fonte:* `src/components/Header.astro`

#### O que está excelente:
- O Mega Menu com 4 categorias (`Bancos e crédito`, `Serviços essenciais`, `Viagens`, `Compras e cotidiano`) é limpo e tem boa hierarquia.
- O Theme Toggle (Dark/Light) funciona sem "flicker" de renderização.
- O Mobile Drawer é leve, acessível e fecha no clique externo ou na tecla `Escape`.
- O botão primário de conversão *"Verificar meu caso"* tem destaque no canto superior direito.

#### O que está faltando ou pode melhorar:
1. **Contadores de decisões nos itens do Mega Menu:**  
   Em vez de apenas o nome do tema, adicionar um micro-badge discreto com o volume (ex: *Fraude Pix [5.837]* ou *Negativação [5.966]*). Isso reforça instantaneamente que o DefendaMe é um portal de *dados reais*, não um blog comum de direito.
2. **Atualização para as 15 Verticais:**  
   O tema *Contratos Habitacionais (Atraso na Entrega de Obra)* — que possui 3.231 decisões reais na base — não consta no menu atual. Deve ser inserido no grupo de *Compras e cotidiano* ou em uma coluna reformulada.
3. **Indicador de Página Ativa (`aria-current="page"`):**  
   Os links de topo (`Início`, `Artigos`, `Sobre`) não mudam de cor quando o usuário está navegando na respectiva rota. Adicionar `class:list={{ active: Astro.url.pathname === l.href }}`.
4. **Atalho Direto para "Jus Postulandi (Como Ingressar Sem Advogado)":**  
   Um dos maiores atrativos de tráfego orgânico para o consumidor comum do JEC é aprender a ingressar sozinho em causas de até 20 salários mínimos. Um link direto no menu superior aumenta a credibilidade e a retenção.
5. **Busca Rápida no Header:**  
   O header desktop não possui botão de lupa. Quem navega em artigos ou na página institucional precisa voltar à Home para usar a barra de busca de temas.

---

### 2.2 PÁGINA INICIAL (`index.astro`)
*Arquivo fonte:* `src/pages/index.astro`

#### O que está excelente:
- O Hero é direto, focado na dor do consumidor e com chamada visual forte (*"Seus direitos no JEC, explicados com dados"*).
- Os chips de busca rápida (*"Golpe do Pix"*, *"Nome negativado"*, *"Voo cancelado"*) aceleram a navegação no primeiro toque.
- O gráfico de barras comparativo de jurimetria (`#jurimetria`) comunica visualmente a concentração das demandas de forma elegante.

#### Sessões Faltantes / Gaps Identificados:
1. **Indicadores de Autoridade Incompletos na Barra de Estatísticas:**  
   A barra de estatísticas atual exibe apenas 3 números: *Decisões analisadas*, *Temas do JEC* e *Artigos publicados*.  
   *O que falta incluir:*
   - **Índice Global de Procedência no JEC:** `61,4%` de procedência estadual apurada.
   - **Prazo Médio até a Sentença:** `112 dias corridos` (mostrando a agilidade real do rito sumaríssimo).
   - **Comarcas Mapeadas:** `2.110 foros e varas` do Estado de São Paulo.
2. **URGENTE: Risco Regulatório OAB na Seção "Como Funciona":**  
   No código atual de `index.astro` (linhas 22 a 25 e 105), as etapas 3, 4, 5 e 6 trazem:  
   *"A partir daqui, com contrato de prestação de serviços advocatícios"* e *"acompanhamos o caso do início ao fim no Juizado Especial Cível"*.  
   **Alerta Ético-Profissional (Provimento CFOAB nº 205/2021):**  
   Como o portal ainda atua sob a titularidade acadêmica e de Legal Analytics de André L. Silva (antes da inscrição definitiva nos quadros da OAB), esse texto pode ser interpretado como captação direta de clientela ou oferta de patrocínio jurídico direto.  
   **Solução Técnica Recomendada:**  
   Substituir essa divisão por uma **Trilha de Dupla Escolha**:
   - **Opção A — Autotutela / Jus Postulandi (Lei 9.099/95, Art. 9º):** "Você mesmo ingressa no balcão do JEC ou online, com nosso checklist de provas e fundamentação pronta (gratuito para causas até 20 salários mínimos)".
   - **Opção B — Representação por Advogado Parceiro Credenciado:** "Para causas complexas (acima de 20 salários mínimos) ou fase recursal, conectamos você a escritórios credenciados especialistas em Direito do Consumidor".
3. **Sessão Faltante: "Como o Juiz Decide no JEC (Dano Material vs. Dano Moral)":**  
   Falta um bloco visual didático explicando o que gera ressarcimento material (extrato do golpe, passagem aérea) vs. o que gera dano moral (desvio produtivo, negativação indevida, Súmula 385 do STJ).
4. **Sessão Faltante: "Ferramentas Gratuitas do Consumidor":**  
   Uma seção com cartões para ferramentas interativas rápidas (Calculadora de Prazos, Checklist de Provas em PDF, Gerador de Reclamação Procon).
5. **Comportamento da Busca:**  
   A busca na Home filtra os cartões via Javascript local, mas se o usuário digitar algo e der Enter, a página não preserva o termo na URL (`?q=termo`). Se o usuário vier de outra página com busca, nada acontece.

---

### 2.3 HUBS TEMÁTICOS (`/[tema]/index.astro`)
*Arquivo fonte:* `src/pages/[tema]/index.astro`

#### O que está excelente:
- Breadcrumbs semânticos bem estruturados com JSON-LD schema.org.
- Exibição de artigos específicos daquele tema e link para temas correlatos do mesmo grupo.

#### Sessões e Funções Esquecidas / Gaps:
1. **Ausência dos Indicadores Específicos do Tema no Topo:**  
   O topo exibe apenas a quantidade total de decisões mapeadas. Faltam 3 indicadores cruciais que já constam no nosso `verticais.json`:
   - **Procedência Média no Estado:** ex: *72,7%* em Aéreo, *52,5%* em Golpe Pix, *64,8%* em Negativação.
   - **Dano Moral Médio dos Casos Favoráveis:** ex: *R$ 6.156,48* (Pix), *R$ 7.086,27* (Negativação).
   - **Tempo Médio de Tramitação:** ex: *105 dias* (Pix), *92 dias* (Negativação).
2. **Falta do Filtro Dinâmico por Comarca / Região:**  
   O cidadão de Campinas, Ribeirão Preto ou Barueri quer saber como o juizado da sua cidade decide aquele problema. Um componente de seleção de Comarca (`<ComarcaSelector />`) conectado ao `comarcas.json` tornaria essa página a maior referência de busca local (SEO Local imbatível).
3. **Checklist Interativo de Provas do Tema:**  
   Cada vertical precisa de uma caixa interativa com checkboxes para o usuário ticar as provas que possui:
   - Exemplo para Golpe Pix: `[ ] Boletim de Ocorrência`, `[ ] Comprovante de abertura de MED no banco (até 80 dias)`, `[ ] Prints das mensagens ou ligação da falsa central`, `[ ] Extrato bancário demonstrando que a transação fugiu do perfil habitual`.
   - Botão: *"Copiar Checklist"* ou *"Enviar meu caso com essas provas"*.
4. **Linha do Tempo Típica da Demanda (StepFlow):**  
   Um fluxo visual em 4 passos:
   *Fato Lesivo* ➔ *Tentativa Amigável (SAC/Consumidor.gov)* ➔ *Abertura no JEC* ➔ *Audiência e Sentença*.
5. **Accordion de Súmulas e Teses Jurídicas Fixadas:**  
   Uma sanfona explicativa com a jurisprudência que garante o direito (ex: Súmula 479 do STJ para bancos; Súmula 385 do STJ para negativação; Art. 14 do CDC para responsabilidade objetiva).

---

### 2.4 ARTIGOS E GUIAS PRÁTICOS (`ArticleLayout.astro` e MDX)
*Arquivo fonte:* `src/layouts/ArticleLayout.astro` e `src/content/artigos/*.mdx`

#### O que está excelente:
- Tipografia primorosa com `@fontsource-variable/dm-sans` e espaçamento editorial padrão Substack/Longform.
- Componentes MDX nativos de altíssima qualidade (`<CasoReal>`, `<Sumula>`, `<EvidenceGrid>`, `<DataTable>`, `<Callout>`).
- Recurso de leitura em voz alta (`window.speechSynthesis`) nativo no navegador.
- Controles de tamanho de fonte (`A-`, `A+`) com persistência em `localStorage`.
- Caixa de FAQ retrátil com marcação semântica Schema.org (`FAQPage`).
- Nota de transparência normativa no rodapé citando expressamente o Provimento CFOAB 205/2021.

#### Botões e Funções Esquecidas / Gaps:
1. **Barra de Progresso de Leitura (Scroll Progress):**  
   Em artigos longos de 10 a 15 minutos de leitura, falta uma linha sutil de progresso no topo da tela (`sticky`), indicando o percentual já lido.
2. **Botão "Imprimir / Salvar como PDF":**  
   Muitos consumidores que vão ao balcão de atermação do JEC precisam imprimir o artigo, o checklist de provas e as súmulas citadas para levar ao cartório do fórum. Um botão de impressão limpa (`window.print()` estilizado via `@media print`) é uma ferramenta de imensa utilidade pública.
3. **Botão "Copiar Modelo de Reclamação / Notificação":**  
   Nos artigos de cunho prático (ex: *Golpe do Pix nas primeiras 24 horas*), falta uma caixa com modelo de texto pronto para enviar ao banco ou ao SAC com botão de 1 clique *"Copiar Notificação"*.
4. **Seletor de Comarca no Box Lateral (`dadosComarca`):**  
   O card lateral hoje exibe dados fixos de Barueri. Permitir que o usuário escolha sua cidade via dropdown atualizaria instantaneamente os números da comarca selecionada.

---

### 2.5 ASSISTENTE DE TRIAGEM ("VERIFICAR MEU CASO" — `CaseWizard.astro`)
*Arquivo fonte:* `src/components/CaseWizard.astro`

#### O que está excelente:
- Modal em 3 etapas com transição suave, bloqueio de scroll da página de fundo (`cz-lock`) e suporte à tecla `Escape`.
- Validação dinâmica dos campos específicos por tipo de demanda (ex: valor transferido para Pix, nome da companhia aérea para voos, empresa para negativação).
- Tela final de revisão permitindo edição rápida de cada campo antes de enviar.

#### Gaps Técnicos e Funcionais Críticos:
1. **Conexão Real com a API do Backend:**  
   Atualmente, o script do wizard possui uma trava: se `PUBLIC_FORM_ENDPOINT` estiver vazio, ele gera um alerta no console e um protocolo fictício em memória.  
   **Ação:** Plugar o modal ao novo endpoint FastAPI criado: `POST http://localhost:8000/api/public/intake` (ou via Cloudflare Pages Function), que já possui validação de campos, proteção anti-spam por honeypot, mascaramento LGPD e emissão de protocolo oficial no SQLite.
2. **Campo Ausente: Tentativa Prévia no SAC / Consumidor.gov.br:**  
   Em qualquer processo no JEC, demonstrar que o consumidor tentou resolver administrativamente antes de ajuizar é o divisor de águas para obter indenização por **Desvio Produtivo do Consumidor**.  
   *Campos a acrescentar no Passo 2:*
   - *"Você já tentou resolver com a empresa?"* (Sim / Não)
   - *"Tem protocolo de SAC, Procon ou Consumidor.gov.br?"* (Input de texto opcional).
3. **Seletor de Comarca Conectado à Base:**  
   Atualmente, a cidade é um input de texto livre (`<input name="cidade">`). Deve ser substituído por um campo com autocompletar baseado nas 2.110 comarcas do `comarcas_consolidadas.json`.
4. **Informação sobre o Teto do Juizado:**  
   Adicionar no rodapé do formulário:  
   *"O Juizado Especial Cível atende causas de até 40 salários mínimos (R$ 56.480,00). Causas de até 20 salários mínimos não exigem assistência obrigatória de advogado."*

---

### 2.6 PÁGINAS INSTITUCIONAIS E DO AUTOR
*Arquivos fonte:* `src/pages/quem-somos.astro` e `src/pages/autor/andre-l-silva.astro`

#### O que está excelente:
- Estrutura de E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) do Google impecável.
- Foto profissional, biografia acadêmica detalhada (UNIP, PUC-PR, EPN, UMC), papéis editoriais claros (Análises vs. Guias).
- Menção explícita de e-mails para contato e encarregado de dados (LGPD).

#### Ajustes Necessários:
1. **Atualização da Amostragem:**  
   Atualizar a contagem textual de *"19.558 decisões"* para *"39.727 decisões em todo o Estado de São Paulo"*.
2. **Blindagem Jurídica no Perfil de André L. Silva:**  
   Inserir um callout de segurança regulatória no perfil:  
   *"Pesquisador em Jurimetria e Legal Analytics (Bacharel em Direito). Atuação estritamente analítica e estatística, sem exercício privativo da advocacia (Art. 1º da Lei Federal 8.906/1994). Eventual representação processual ocorre por advogados parceiros regularmente inscritos nos quadros da OAB."*

---

### 2.7 PÁGINA DE ÍNDICE DE ARTIGOS (`src/pages/artigos.astro`)
*Arquivo fonte:* `src/pages/artigos.astro`

#### O que está excelente:
- Lista limpa com vinhetas, tempo de leitura e data de publicação.

#### O que está faltando:
1. **Filtro por Categoria / Tema:**  
   A página lista todos os artigos em sequência única. Conforme o acervo de artigos crescer para as 15 verticais, será indispensável incluir uma barra de abas ou tags para filtrar por tema (*Bancos*, *Aéreo*, *Consumo*, etc.).
2. **Campo de Busca de Artigos:**  
   Falta uma barra de busca rápida no topo para encontrar artigos por palavra-chave (ex: "Súmula 479", "MED", "cancelamento de voo").
3. **Indicador de "Nível de Dificuldade / Rito":**  
   Um badge em cada artigo indicando: `Guia Rápido`, `Análise Profunda` ou `Passo a Passo Jurídico`.

---

## 3. CONSOLIDAÇÃO: MATRIZ DE ELEMENTOS E FUNÇÕES ESQUECIDAS

| Categoria | O que está faltando | Onde deve entrar | Impacto no Usuário / Negócio |
| :--- | :--- | :--- | :--- |
| **Sessão** | Bloco explicativo "Jus Postulandi vs. Advogado Credenciado" | Home (`index.astro`), seção "Como Funciona" | **Crítico (P0):** Elimina 100% de risco ético perante a OAB. |
| **Sessão** | Checklist Interativo de Provas | Hubs Temáticos (`/[tema]/index.astro`) | **Alto (P1):** Aumenta o tempo de permanência e a utilidade prática. |
| **Sessão** | Linha do Tempo Visual do Caso (StepFlow) | Hubs Temáticos e Artigos | **Alto (P1):** Reduz a ansiedade do consumidor mostrando o rito do JEC. |
| **Sessão** | Diretório Geral de Comarcas do TJSP | Nova rota `/comarcas/` | **Altíssimo (SEO Local):** Domina buscas por comarca no Google. |
| **Indicador** | Índice Global de Procedência (61,4%) e Dias Médios (112d) | Hero da Home e Cards de Temas | **Alto (P1):** Transforma números brutos em expectativa concreta. |
| **Indicador** | Badges de volume de decisões no Mega Menu | `Header.astro` | **Médio (P2):** Reforça autoridade jurimétrica no primeiro clique. |
| **Botão** | "Baixar / Imprimir Guia em PDF" | `ArticleLayout.astro` | **Alto (P1):** Utilidade para o consumidor que vai ao fórum. |
| **Botão** | "Copiar Modelo de Notificação Extrajudicial" | Artigos e Guia de Falsa Central | **Alto (P1):** Ação imediata anti-desvio produtivo. |
| **Função** | Conexão real com a API `/api/public/intake` | `CaseWizard.astro` | **Crítico (P0):** Captação de leads e triagem real com banco de dados. |
| **Função** | Autosuggest na Barra de Busca com termos leigos | `index.astro` e `Header.astro` | **Médio (P2):** Converte buscas leigas para a vertical correta. |

---

## 4. PROPOSTA DE 4 NOVAS FERRAMENTAS E PÁGINAS DE ALTO VALOR

### 4.1 Nova Rota: `/comarcas/` (O Mapa da Justiça no Estado de SP)
- **O que é:** Uma página com a listagem e filtro das 2.110 comarcas e foros de SP.
- **O que entrega ao usuário:** Ao clicar em sua cidade (ex: `/comarcas/barueri/`), o usuário vê:
  - Volume de ações do JEC analisadas na comarca.
  - Taxa de procedência local em comparação com a média estadual.
  - Tempo médio até a sentença naquela vara específica.
  - Endereço, telefone e horário de atendimento do Juizado Especial Cível local para atermação presencial.

### 4.2 Nova Rota: `/ferramentas/calculadora-prazos/`
- **O que é:** Uma ferramenta interativa simples em JavaScript onde o usuário escolhe o tipo de problema e insere a data do fato:
  - *Direito de Arrependimento de Compras Online:* 7 dias corridos (Art. 49 CDC).
  - *Mecanismo Especial de Devolução (MED Pix):* 80 dias da transferência (Resolução BCB 103/2021).
  - *Vício Aparente em Produto Não Durável:* 30 dias (Art. 26, I CDC).
  - *Vício Aparente em Produto Durável:* 90 dias (Art. 26, II CDC).
  - *Prescrição por Fato do Produto/Serviço (Dano Físico ou Financeiro):* 5 anos (Art. 27 CDC).
- **Resultado:** A calculadora informa com destaque: *"Seu prazo expira em DD/MM/AAAA (faltam X dias)"* e exibe um botão para relatar o caso.

### 4.3 Nova Rota: `/ferramentas/notificacao-extrajudicial/`
- **O que é:** Um formulário de 3 minutos para gerar uma carta formal de notificação prévia (em texto ou PDF para impressão).
- **Importância:** Os juízes do TJSP têm valorizado cada vez mais a comprovação de que o consumidor buscou resolver antes de judicializar. Essa ferramenta gera a prova perfeita para deferimento de Dano Moral por Desvio Produtivo.

### 4.4 Nova Rota: `/metodologia/`
- **O que é:** Documento de transparência jurimétrica explicando:
  - De onde vêm os dados (DJEN, diários e repositórios públicos do TJSP).
  - Como as decisões são anonimizadas em respeito à LGPD.
  - O que significa "Procedência", "Procedência em Parte" e "Improcedência".
  - Por que os dados refletem tendências históricas e não constituem garantia de resultado futuro (compliance Provimento 205/2021).

---

## 5. PLANO DE AÇÃO RECOMENDADO PARA A EQUIPE (PASSO A PASSO)

### Fase 1: Blindagem Ética e Atualização da Base (Imediato - P0)
1. **Substituir o texto da seção "Como Funciona" em `index.astro`:**  
   Remover a promessa de patrocínio direto e inserir a bifurcação ética (*Trilha Jus Postulandi vs. Advogado Especialista*).
2. **Atualizar `src/data/site.ts` e `src/data/temas.ts`:**  
   Substituir as constantes de 19.558 para as 39.727 decisões e importar os 15 temas canônicos a partir de `export_site/verticais.json`.

### Fase 2: Enriquecimento dos Templates e Hubs (P1)
1. Inserir nos cards de `[tema]/index.astro` os 3 KPIs reais do tema: `% Procedência`, `Dano Moral Médio` e `Prazo Médio em Dias`.
2. Adicionar o componente de *Checklist de Provas* em cada hub temático.
3. Adicionar o botão *Imprimir Guia / Salvar PDF* em `ArticleLayout.astro`.

### Fase 3: Integração Backend e Ferramentas (P2)
1. Conectar o `fetch()` de `CaseWizard.astro` com `/api/public/intake`.
2. Adicionar o campo opcional de protocolo administrativo (SAC/Consumidor.gov) no formulário do wizard.
3. Criar a página de `/comarcas/` aproveitando o `comarcas_consolidadas.json`.

---
*Relatório gerado automaticamente a partir da análise estática e dinâmica do repositório /home/sfy/projetos/defendame em execução na porta 4400.*
