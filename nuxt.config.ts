// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  srcDir: 'src/',

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }, { charset: 'utf-8' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },

  modules: ['@nuxt/eslint', '@pinia/nuxt'],

  pinia: {},
})
