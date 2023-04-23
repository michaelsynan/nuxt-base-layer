import chroma from 'chroma-js';

// Function to generate a random hex color
export function randomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

// Function to generate light and dark variations of a color
export function generateShades(color) {
  const light = chroma(color).brighten(1).hex();
  const dark = chroma(color).darken(1).hex();
  return { light, dark };
}