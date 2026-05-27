// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deploy targets:
//  - DEPLOY_TARGET=pages → GitHub Pages preview at rafetangorra-tech.github.io/clout-website
//  - default            → production site at cloutwmb.com
const isPages = process.env.DEPLOY_TARGET === 'pages';

// https://astro.build/config
export default defineConfig({
  site: isPages
    ? 'https://rafetangorra-tech.github.io'
    : 'https://cloutwmb.com',
  base: isPages ? '/clout-website' : '/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
