import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TEMA_SLUGS } from './data/temas';

// Cada artigo é um arquivo .mdx em src/content/artigos/
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/artigos' }),
  schema: z.object({
    titulo: z.string(),                       // H1 do artigo
    seoTitle: z.string().optional(),          // <title> (se diferente do H1)
    descricao: z.string(),                    // meta description (até ~160 caracteres)
    linhaFina: z.string(),                    // subtítulo abaixo do H1 (aceita **negrito**)
    vinheta: z.string(),                      // chapéu acima do título
    // 'analise' = coluna assinada por André L. Silva, em 1ª pessoa (opinião + dados)
    // 'guia'    = texto de serviço da Redação DefendaMe, com revisão técnica de André L. Silva
    formato: z.enum(['analise', 'guia']).default('analise'),
    tema: z.enum(TEMA_SLUGS as [string, ...string[]]),
    slug: z.string(),                         // URL final: /<tema>/<slug>
    publicado: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    leitura: z.number().default(10),          // minutos
    destaque: z.boolean().default(false),     // aparece como destaque na home
    rascunho: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    palavrasChave: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    kpis: z.array(z.object({ valor: z.string(), rotulo: z.string(), destaque: z.boolean().optional() })).default([]),
    kpiNota: z.string().optional(),
    dadosComarca: z.object({
      titulo: z.string(), subtitulo: z.string(),
      linhas: z.array(z.object({ rotulo: z.string(), valor: z.string(), tom: z.enum(['normal', 'bom', 'alerta']).default('normal') })),
    }).optional(),
    faq: z.array(z.object({ pergunta: z.string(), resposta: z.string() })).default([]),
    fontes: z.array(z.object({ nome: z.string(), descricao: z.string().optional(), url: z.string().optional() })).default([]),
    relacionados: z.array(z.string()).default([]),   // slugs de temas para "Leia também"
  }),
});

export const collections = { artigos };
