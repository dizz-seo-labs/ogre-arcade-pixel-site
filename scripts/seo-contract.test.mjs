import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const required = [
  'src/routes/+page.svelte',
  'src/routes/gem-hunter-guide/+page.svx',
  'src/routes/low-cap-arcade/+page.svx',
  'src/routes/privacy-coin-checklist/+page.svx',
  'src/routes/tradeogre-vs-big-exchanges/+page.svx',
  'static/robots.txt',
  'static/sitemap.xml',
  'static/favicon.ico',
  'static/favicon.svg',
  'static/apple-touch-icon.png',
  'static/site.webmanifest'
];

for (const file of required) {
  if (!existsSync(join(root, file))) throw new Error(`Missing ${file}`);
}

const allSource = [
  ...required.filter((f) => f.startsWith('src/')),
  'src/lib/site.ts',
  'src/routes/+layout.svelte'
]
  .map((f) => readFileSync(join(root, f), 'utf8'))
  .join('\n---FILE---\n');

const checks = [
  ['dashboard redirect present', 'https://dizz-seo-lab-dashboard.vercel.app/r?link=ogrearcade-to-tradeogre-signup'],
  ['affiliate rel present', 'rel="sponsored nofollow noopener noreferrer"'],
  ['disclosure present', 'independent'],
  ['domain canonical present', 'https://ogrearcade.top'],
  ['pixel design copy present', 'OGRE ARCADE'],
  ['forbidden guarantee absent', 'guaranteed profit'],
  ['forbidden official absent', 'official partner']
];

for (const [label, token] of checks) {
  const has = allSource.toLowerCase().includes(token.toLowerCase());
  if (label.includes('absent')) {
    if (has) throw new Error(`Forbidden token found: ${token}`);
  } else if (!has) {
    throw new Error(`Required token missing: ${token}`);
  }
}

const sitemap = readFileSync(join(root, 'static/sitemap.xml'), 'utf8');
for (const path of ['/', '/gem-hunter-guide/', '/low-cap-arcade/', '/privacy-coin-checklist/', '/tradeogre-vs-big-exchanges/']) {
  if (!sitemap.includes(`https://ogrearcade.top${path}`)) throw new Error(`Sitemap missing ${path}`);
}

console.log('SEO contract OK:', required.length, 'files checked');
