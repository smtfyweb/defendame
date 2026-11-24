// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Site 100% estático hospedado no Cloudflare Pages.
export default defineConfig({
  site: 'https://defendame.online',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/guia-de-estilo') })],
  build: { inlineStylesheets: 'auto' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
