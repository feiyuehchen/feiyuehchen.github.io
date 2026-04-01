import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://feiyuehchen.github.io',
  base: '/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  build: {
    assets: '_astro',
  },
  devToolbar: {
    enabled: false,
  },
});
