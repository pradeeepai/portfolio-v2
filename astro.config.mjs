// @ts-check
import { defineConfig } from 'astro/config';

// The deploy workflow sets SITE_URL and BASE_PATH from the GitHub Pages settings.
// The defaults match the project page at https://pradeeepai.github.io/portfolio-v2/.
const base = process.env.BASE_PATH ?? '/portfolio-v2';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://pradeeepai.github.io',
  base: base || '/',
  build: {
    inlineStylesheets: 'always',
  },
});
