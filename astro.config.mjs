// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Site 100% estático: roda em Vercel, Cloudflare Pages, Netlify ou qualquer hospedagem de arquivos.
export default defineConfig({
  site: 'https://smtfyweb.github.io',
  base: '/defendame',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/guia-de-estilo') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
