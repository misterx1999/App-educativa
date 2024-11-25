// nuxt.config.ts
export default defineNuxtConfig({
  // Asegúrate de que este módulo esté aquí
  modules: ['@pinia/nuxt'],

  build: {
    transpile: ['vuetify'],
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css',
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
        },
      ],
    },
  },

  compatibilityDate: '2024-11-20',
});