// plugins/vuetify.ts

// Importar iconos de Material Design
import '@mdi/font/css/materialdesignicons.css'

// Importar estilos de Vuetify
import 'vuetify/styles'

// Importar Vuetify y sus módulos
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components, // Registrar componentes globalmente
    directives, // Registrar directivas
    theme: {
      defaultTheme: 'light', // Puedes configurar el tema
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        }
      }
    }
  })

  // Usa Vuetify en la aplicación
  nuxtApp.vueApp.use(vuetify)
})
