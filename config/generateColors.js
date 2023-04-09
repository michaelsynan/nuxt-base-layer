import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chroma from 'chroma-js';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to generate a random hex color
function randomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

// Function to generate light and dark variations of a color
function generateShades(color) {
  const light = chroma(color).brighten(1).hex();
  const dark = chroma(color).darken(1).hex();
  return { light, dark };
}

// Allow user to provide base color or pick a random color
const baseColor = process.argv[2] || randomHexColor();

const primary = baseColor;
const secondary = chroma(primary).set('hsl.h', '+120').hex();
const tertiary = chroma(primary).set('hsl.h', '-120').hex();

const primaryShades = generateShades(primary);
const secondaryShades = generateShades(secondary);
const tertiaryShades = generateShades(tertiary);

// Create a design token object
const designTokens = {
  primary: primary,
  primary_light: primaryShades.light,
  primary_dark: primaryShades.dark,
  secondary: secondary,
  secondary_light: secondaryShades.light,
  secondary_dark: secondaryShades.dark,
  tertiary: tertiary,
  tertiary_light: tertiaryShades.light,
  tertiary_dark: tertiaryShades.dark,
};

// Convert the design token object to YAML and save to a file
const yamlString = yaml.dump(designTokens);
const parentDir = path.resolve(__dirname, '..');
const outputFile = path.join(parentDir, 'design_tokens.yaml');
fs.writeFileSync(outputFile, yamlString);

console.log(`Design tokens saved to ${outputFile}`);
