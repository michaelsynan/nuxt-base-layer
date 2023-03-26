/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        secondary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #44124f, #5f176b, #7b1d86, #942698, #aa2e9f, #c732a1, #dc399e, #f14897, #ff5f8d, #ff7d81)',
        'gradient-secondary': 'linear-gradient(to right, #2c365e, #2a2e5e, #2d2149, #2e1935, #361a30, #471c35, #601d3f, #7a1e49, #961f53, #b11f5e)',
      },
      animation: {
        'slide': 'slide 1s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '500% 0' },
        },
      },
    },
  },
  plugins: [],
}
