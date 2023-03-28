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
        buttonRadius: '${cmd.radius}'
      };
    `;

    try {
      await fs.promises.writeFile(filePath, data);
      console.log(`Config file created at ${filePath}`);
    } catch (error) {
      console.error('Error creating config file:', error);
    }
  });

program.parse(process.argv);