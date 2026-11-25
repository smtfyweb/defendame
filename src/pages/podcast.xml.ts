import type { APIRoute } from 'astro';
import { PODCAST_INFO, EPISODIOS_PODCAST } from '../data/podcasts';

export const GET: APIRoute = async () => {
  const agora = new Date().toUTCString();

  const itensXml = EPISODIOS_PODCAST.map((ep) => {
    const epUrl = `${PODCAST_INFO.siteUrl}/${ep.tema}/`;
    const audioAbsUrl = `${PODCAST_INFO.siteUrl}${ep.audioUrl}`;
    const pubDate = ep.dataPublicacao.toUTCString();

    return `
    <item>
      <title><![CDATA[${ep.titulo}]]></title>
      <itunes:title><![CDATA[${ep.titulo}]]></itunes:title>
      <itunes:episode>${ep.numero}</itunes:episode>
      <itunes:season>1</itunes:season>
      <itunes:episodeType>full</itunes:episodeType>
      <description><![CDATA[${ep.descricao}]]></description>
      <itunes:summary><![CDATA[${ep.subtitulo}]]></itunes:summary>
      <link>${epUrl}</link>
      <guid isPermaLink="false">${ep.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioAbsUrl}" length="${ep.arquivoBytes}" type="audio/mpeg" />
      <itunes:duration>${ep.duracaoFormatada}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
      <itunes:author><![CDATA[${PODCAST_INFO.autor}]]></itunes:author>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" 
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title><![CDATA[${PODCAST_INFO.titulo}]]></title>
    <link>${PODCAST_INFO.siteUrl}</link>
    <language>${PODCAST_INFO.linguagem}</language>
    <copyright><![CDATA[Copyright © ${new Date().getFullYear()} DefendaMe]]></copyright>
    <itunes:subtitle><![CDATA[${PODCAST_INFO.subtitulo}]]></itunes:subtitle>
    <itunes:author><![CDATA[${PODCAST_INFO.autor}]]></itunes:author>
    <itunes:summary><![CDATA[${PODCAST_INFO.descricao}]]></itunes:summary>
    <description><![CDATA[${PODCAST_INFO.descricao}]]></description>
    <itunes:owner>
      <itunes:name><![CDATA[${PODCAST_INFO.autor}]]></itunes:name>
      <itunes:email>${PODCAST_INFO.email}</itunes:email>
    </itunes:owner>
    <itunes:image href="${PODCAST_INFO.imagem}" />
    <itunes:category text="${PODCAST_INFO.categoria}">
      <itunes:category text="${PODCAST_INFO.subcategoria}" />
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    <lastBuildDate>${agora}</lastBuildDate>
    ${itensXml}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
