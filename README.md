# DefendaMe — defendame.online

Portal de conteúdo informativo sobre as demandas do Juizado Especial Cível (JEC), com jurimetria do TJSP.

**Stack:** [Astro 7](https://astro.build) (site 100% estático) · MDX para os artigos · CSS puro com variáveis · DM Sans hospedada no próprio site · zero framework de JavaScript.
Resultado: páginas leves, rápidas e com custo zero de hospedagem.

## Rodar no computador

```bash
npm install
npm run dev        # http://localhost:4321  (rascunhos aparecem)
npm run build      # gera o site final em dist/
npm run preview    # confere o dist/ como ficará no ar
```

Requer Node.js 22.12 ou superior.

## Publicar (custo zero)

**Cloudflare Pages:** Workers & Pages → Create → Pages → conectar o repositório do GitHub →
Framework preset **Astro** · Build command `npm run build` · Output `dist` · variável `NODE_VERSION=22`.

**Vercel:** New Project → importar o repositório → o preset Astro é detectado sozinho (`vercel.json` já incluso).

Depois, aponte o domínio `defendame.online` no painel da hospedagem.

### Formulário "Verificar meu caso"

O site é estático; o envio vai para um endereço externo definido na variável de ambiente
`PUBLIC_FORM_ENDPOINT` (veja `.env.example`). Opções gratuitas: Formspree, Web3Forms, um Cloudflare Worker
ou uma função da Vercel. Sem a variável, o formulário mostra a confirmação mas **não envia** (aviso no console).

## Criar um novo artigo

1. Copie `docs/modelo-artigo.mdx` para `src/content/artigos/<tema>-<assunto>.mdx`.
2. Preencha o cabeçalho (título, descrição, tema, slug, KPIs, FAQ, fontes).
3. Escreva em Markdown e use os componentes prontos (sem importar nada):
   `Quote`, `Cta`, `AdSlot`, `Figura`, `StepFlow`, `BarChart`, `DataTable`, `EvidenceGrid`, `ProofGrid`, `Callout`, `Parecer`, `Sumula`, `LeiaTambem`.
4. Deixe `rascunho: true` enquanto revisa; mude para `false` para publicar.
5. `npm run build` — se algum campo estiver errado, o build aponta o erro.

O artigo entra automaticamente na home, na página do tema, em /artigos/, no sitemap e nos dados estruturados do Google.

O padrão visual e editorial completo está em **`docs/GUIA-DE-ESTILO.md`** e na página **/guia-de-estilo/** (não indexada).

## Estrutura

```
src/
  content/artigos/      ← artigos (.mdx)
  data/temas.ts         ← os 14 temas (nome, ícone, volume de decisões)
  data/caseForms.ts     ← perguntas do formulário por demanda
  data/site.ts          ← nome, autor, links, e-mails
  components/           ← Header, Footer, Logo, Icon, CaseWizard, CookieBanner
  components/article/   ← componentes usados dentro dos artigos
  layouts/              ← BaseLayout (SEO), ArticleLayout, PageLayout
  pages/                ← home, /[tema]/, /[tema]/[slug]/, institucionais
  styles/global.css     ← todos os estilos e variáveis de cor
public/                 ← favicon, foto do autor, imagem de compartilhamento, robots.txt
```
