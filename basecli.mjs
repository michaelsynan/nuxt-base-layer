import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { exec } from 'child_process';
import { promisify } from 'util';

const program = new Command();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';



function parsePaletteOutput(output) {
  const lines = output.trim().split('\n');
  const colors = {};
  lines.forEach((line) => {
    const [label, color] = line.split(':').map((s) => s.trim());
    colors[label.toLowerCase()] = color;
  });
  return colors;
}

async function getPaletteColors() {
  const configPath = path.join(process.cwd(), 'basecli.config.mjs');

  try {
    const config = await import(configPath);
    return config.default;
  } catch (error) {
    console.error('Error reading config files:', error);
    return {};
  }
}

function findMatchingBrace(str, startIndex) {
  let braceStack = [];

  for (let i = startIndex; i < str.length; i++) {
    if (str[i] === '{') {
      braceStack.push('{');
    } else if (str[i] === '}') {
      braceStack.pop();
      if (braceStack.length === 0) {
        return i;
      }
    }
  }

  return -1;
}

// generate a color palette
export async function generatePalette() {
  const options = {
    hostname: 'colormind.io',
    path: '/api/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const data = JSON.stringify({
    model: 'default',
  });

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let response = '';
      res.on('data', (chunk) => {
        response += chunk;
      });
      res.on('end', () => {
        const responseData = JSON.parse(response);

        const colors = responseData.result.map((c) => {
          const [r, g, b] = c;
          return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
        });

        resolve(colors);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

program
  .command('init')
  .description('Initialize the config file')
  .option('-o, --output <outputFile>', 'Specify output file', 'basecli.config.mjs')
  .option('-p, --primary <color>', 'Specify primary color', '#3B82F6')
  .option('-s, --secondary <color>', 'Specify secondary color',  '#9CA3AF')
  .option('-s-t, --tertiary <color>', 'Specify tertiary color', '#10B981')
  .option('-a, --dark <color>', 'Specify dark color', '#F3F4F6')
  .option('-a-t, --light <color>', 'Specify light color', '#6B7280')
  .action(async (cmd) => {
    const configPath = path.join(process.cwd(), cmd.output);

    try {
      await fs.promises.access(configPath);
      const paletteColors = await getPaletteColors();
      console.log('Existing color palette:');
      console.table(paletteColors);
    } catch (error) {
      console.log('No existing color palette found. Creating a new one...');

      cmd.primary = cmd.primary;
      cmd.secondary = cmd.secondary;
      cmd.tertiary = cmd.tertiary;
      cmd.dark = cmd.dark;
      cmd.light = cmd.light;

      const data = `
        export default {
          primaryColor: {
            bg: '${cmd.primary}',
          },
          secondaryColor: {
            bg: '${cmd.secondary}',
          },
          tertiaryColor: {
            bg: '${cmd.tertiary}',
          },
          darkColor: {
            bg: '${cmd.dark}',
          },
          lightColor: {
            bg: '${cmd.light}',
          },
        };
      `;

      try {
        await fs.promises.writeFile(configPath, data, 'utf-8');
        console.log(`Config file created at ${configPath}`);
      } catch (error) {
        console.error('Error creating config file:', error);
      }
    }
  });
// ...
program
  .command('update')
  .description('Update the default Tailwind config in nuxt.config.ts')
  .action(async () => {
    try {
      // Call the generatePalette() function and store the returned colors
      const colors = await generatePalette();
      const [primary, secondary, tertiary, dark, light] = colors;

      const basecliConfigPath = path.join(process.cwd(), 'basecli.config.mjs');
      const nuxtConfigPath = path.join(process.cwd(), 'nuxt.config.ts');

      const generatedConfig = {
        config: {
          theme: {
            extend: {
              colors: {
                primary: {
                  DEFAULT: primary,
                },
                secondary: {
                  DEFAULT: secondary,
                },
                tertiary: {
                  DEFAULT: tertiary,
                },
                dark: {
                  DEFAULT: dark,
                },
                light: {
                  DEFAULT: light,
                },
              },
            },
          },
        },
      };


      // Read the nuxt.config.ts file
      const nuxtConfigContent = await fs.promises.readFile(nuxtConfigPath, 'utf-8');

      // Use a regular expression to find the top-level tailwindcss configuration section
      const regex = /tailwindcss\s*:\s*\{/;
      const tailwindcssIndex = nuxtConfigContent.search(regex);
      if (tailwindcssIndex === -1) {
        console.error('Could not find top-level tailwindcss configuration in nuxt.config.ts. Please make sure to add the config section.');
        return;
      }

      // Get the indentation of the tailwindcss configuration section
      const indent = nuxtConfigContent.slice(0, tailwindcssIndex).match(/[ \t]*$/)[0];

      // Find the end of the tailwindcss configuration section
      const tailwindcssEndIndex = findMatchingBrace(nuxtConfigContent, tailwindcssIndex);

      // Insert the generated config into the tailwindcss configuration section
      const tailwindcssContent = nuxtConfigContent.slice(tailwindcssIndex, tailwindcssEndIndex);
      const updatedTailwindcssContent = `${indent}tailwindcss: ${JSON.stringify(generatedConfig, null, 2).replace(/"(\w+)"\s*:/g, '$1:').replace(/(\d),/g, '$1, ')}\n`;
      const updatedNuxtConfigContent = nuxtConfigContent.slice(0, tailwindcssIndex) + updatedTailwindcssContent + nuxtConfigContent.slice(tailwindcssEndIndex + 1);

      // Write the updated content back to nuxt.config.ts
      await fs.promises.writeFile(nuxtConfigPath, updatedNuxtConfigContent, 'utf-8');
      console.log('Nuxt config file updated successfully!');
    } catch (error) {
      console.error('Error reading config files:', error);
    }
  });

program.parse(process.argv);

