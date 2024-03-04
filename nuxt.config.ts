// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "./config/vuetify";
import pwa from './config/pwa'
import pinia from "./config/pinia";
export default defineNuxtConfig({
  ssr: false,
  buildAssetsDir: 'assets',
  devtools: { enabled: false },
  modules: [
    '@nuxt/devtools',
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/device',
  ],
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  device: {
    refreshOnResize: true
  },
  vuetify: vuetify,
  pinia: pinia,
  app: {
    baseURL: '/songbook/'
  }
})
