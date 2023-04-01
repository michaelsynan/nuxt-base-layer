import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss",
    ['unplugin-icons/nuxt', { autoInstall: true }]
  ],
    css: ['~/assets/css/main.css'],
    tailwindcss: {
      config: {
        theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#3B82F6',
              text: '#FFFFFF',
              faded: '#92B4FD',
            },
            secondary: {
              DEFAULT: '#9CA3AF',
              text: '#FFFFFF',
              faded: '#C4C9D4',
            },
            accent: {
              DEFAULT: '#10B981',
              text: '#FFFFFF',
              faded: '#6FD4B4',
            },    
            background: {
              DEFAULT: '#F3F4F6',
              text: '#F3F4F6',
              faded: '#F3F4F6',
            },
            helper: {
              DEFAULT: '#6B7280',
              text: '#6B7280',
              faded: '#6B7280',
            },
            link: {
              DEFAULT: '#3B82F6',
              text: '#3B82F6',
              faded: '#3B82F6',
            },
            borderRadius: {
              custom: 'rounded-md',
            },
            button: {
              primary: 'text-white bg-#3B82F6 hover:bg-#3B82F6 active:bg-#3B82F6',
              secondary: 'text-white bg-#9CA3AF hover:bg-#9CA3AF active:bg-#9CA3AF',
            },
          },
        },
      },
    },
      },
      vite: {
        plugins: [
            Components({
                resolvers: IconsResolver(),
            }),
            Icons(),
        ]
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      }, 
})
