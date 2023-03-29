module.exports = {
  "content": [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "DEFAULT": "#3B82F6",
          "text": "#FFFFFF",
          "faded": "rgba(255, 255, 255, 0.25)"
        },
        "secondary": {
          "DEFAULT": "#9CA3AF",
          "text": "#FFFFFF",
          "faded": "rgba(255, 255, 255, 0.25)"
        },
        "accent": {
          "DEFAULT": "#10B981",
          "text": "#FFFFFF",
          "faded": "rgba(255, 255, 255, 0.25)"
        },
        "background": {
          "DEFAULT": "#F3F4F6",
          "text": "#F3F4F6",
          "faded": "#F3F4F6"
        },
        "helper": {
          "DEFAULT": "#6B7280",
          "text": "#6B7280",
          "faded": "#6B7280"
        },
        "link": {
          "DEFAULT": "#3B82F6",
          "text": "#3B82F6",
          "faded": "#3B82F6"
        },
        "borderRadius": {
          "custom": "rounded-md"
        },
        "button": {
          "primary": "text-white bg-#3B82F6 hover:bg-#3B82F6 active:bg-#3B82F6",
          "secondary": "text-white bg-#9CA3AF hover:bg-#9CA3AF active:bg-#9CA3AF"
        }
      }
    }
  },
  "plugins": []
}