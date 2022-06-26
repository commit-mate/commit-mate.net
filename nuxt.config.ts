import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: [
      {
        global: true,
        path: '~/components/Card',
        prefix: 'Card',
      },
      '~/components',
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
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
