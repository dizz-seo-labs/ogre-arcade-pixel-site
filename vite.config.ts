import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), UnoCSS()],
  server: { host: '0.0.0.0' },
  preview: { host: '0.0.0.0', allowedHosts: ['.trycloudflare.com', '.vercel.app', 'localhost'] }
});
