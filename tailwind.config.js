module.exports = {
  safelist: [
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)-(light|dark)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
],
  "content": [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  "plugins": []
}
