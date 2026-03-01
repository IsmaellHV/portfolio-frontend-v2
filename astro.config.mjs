// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');
const site = env.PUBLIC_APP_URL?.trim() || undefined;
const integrations = site ? [sitemap()] : [];

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations,
});
