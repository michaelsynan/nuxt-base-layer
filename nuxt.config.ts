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
    "light": "#b185ff",
    "DEFAULT": "#7b57ed",
    "dark": "#432bba"
  },
  "secondary": {
    "light": "#ffac84",
    "DEFAULT": "#ed7b57",
    "dark": "#b64c2c"
  },
  "tertiary": {
    "light": "#90ffac",
    "DEFAULT": "#57ed7b",
    "dark": "#00b94c"
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
