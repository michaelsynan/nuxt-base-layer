import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({

  
  
  
  "tailwindcss": {
    "config": {
      "theme": {
        "extend": {
          "colors": {
  "primary": {
    "light": "#9173a1",
    "DEFAULT": "#634772",
    "dark": "#381f46"
  },
  "secondary": {
    "light": "#a19073",
    "DEFAULT": "#726347",
    "dark": "#46391f"
  },
  "tertiary": {
    "light": "#74a190",
    "DEFAULT": "#477263",
    "dark": "#1c4639"
  }
}
        }
      }
    }
  },




  modules: [
    "@nuxtjs/tailwindcss",
    ['unplugin-icons/nuxt', { autoInstall: true }]
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      Components({
        resolvers: IconsResolver(),
      }),
      Icons(),
    ],
  },
  postcss: {
    plugins: {},
    autoprefixer: {},
  },
});
