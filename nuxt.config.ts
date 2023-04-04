import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ['unplugin-icons/nuxt', { autoInstall: true }]
  ],
                                                                tailwindcss: {
  config: {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#3B82F6"
          },
          secondary: {
            DEFAULT: "#9CA3AF"
          },
          tertiary: {
            DEFAULT: "#10B981"
          },
          dark: {
            DEFAULT: "#F3F4F6"
          },
          light: {
            DEFAULT: "#6B7280"
          }
        }
      }
    }
  }
}

,
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
