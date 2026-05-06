<script lang="ts">
  import { SITE, nav } from '$lib/site';
</script>

<svelte:head>
  <meta name="theme-color" content="#000000" />
  <meta name="color-scheme" content="dark" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="min-h-screen bg-nesBlack text-nesWhite scanline">
  <div class="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_10%,#0058f8_0_2px,transparent_3px),radial-gradient(circle_at_80%_30%,#00b800_0_2px,transparent_3px),radial-gradient(circle_at_40%_80%,#a80020_0_2px,transparent_3px)] bg-[length:80px_80px]"></div>
  <header class="relative z-10 border-b-4 border-nesWhite bg-nesBlack/95">
    <div class="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <a class="flex items-center gap-3" href="/" aria-label="{SITE.name} home">
        <span class="h-10 w-10 grid place-items-center border-4 border-nesWhite bg-nesGreen text-nesBlack font-pixel text-xs shadow-[4px_4px_0_#a80020]">OG</span>
        <span class="font-pixel text-sm md:text-base text-nesWhite">{SITE.name}</span>
      </a>
      <nav class="flex flex-wrap gap-2 text-xl font-arcade" aria-label="Main navigation">
        {#each nav as item}
          <a class="border-2 border-nesWhite px-3 py-1 bg-nesBlack hover:bg-nesBlue focus:bg-nesBlue focus:outline-none" href={item.href}>{item.label}</a>
        {/each}
      </nav>
    </div>
  </header>

  <main class="relative z-10">
    <slot />
  </main>

  <footer class="relative z-10 border-t-4 border-nesWhite bg-nesBlack">
    <div class="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-[1.2fr_.8fr]">
      <div>
        <p class="font-pixel text-sm text-nesGreen">INSERT COIN // READ BEFORE TRADING</p>
        <p class="mt-4 text-2xl font-arcade leading-7 text-nesWhite/90">Independent educational microsite. Not owned by, operated by, or officially affiliated with TradeOgre. Crypto trading is risky; use small test amounts and your own research.</p>
      </div>
      <div class="pixel-card p-5">
        <p class="font-pixel text-xs text-nesAmber">SPONSORED EXIT PORTAL</p>
        <a class="pixel-button mt-4 w-full font-pixel text-xs" href={SITE.ctaUrl} rel="sponsored nofollow noopener noreferrer" target="_blank" data-affiliate-cta="footer">Start at TradeOgre</a>
      </div>
    </div>
  </footer>
</div>
