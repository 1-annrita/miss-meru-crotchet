/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'system',
//   },
// })

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#4B1D6E',    // deep purple
          secondary: '#C9A227',  // gold
          background: '#FBF6EE', // cream
          surface: '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#B58CE0',    // lighter purple so it's readable on dark
          secondary: '#E0B93F',  // brighter gold
          background: '#1A1022', // very dark purple
          surface: '#26172F',
        },
      },
    },
  },
})
