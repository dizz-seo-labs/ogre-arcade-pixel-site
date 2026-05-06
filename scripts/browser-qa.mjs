import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = 'http://127.0.0.1:4177';
const outDir = 'qa-artifacts';
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const checks = [];
for (const viewport of [
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'mobile', width: 390, height: 1200 }
]) {
  const page = await browser.newPage({ viewport });
  const consoleMessages = [];
  const failures = [];
  page.on('console', (msg) => { if (['error', 'warning'].includes(msg.type())) consoleMessages.push(`${msg.type()}: ${msg.text()}`); });
  page.on('requestfailed', (req) => failures.push(`${req.method()} ${req.url()} ${req.failure()?.errorText}`));
  const res = await page.goto(base + '/', { waitUntil: 'networkidle' });
  if (!res || res.status() !== 200) throw new Error(`Bad status for home ${viewport.name}`);
  const title = await page.title();
  if (!title.includes('Ogre Arcade')) throw new Error(`Bad title ${title}`);
  const cta = await page.locator('[data-affiliate-cta="hero"]').first().getAttribute('href');
  if (!cta?.includes('ogrearcade-to-tradeogre-signup')) throw new Error('CTA tracking id missing');
  await page.screenshot({ path: `${outDir}/home-${viewport.name}.png`, fullPage: true });
  checks.push({ viewport: viewport.name, title, consoleMessages, failures, screenshot: `${outDir}/home-${viewport.name}.png` });
  await page.close();
}
await browser.close();
console.log(JSON.stringify(checks, null, 2));
