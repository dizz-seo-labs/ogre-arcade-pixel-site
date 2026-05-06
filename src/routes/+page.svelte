<script lang="ts">
  import { SITE } from '$lib/site';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@type': 'Organization', name: 'Ogre Arcade Editorial Desk' },
    potentialAction: {
      '@type': 'ReadAction',
      target: [`${SITE.url}/gem-hunter-guide/`, `${SITE.url}/privacy-coin-checklist/`]
    }
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Is Ogre Arcade TradeOgre?', acceptedAnswer: { '@type': 'Answer', text: 'No. Ogre Arcade is an independent educational microsite with a sponsored referral link to TradeOgre.' } },
      { '@type': 'Question', name: 'Who is this site for?', acceptedAnswer: { '@type': 'Answer', text: 'It is written for low-cap crypto researchers, privacy-coin watchers, and nostalgic arcade-style gem hunters who want a compact checklist before using smaller exchanges.' } }
    ]
  };
</script>

<svelte:head>
  <title>Ogre Arcade — 8-bit TradeOgre gem-hunting guide</title>
  <meta name="description" content={SITE.description} />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <link rel="canonical" href={`${SITE.url}/`} />
  <meta property="og:title" content="Ogre Arcade — 8-bit TradeOgre guide" />
  <meta property="og:description" content="Pixel-art low-cap crypto exchange field guide for TradeOgre-style gem hunters." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE.url}/`} />
  <script type="application/ld+json">{JSON.stringify(schema)}</script>
  <script type="application/ld+json">{JSON.stringify(faq)}</script>
</svelte:head>

<section class="mx-auto max-w-6xl px-4 py-12 md:py-18 grid gap-10 lg:grid-cols-[1.15fr_.85fr] items-center">
  <div>
    <p class="font-pixel text-xs text-nesGreen">WORLD 1-1 // LOW-CAP EXCHANGE MAP</p>
    <h1 class="pixel-title mt-5 text-[clamp(2rem,7vw,5rem)] text-nesWhite drop-shadow-[6px_6px_0_#0058f8]">OGRE ARCADE</h1>
    <p class="mt-6 max-w-3xl text-3xl md:text-4xl font-arcade text-nesWhite/90">A pixel-art field guide for crypto old-schoolers hunting small exchange listings, privacy-coin routes, and TradeOgre-style markets without pretending the boss fight is risk-free.</p>
    <div class="mt-8 flex flex-wrap gap-4">
      <a class="pixel-button font-pixel text-xs" href={SITE.ctaUrl} rel="sponsored nofollow noopener noreferrer" target="_blank" data-affiliate-cta="hero">▶ Start at TradeOgre</a>
      <a class="pixel-button-red font-pixel text-xs" href="/gem-hunter-guide/">Read checklist</a>
    </div>
    <p class="mt-5 text-xl text-nesAmber font-arcade">Sponsored link disclosed. Independent guide. No official affiliation. No profit promises.</p>
  </div>
  <div class="pixel-card p-5 md:p-8 floaty" aria-label="Pixel arcade exchange status card">
    <div class="flex items-center gap-4">
      <div class="coin-sprite"></div>
      <div>
        <p class="font-pixel text-xs text-nesAmber">PLAYER: GEM_HUNTER</p>
        <p class="font-arcade text-3xl text-nesWhite">Quest log loaded</p>
      </div>
    </div>
    <div class="mt-8 grid gap-5">
      <div class="pixel-progress"><p class="font-pixel text-xs text-nesGreen">Nostalgia Meter</p><span></span></div>
      <div class="pixel-progress"><p class="font-pixel text-xs text-nesBlue">Low-Cap Discovery</p><span class="blue"></span></div>
      <div class="pixel-progress"><p class="font-pixel text-xs text-nesRed">Risk Boss HP</p><span class="red"></span></div>
    </div>
    <pre class="mt-8 overflow-x-auto border-4 border-nesWhite bg-nesBlack p-4 text-nesGreen text-xl leading-6"><code>SELECT WORLD:
[1] Gem hunter guide
[2] Privacy coin checklist
[3] Compare big CEX routes
[4] Sponsored signup portal <span class="blink">█</span></code></pre>
  </div>
</section>

<section class="border-y-4 border-nesWhite bg-nesBlue/60">
  <div class="mx-auto max-w-6xl px-4 py-10 grid gap-4 md:grid-cols-4">
    {#each [
      ['5', 'crawlable static pages'],
      ['8-bit', 'NES-inspired visual system'],
      ['0', 'fake official claims'],
      ['1', 'sponsored CTA path']
    ] as stat}
      <div class="pixel-card p-5">
        <p class="font-pixel text-3xl text-nesGreen">{stat[0]}</p>
        <p class="mt-3 font-arcade text-2xl">{stat[1]}</p>
      </div>
    {/each}
  </div>
</section>

<section class="mx-auto max-w-6xl px-4 py-14 grid gap-6 md:grid-cols-3">
  <article class="pixel-card p-6">
    <p class="font-pixel text-xs text-nesGreen">LEVEL 01</p>
    <h2 class="mt-4 pixel-title text-xl text-nesWhite">Gem-hunter mode</h2>
    <p class="mt-4 text-2xl text-nesWhite/85">Learn how smaller crypto exchanges differ from giant app-style CEXs: thinner books, niche listings, and higher operational friction.</p>
    <a class="mt-5 inline-block text-nesAmber underline" href="/gem-hunter-guide/">Open level →</a>
  </article>
  <article class="pixel-card p-6">
    <p class="font-pixel text-xs text-nesGreen">LEVEL 02</p>
    <h2 class="mt-4 pixel-title text-xl text-nesWhite">Privacy coin map</h2>
    <p class="mt-4 text-2xl text-nesWhite/85">Use a practical checklist for Monero-adjacent and privacy-coin research without making anonymity or bypass claims.</p>
    <a class="mt-5 inline-block text-nesAmber underline" href="/privacy-coin-checklist/">Open level →</a>
  </article>
  <article class="pixel-card p-6">
    <p class="font-pixel text-xs text-nesGreen">LEVEL 03</p>
    <h2 class="mt-4 pixel-title text-xl text-nesWhite">Big CEX contrast</h2>
    <p class="mt-4 text-2xl text-nesWhite/85">Compare the arcade-cabinet niche-exchange experience with polished mega-exchange onboarding and liquidity.</p>
    <a class="mt-5 inline-block text-nesAmber underline" href="/tradeogre-vs-big-exchanges/">Open level →</a>
  </article>
</section>

<section class="mx-auto max-w-6xl px-4 pb-16">
  <div class="pixel-card p-6 md:p-8 bg-nesRed/80">
    <p class="font-pixel text-xs text-nesAmber">BOSS WARNING</p>
    <h2 class="pixel-title mt-4 text-2xl md:text-3xl">Small exchange research is not a cheat code</h2>
    <p class="mt-5 text-3xl font-arcade text-nesWhite/90">Start with small tests, verify withdrawal paths, check market depth, and never treat a sponsored link as investment advice.</p>
    <a class="pixel-button mt-6 font-pixel text-xs" href={SITE.ctaUrl} rel="sponsored nofollow noopener noreferrer" target="_blank" data-affiliate-cta="boss-warning">Continue to sponsored signup</a>
  </div>
</section>
