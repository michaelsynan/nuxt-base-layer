const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();


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
  const { promisify } = require('util');
  const exec = promisify(require('child_process').exec);

  try {
    const { stdout } = await exec('bash generate_palette.sh');
    return parsePaletteOutput(stdout);
  } catch (error) {
    console.error('Error running generate_palette.sh:', error);
    return null;
  }
}

program
  .command('init')
  .description('Initialize the config file')
  .option('-o, --output <outputFile>', 'Specify output file', 'basecli.config.js')
  .option('-p, --primary-bg <color>', 'Specify primary background color', 'bg-blue-500')
  .option('-p-t, --primary-text <color>', 'Specify primary text color', 'text-white')
  .option('-s, --secondary-bg <color>', 'Specify secondary background color', 'bg-gray-500')
  .option('-s-t, --secondary-text <color>', 'Specify secondary text color', 'text-white')
  .option('-h, --helper <color>', 'Specify helper text color', 'text-gray-500')
  .option('-l, --link <color>', 'Specify link text color', 'text-blue-500')
  .option('-a, --accent-bg <color>', 'Specify accent background color', 'bg-green-500')
  .option('-a-t, --accent-text <color>', 'Specify accent text color', 'text-white')
  .option('-b, --background <color>', 'Specify background color', 'bg-gray-100')
  .option('-r, --radius <radius>', 'Specify button radius', 'rounded-md')
  .option('-pb, --primary-button <type>', 'Specify primary button type: default, flat, ghost, hard-shadow', 'default')
  .option('-sb, --secondary-button <type>', 'Specify secondary button type: default, flat, ghost, hard-shadow', 'default')
  .action(async (cmd) => {
    const paletteColors = await getPaletteColors();
    if (paletteColors) {
      cmd.primaryBg = paletteColors.primary || cmd.primaryBg;
      cmd.secondaryBg = paletteColors.secondarya || cmd.secondaryBg;
      cmd.accentBg = paletteColors.secondaryb || cmd.accentBg;
      cmd.helper = paletteColors.secondaryc || cmd.helper;
      cmd.link = paletteColors.secondaryd || cmd.link;
    }
  
    
    const filePath = path.join(process.cwd(), cmd.output);
    const data = `
      module.exports = {
        primaryColor: {
          bg: '${cmd.primaryBg}',
          text: '${cmd.primaryText}',
          textFaded: '${cmd.primaryText.replace('text-', 'text-opacity-25 ')}'
        },
        secondaryColor: {
          bg: '${cmd.secondaryBg}',
          text: '${cmd.secondaryText}',
          textFaded: '${cmd.secondaryText.replace('text-', 'text-opacity-25 ')}'
        },
        accentColor: {
          bg: '${cmd.accentBg}',
          text: '${cmd.accentText}',
          textFaded: '${cmd.accentText.replace('text-', 'text-opacity-25 ')}'
        },
        helperText: '${cmd.helper}',
        linkText: '${cmd.link}',
        backgroundColor: '${cmd.background}',
        buttonRadius: '${cmd.radius}',
        primaryButtonType: '${cmd.primaryButton}',
        secondaryButtonType: '${cmd.secondaryButton}'
      };
    `;

    try {
      await fs.promises.writeFile(filePath, data);
      console.log(`Config file created at ${filePath}`);
    } catch (error) {
      console.error('Error creating config file:', error);
    }
  });

  program
  .command('update')
  .description('Update the default Tailwind config file')
  .action(async () => {
    const basecliConfigPath = path.join(process.cwd(), 'basecli.config.js');
    const tailwindConfigPath = path.join(process.cwd(), 'tailwind.config.js');

    try {
      const basecliConfig = require(basecliConfigPath);

      let primaryButtonStyles;
      switch (basecliConfig.primaryButtonType) {
        case 'flat':
          primaryButtonStyles = 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700';
          break;
        case 'ghost':
          primaryButtonStyles = 'text-blue-500 hover:bg-blue-100 active:bg-blue-200';
          break;
        case 'hard-shadow':
          primaryButtonStyles = 'text-white bg-blue-500 hover:shadow-md active:shadow-lg';
          break;
        default:
          primaryButtonStyles = 'text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700';
          break;
      }

      let secondaryButtonStyles;
      switch (basecliConfig.secondaryButtonType) {
        case 'flat':
          secondaryButtonStyles = 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700';
          break;
        case 'ghost':
          secondaryButtonStyles = 'text-gray-500 hover:bg-gray-100 active:bg-gray-200';
          break;
        case 'hard-shadow':
          secondaryButtonStyles = 'text-white bg-gray-500 hover:shadow-md active:shadow-lg';
          break;
        default:
          secondaryButtonStyles = 'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700';
          break;
      }

      const generatedConfig = {
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: basecliConfig.primaryColor.bg,
                text: basecliConfig.primaryColor.text,
                faded: basecliConfig.primaryColor.textFaded,
              },
              secondary: {
                DEFAULT: basecliConfig.secondaryColor.bg,
                text: basecliConfig.secondaryColor.text,
                faded: basecliConfig.secondaryColor.textFaded,
              },
              accent: {
                DEFAULT: basecliConfig.accentColor.bg,
                text: basecliConfig.accentColor.text,
                faded: basecliConfig.accentColor.textFaded,
              },
              background: {
                DEFAULT: basecliConfig.backgroundColor,
                text: basecliConfig.backgroundColor,
                faded: basecliConfig.backgroundColor,
              },
              helper: {
                DEFAULT: basecliConfig.helperText,
                text: basecliConfig.helperText,
                faded: basecliConfig.helperText,
              },
              link: {
                DEFAULT: basecliConfig.linkText,
                text: basecliConfig.linkText,
                faded: basecliConfig.linkText,
              },
              borderRadius: {
                custom: basecliConfig.buttonRadius,
              },
              button: {
                primary: primaryButtonStyles,
                secondary: secondaryButtonStyles,
              },
            },
          },
        },
        plugins: [],
      };
      try {
        const currentTailwindConfig = require(tailwindConfigPath);
        const newTailwindConfig = {
          ...currentTailwindConfig,
          theme: {
            ...currentTailwindConfig.theme,
            extend: {
              ...currentTailwindConfig.theme.extend,
              ...generatedConfig.theme.extend,
            },
          },
        };
      
        await fs.promises.writeFile(tailwindConfigPath, `module.exports = ${JSON.stringify(newTailwindConfig, null, 2)}`, 'utf-8');
        console.log('Tailwind config file updated successfully!');
      } catch (error) {
        console.error('Error updating Tailwind config file:', error);
      }
      } catch (error) {
        console.error('Error reading config files:', error);
      }
      
      });
      
      program.parse(process.argv);
      
      