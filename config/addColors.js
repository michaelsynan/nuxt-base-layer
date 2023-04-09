import fs from 'fs';
import yaml from 'js-yaml';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'url';

async function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (response) => {
      rl.close();
      resolve(response);
    })
  );
}

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const parentDir = path.resolve(currentDir, '..');
const designTokensPath = path.join(parentDir, 'design_tokens.yaml');

const nuxtConfigJsPath = path.join(parentDir, 'nuxt.config.js');
const nuxtConfigTsPath = path.join(parentDir, 'nuxt.config.ts');

const nuxtConfigPath =
  fs.existsSync(nuxtConfigJsPath) ? nuxtConfigJsPath : nuxtConfigTsPath;

const designTokens = yaml.load(fs.readFileSync(designTokensPath, 'utf8'));

const tailwindColors = {
  primary: {
    light: designTokens.primary_light,
    DEFAULT: designTokens.primary,
    dark: designTokens.primary_dark,
  },
  secondary: {
    light: designTokens.secondary_light,
    DEFAULT: designTokens.secondary,
    dark: designTokens.secondary_dark,
  },
  tertiary: {
    light: designTokens.tertiary_light,
    DEFAULT: designTokens.tertiary,
    dark: designTokens.tertiary_dark,
  },
};

const tailwindConfigStr = `
  "tailwindcss": {
    "config": {
      "theme": {
        "extend": {
          "colors": ${JSON.stringify(tailwindColors, null, 2)}
        }
      }
    }
  },
`;

(async () => {
  let nuxtConfigContent = fs.readFileSync(nuxtConfigPath, 'utf-8');

  if (nuxtConfigContent.includes('"tailwindcss"')) {
    const response = await askQuestion(
      'Replace the existing tailwindcss configuration in nuxt.config? (yes/no): '
    );

    if (response.toLowerCase() !== 'yes') {
      console.log('Aborted. No changes were made to the nuxt.config file.');
      return;
    } else {
      const tailwindStartIndex = nuxtConfigContent.indexOf('"tailwindcss"');
      let bracketCounter = 0;
      let tailwindEndIndex = tailwindStartIndex;

      while (tailwindEndIndex < nuxtConfigContent.length) {
        const currentChar = nuxtConfigContent.charAt(tailwindEndIndex);
        if (currentChar === '{') {
          bracketCounter++;
        } else if (currentChar === '}') {
          bracketCounter--;

          if (bracketCounter === 0) {
            break;
          }
        }
        tailwindEndIndex++;
      }

      // Find the index of the extra comma
      const extraCommaIndex = nuxtConfigContent.indexOf(',', tailwindEndIndex + 1);

      nuxtConfigContent =
        nuxtConfigContent.slice(0, tailwindStartIndex) +
        tailwindConfigStr +
        nuxtConfigContent.slice(tailwindEndIndex + 1, extraCommaIndex) +
        nuxtConfigContent.slice(extraCommaIndex + 1);

    }
  } else {
    const insertPosition =
      nuxtConfigContent.indexOf('defineNuxtConfig({') + 'defineNuxtConfig({'.length;
      nuxtConfigContent =
      nuxtConfigContent.slice(0, insertPosition) +
      '\n' +
      tailwindConfigStr +
      nuxtConfigContent.slice(insertPosition);
  }

  fs.writeFileSync(nuxtConfigPath, nuxtConfigContent);

  console.log(`Tailwind CSS configuration saved to ${nuxtConfigPath}`);
})();