import {defineConfig} from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://seotecnico.co',
  output: 'static',
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
