# Briefing Técnico — Projeto DefendaME

## O que é

DefendaME (`defendame.online`) é um portal de jornalismo jurídico-jurimétrico voltado ao consumidor brasileiro lesado. O produto editorial central são artigos e guias sobre as 14 demandas mais frequentes do Juizado Especial Cível (JEC/TJSP), construídos a partir de análise estatística de **39.727 decisões públicas do TJSP** (Tribunal de Justiça de São Paulo), cobrindo as 10 Regiões Administrativas do Estado.

## Diferencial técnico

O conteúdo não é opinativo — é jurimétrico. Cada artigo cita taxas reais de procedência, súmulas aplicáveis e padrões de decisão extraídos do banco de dados proprietário `sentencas_elite_v2.db` (SQLite WAL, Property Graph, embeddings pgvector). A base foi construída via scraping dos portais e-SAJ/CJSG e enriquecida com DNA de acórdão (resultado recursal, fundamentação, princípios jurídicos).

## Stack técnica

- **Frontend:** Astro 7.4.5, 100% estático, sem React
- **Fonte tipográfica:** DM Sans Variable
- **Design system:** tokens CSS próprios (teal `#12857e` / navy `#1d2939`), dark mode nativo
- **Build:** 32 páginas estáticas + sitemap
- **Deploy:** Cloudflare Pages — GitHub `smtfyweb/defendame`, branch `main`
- **Conformidade OAB:** Provimento CFOAB nº 205/2021 (sem promessa de resultado)

## As 14 verticais (demandas cobertas)

| Grupo | Demanda | Decisões | Procedência |
|---|---|---|---|
| Bancos e crédito | Golpe do Pix / Fraude bancária | 5.837 | 52,5% |
| Bancos e crédito | Negativação indevida (SPC/Serasa) | 5.966 | 64,8% |
| Bancos e crédito | Consignado fraudulento / INSS | 1.199 | 40,1% |
| Bancos e crédito | Cartão de crédito | 482 | 48,0% |
| Bancos e crédito | Superendividamento | 539 | 42,0% |
| Bancos e crédito | Protesto indevido | 381 | 58,0% |
| Serviços essenciais | Energia elétrica | 2.056 | 70,7% |
| Serviços essenciais | Telefonia e telecomunicações | 3.515 | 64,7% |
| Serviços essenciais | Planos de saúde | 2.525 | 70,7% |
| Viagens | Transporte aéreo | 4.848 | 72,7% |
| Viagens | Extravio e dano de bagagem | 310 | 68,0% |
| Compras e cotidiano | Compras online / rescisão | 3.175 | 70,4% |
| Compras e cotidiano | Acidente de trânsito | 1.953 | 69,3% |
| Compras e cotidiano | Dano moral e desvio produtivo | 6.346 | 61,4% |

**Taxa de procedência média geral: 61,4%**

## Perfil do André L. Silva

- **Função no projeto:** autor, especialista em jurimetria e fundador
- **Papel editorial:** assina as colunas de Análise (voz em 1ª pessoa, leitura dos dados); a Redação produz Guias (texto de serviço) com revisão técnica dele
- **Formação:** graduando em Direito (UNIP, 10º período); formações anteriores em PUC-PR, EPN, UMC
- **Perfil técnico:** desenvolvedor e fundador do ecossistema Sfy — constrói ferramentas de inteligência jurídica, processamento de dados TJSP e produtos LegalTech
- **Não é advogado em exercício** — o site opera estritamente dentro dos limites do Provimento 205/2021 (publicidade informativa, sem captação de clientela)

## Ecossistema Sfy

DefendaME é o produto de conteúdo/awareness do ecossistema Sfy:

- **SfyLegal** — motor IA jurídica; base de dados que alimenta os artigos (`sentencas_elite_v2.db`)
- **SfyRadar** — monitoramento JEC por CNPJ; alimentado pelos réus frequentes identificados no DefendaME
- **SfyBiz** — base empresarial CNPJ; enriquece o perfil dos réus

O projeto não tem fins políticos e é separado formalmente da candidatura a vereador de Barueri 2028.

## Repositório e deploy

- **GitHub:** `https://github.com/smtfyweb/defendame`
- **Cloudflare Pages:** `https://defendame.pages.dev`
- **Domínio produção:** `https://defendame.online`
- **Build command:** `npm run build`
- **Output:** `dist/`
- **Node:** 22
