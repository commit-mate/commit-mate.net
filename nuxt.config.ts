import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'node:url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['./modules/dynamic-component/nuxt', {
      dirs: [
        {
          path: fileURLToPath(new URL('./components/Card', import.meta.url)),
          global: true,
          prefix: 'Card',
        },
      ],
    }],
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: '',
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle'],
    },
  }
})
