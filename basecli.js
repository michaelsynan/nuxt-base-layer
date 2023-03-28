#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

program
  .command('init')
  .description('Initialize the config file')
  .option('-o, --output <outputFile>', 'Specify output file', 'basecli.config.js')
  .option('-p, --primary <color>', 'Specify primary color', 'bg-blue-500 text-white')
  .option('-s, --secondary <color>', 'Specify secondary color', 'bg-gray-500 text-white')
  .option('-a, --accent <color>', 'Specify accent color', 'bg-green-500 text-white')
  .option('-b, --background <color>', 'Specify background color', 'bg-gray-100')
  .option('-r, --radius <radius>', 'Specify button radius', 'rounded-md')
  .action(async (cmd) => {
    const filePath = path.join(process.cwd(), cmd.output);
    const data = `
      module.exports = {
        primaryColor: '${cmd.primary}',
        secondaryColor: '${cmd.secondary}',
        accentColor: '${cmd.accent}',
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