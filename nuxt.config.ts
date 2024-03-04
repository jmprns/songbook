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
    '@vee-validate/nuxt',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  device: {
    refreshOnResize: true
  },
  vuetify: vuetify,
  pwa: pwa,
  pinia: pinia,
  runtimeConfig: {
    public: {
      appName: '',
      appUrl: '',
      apiUrl: ''
    }
  },
  veeValidate: {
    autoImports: true
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  app: {
    baseURL: '/songbook'
  }
})
