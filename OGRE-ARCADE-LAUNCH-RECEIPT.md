# Ogre Arcade launch receipt — 2026-05-06

## Project

- Site: Ogre Arcade
- Offer: TradeOgre crypto exchange
- Selected domain: `ogrearcade.top`
- Stack: SvelteKit + `@sveltejs/adapter-static`, UnoCSS, MDsveX (`.svx` routes), self-hosted fonts via `@fontsource`
- Style: 8-bit Retro / Pixel Art

## Domain status

- `ogrearcade.top` availability checked via Regway API: available.
- Public Regway promo page lists `.top` at `$2.19` for first-year registration (under the requested ~3 EUR cap).
- Regway reseller/API price observed materially higher than the public promo/cart price, so automated API purchase was intentionally not executed to avoid exceeding the requested budget.
- Cloudflare zone created and Vercel DNS records configured; nameservers to use at registrar after purchase:
  - `ian.ns.cloudflare.com`
  - `zainab.ns.cloudflare.com`

## Cloudflare DNS records

- `A @ 76.76.21.21` — DNS-only
- `CNAME www cname.vercel-dns.com` — DNS-only

## Deployment

- Vercel project: `ogre-arcade-pixel-site`
- Production preview/live alias: `https://ogre-arcade-pixel-site.vercel.app/`
- Custom domains attached in Vercel:
  - `ogrearcade.top`
  - `www.ogrearcade.top`
- Custom domain public DNS is pending until the domain is purchased and delegated to Cloudflare nameservers.

## Dashboard

- Dashboard registry updated: `https://dizz-seo-lab-dashboard.vercel.app/seo-registry.json`
- Tracking ID: `ogrearcade-to-tradeogre-signup`
- Dashboard redirect: `https://dizz-seo-lab-dashboard.vercel.app/r?link=ogrearcade-to-tradeogre-signup`
- Redirect Location verified as the TradeOgre sponsored URL only; external `tradeogre.uk` was not crawled/audited.
- `approvedForIndexing: false` until custom domain resolves and HTTPS/readiness is green.

## QA

- `npm test`: pass
- `npm run build`: pass
- Local HTTP checks: `/`, content pages, `robots.txt`, `sitemap.xml`, `favicon.svg` pass
- Playwright no-sandbox browser QA: desktop + mobile pass, no console errors, no request failures
- Visual review: coherent 8-bit/pixel-art crypto microsite; no obvious clipping/overlap

## Source preservation

- Site repo: `https://github.com/dizz-seo-labs/ogre-arcade-pixel-site`
- Initial commit: `cc774f2`
- Dashboard registry commit pushed after rebase: `02b4da3`
