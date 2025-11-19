import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://terminaltraces.github.io',
  integrations: [react(), mdx(), tailwind()],
  markdown: {
    syntaxHighlight: 'shiki',
  },
});