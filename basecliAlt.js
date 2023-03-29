const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

program
  .command('init')
  .description('Initialize the config file')
  .option('-o, --output <outputFile>', 'Specify output file', 'basecli.config.js')
  .option('-p, --primary-bg <color>', 'Specify primary background color', '#3B82F6')
  .option('-p-t, --primary-text <color>', 'Specify primary text color', '#FFFFFF')
  .option('-s, --secondary-bg <color>', 'Specify secondary background color', '#9CA3AF')
  .option('-s-t, --secondary-text <color>', 'Specify secondary text color', '#FFFFFF')
  .option('-h, --helper <color>', 'Specify helper text color', '#6B7280')
  .option('-l, --link <color>', 'Specify link text color', '#3B82F6')
  .option('-a, --accent-bg <color>', 'Specify accent background color', '#10B981')
  .option('-a-t, --accent-text <color>', 'Specify accent text color', '#FFFFFF')
  .option('-b, --background <color>', 'Specify background color', '#F3F4F6')
  .option('-r, --radius <radius>', 'Specify button radius', 'rounded-md')
  .option('-pb, --primary-button <type>', 'Specify primary button type: default, flat, ghost, hard-shadow', 'default')
  .option('-sb, --secondary-button <type>', 'Specify secondary button type: default, flat, ghost, hard-shadow', 'default')
  .action(async (cmd) => {
    const filePath = path.join(process.cwd(), cmd.output);
    const data = `
      module.exports = {
        primaryColor: {
          bg: '${cmd.primaryBg}',
          text: '${cmd.primaryText}',
          textFaded: 'rgba(${parseInt(cmd.primaryText.slice(1, 3), 16)}, ${parseInt(cmd.primaryText.slice(3, 5), 16)}, ${parseInt(cmd.primaryText.slice(5, 7), 16)}, 0.25)',
        },
        secondaryColor: {
          bg: '${cmd.secondaryBg}',
          text: '${cmd.secondaryText}',
          textFaded: 'rgba(${parseInt(cmd.secondaryText.slice(1, 3), 16)}, ${parseInt(cmd.secondaryText.slice(3, 5), 16)}, ${parseInt(cmd.secondaryText.slice(5, 7), 16)}, 0.25)',
        },
        accentColor: {
          bg: '${cmd.accentBg}',
          text: '${cmd.accentText}',
          textFaded: 'rgba(${parseInt(cmd.accentText.slice(1, 3), 16)}, ${parseInt(cmd.accentText.slice(3, 5), 16)}, ${parseInt(cmd.accentText.slice(5, 7), 16)}, 0.25)',
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
          primaryButtonStyles = `text-white bg-${basecliConfig.primaryColor.bg} hover:bg-${basecliConfig.primaryColor.bg} active:bg-${basecliConfig.primaryColor.bg}`;
          break;
        case 'ghost':
          primaryButtonStyles = `text-${basecliConfig.primaryColor.bg} hover:bg-${basecliConfig.primaryColor.bg} active:bg-${basecliConfig.primaryColor.bg}`;
          break;
        case 'hard-shadow':
          primaryButtonStyles = `text-white bg-${basecliConfig.primaryColor.bg} hover:shadow-md active:shadow-lg`;
          break;
        default:
          primaryButtonStyles = `text-white bg-${basecliConfig.primaryColor.bg} hover:bg-${basecliConfig.primaryColor.bg} active:bg-${basecliConfig.primaryColor.bg}`;
          break;
      }

      let secondaryButtonStyles;
      switch (basecliConfig.secondaryButtonType) {
        case 'flat':
          secondaryButtonStyles = `text-white bg-${basecliConfig.secondaryColor.bg} hover:bg-${basecliConfig.secondaryColor.bg} active:bg-${basecliConfig.secondaryColor.bg}`;
          break;
        case 'ghost':
          secondaryButtonStyles = `text-${basecliConfig.secondaryColor.bg} hover:bg-${basecliConfig.secondaryColor.bg} active:bg-${basecliConfig.secondaryColor.bg}`;
          break;
        case 'hard-shadow':
          secondaryButtonStyles = `text-white bg-${basecliConfig.secondaryColor.bg} hover:shadow-md active:shadow-lg`;
          break;
        default:
          secondaryButtonStyles = `text-white bg-${basecliConfig.secondaryColor.bg} hover:bg-${basecliConfig.secondaryColor.bg} active:bg-${basecliConfig.secondaryColor.bg}`;
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
