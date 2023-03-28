#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

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
    const filePath = path.join(process.cwd(), cmd.output);
    const data = `
      module.exports = {
        primaryColor: '${cmd.primaryBg} ${cmd.primaryText}',
        secondaryColor: '${cmd.secondaryBg} ${cmd.secondaryText}',
        accentColor: '${cmd.accentBg} ${cmd.accentText}',
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
          secondaryButtonStyles = 'text-blue-500 bg-white hover:bg-gray-100 active:bg-gray-200';
          break;
        case 'ghost':
          secondaryButtonStyles = 'text-gray-500 hover:bg-gray-100 active:bg-gray-200';
          break;
        case 'hard-shadow':
          secondaryButtonStyles = 'text-white bg-gray-500 hover:shadow-md active:shadow-lg';
          break;
        default:
          secondaryButtonStyles = 'text-blue-500 bg-white hover:bg-gray-100 active:bg-gray-200';
          break;
      }

      const tailwindConfig = {
        theme: {
          extend: {
            colors: {
              primary: basecliConfig.primaryColor,
              secondary: basecliConfig.secondaryColor,
              accent: basecliConfig.accentColor,
              background: basecliConfig.backgroundColor,
              helper: basecliConfig.helperText,
              link: basecliConfig.linkText
            },
            borderRadius: {
              custom: basecliConfig.buttonRadius
            },
            button: {
              primary: primaryButtonStyles,
              secondary: secondaryButtonStyles
            }
          }
        }
      };

      await fs.promises.writeFile(tailwindConfigPath, `module.exports = ${JSON.stringify(tailwindConfig, null, 2)}`);

      console.log(`Tailwind config file updated at ${tailwindConfigPath}`);
    } catch (error) {
      console.error('Error updating Tailwind config file:', error);
    }
  });

program.parse(process.argv);