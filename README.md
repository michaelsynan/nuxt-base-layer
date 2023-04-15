![GitHub last commit](https://img.shields.io/github/last-commit/michaelsynan/nuxt-base-layer)
![License: MOZ 2.0](https://img.shields.io/badge/license-MLP%202.0-green)

# Nuxt 3 Base Layer 🌈
A themable component library and Design System template for Nuxt. 

Documentation can be found on the [wiki](../../wiki).

## Features
- Component library
- Color palette tooling with [Chroma.js](https://github.com/gka/chroma.js)
- Design Token file generation
- Default responsive font size CSS classes

## Quickstart
Install and run developmenet sever:
```
npm install 
npm run dev
```
<br />

Generate color palette and add to ```nuxt.config.ts```:
```
node ./config/generateColors.js  
node ./config/addColors.js
```
<br />

Safelist custom classes in ```tailwind.config.js```:
```
  safelist: [
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
    {pattern: /(border|bg|text)-(primary|secondary|tertiary)-(light|dark)/,
    variants: ['hover', 'focus', 'active', 'disabled']},
  ],
```

The Color Palette generator uses Chroma.js to create the following colors for your theme:
- Primary 
- Primary light
- Primary dark
- Secondary
- Secondary light
- Secondary dark
- Tertiary 
- Tertiary light
- Tertiary dark

These colors are then inserted into `nuxt.config.ts` using `addColors.js`. 


You can now use primary, secondary, and tertiary colors with your TailwindCSS utility classes. 🎉

For full documentation, please visit the [wiki](../../wiki).
