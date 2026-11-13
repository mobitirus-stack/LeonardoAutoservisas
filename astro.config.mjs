// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: (process.env.SITE_URL || 'https://TODO_DOMAIN').replace(/\/$/, ''),
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: false,
  devToolbar: { enabled: false },
});
