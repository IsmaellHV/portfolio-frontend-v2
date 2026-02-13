// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { ENVIRONMENT } from './src/env/index.ts';

const site = ENVIRONMENT.APP.URL.trim() || undefined;
const integrations = site ? [sitemap()] : [];

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations,
});
