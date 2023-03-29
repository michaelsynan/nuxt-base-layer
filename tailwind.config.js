module.exports = {
  "content": [
        "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": {
          "DEFAULT": "#3b82f6",
          "text": "text-white",
          "faded": "text-opacity-25 white"
        },
        "secondary": {
          "DEFAULT": "bg-gray-500",
          "text": "text-white",
          "faded": "text-opacity-25 white"
        },
        "accent": {
          "DEFAULT": "bg-green-500",
          "text": "text-white",
          "faded": "text-opacity-25 white"
        },
        "background": {
          "DEFAULT": "bg-gray-100",
          "text": "bg-gray-100",
          "faded": "bg-gray-100"
        },
        "helper": {
          "DEFAULT": "text-gray-500",
          "text": "text-gray-500",
          "faded": "text-gray-500"
        },
        "link": {
          "DEFAULT": "text-blue-500",
          "text": "text-blue-500",
          "faded": "text-blue-500"
        },
        "borderRadius": {
          "custom": "rounded-md"
        },
        "button": {
          "primary": "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
          "secondary": "text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700"
        }
      }
    }
  },
  "plugins": []
}