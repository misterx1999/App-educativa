// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'] // Asegúrate de transpilar Vuetify
  },
  css: [
    'vuetify/styles', // Añadir los estilos de Vuetify
    '@mdi/font/css/materialdesignicons.css' // Material Design Icons (si se requiere)
  ],
  plugins: ['~/plugins/vuetify.ts'], // Registrar el plugin de Vuetify
  vite: {
    define: {
      'process.env.DEBUG': false // Evitar mensajes de debug innecesarios
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap' // Enlace para la fuente "Press Start 2P"
        }
      ]
    }
  }
})
