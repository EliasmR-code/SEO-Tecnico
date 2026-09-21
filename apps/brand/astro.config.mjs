import {defineConfig} from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://seotecnico.co',
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'fr', 'de', 'nl', 'pl'],
    defaultLocale: 'en',

    routing: {
      prefixDefaultLocale: true,
    },
  },
})
