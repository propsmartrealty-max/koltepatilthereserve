#!/usr/bin/env node

/**
 * Antigravity RSS 2.0 & Atom Feed Generator
 * Generates public/rss.xml and public/feed.xml for Google Discover & News Crawlers
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://thereserve.koltepatil.digital';
const CONTENT_DIRS = [
  { dir: 'src/content/guides', pathPrefix: 'guides' },
  { dir: 'src/content/insights', pathPrefix: 'insights' },
  { dir: 'src/content/compare', pathPrefix: 'compare' },
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function getAllArticles() {
  const articles = [];
  for (const { dir, pathPrefix } of CONTENT_DIRS) {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir).filter((f) => f.endsWith('.mdx'));
    for (const file of files) {
      const filePath = path.join(fullDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(raw);
      const slug = file.replace(/\.mdx$/, '');
      articles.push({
        title: data.title,
        excerpt: data.excerpt || '',
        date: data.date ? new Date(data.date) : new Date(),
        url: `${BASE_URL}/${pathPrefix}/${slug}`,
        category: data.category || 'Real Estate',
      });
    }
  }

  return articles.sort((a, b) => b.date.getTime() - a.date.getTime());
}

function buildRssXml(articles) {
  const itemsXml = articles
    .map((art) => `
    <item>
      <title>${escapeXml(art.title)}</title>
      <link>${art.url}</link>
      <guid isPermaLink="true">${art.url}</guid>
      <description>${escapeXml(art.excerpt)}</description>
      <category>${escapeXml(art.category)}</category>
      <pubDate>${art.date.toUTCString()}</pubDate>
      <author>sales@koltepatil.com (Kolte-Patil Research Desk)</author>
    </item>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Reserve by Kolte Patil | Pune Real Estate Journal</title>
    <link>${BASE_URL}</link>
    <description>Official market intelligence, buyer guides, and infrastructure updates for The Reserve, Sinhgad Road, Pune. MahaRERA PM1261012600748.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;
}

const articles = getAllArticles();
const rssXml = buildRssXml(articles);

fs.writeFileSync(path.join(process.cwd(), 'public/rss.xml'), rssXml);
fs.writeFileSync(path.join(process.cwd(), 'public/feed.xml'), rssXml);

console.log(`[RSS Generator] Successfully generated public/rss.xml and public/feed.xml with ${articles.length} publications.`);
