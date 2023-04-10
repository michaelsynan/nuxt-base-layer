![GitHub last commit](https://img.shields.io/github/last-commit/michaelsynan/nuxt-base-layer)
![License: MOZ 2.0](https://img.shields.io/badge/license-MLP%202.0-green)

# Nuxt 3 Base Layer 🌈
A themable component library and Design System template for Nuxt. 

Documentation can be found on the [wiki](../../wiki).

## Features
- Color palette tooling with [Chroma.js](https://github.com/gka/chroma.js)
- Design Token file generation
- Default responsive font size classes 

## Usage
Install and run developmenet sever:
```
npm install 
npm run dev
```

Generate color palette and add to ```nuxt.config.ts```:
```
node ./config/generateColors.js  
node ./config/addColors.js
```

Safelist custom classes in ```tailwind.config.js```:
```
  safelist: [
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)-(light|dark)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
]
```
