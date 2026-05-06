import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build', fallback: undefined, precompress: false, strict: true }),
    prerender: { entries: ['*'] }
  }
};

export default config;
