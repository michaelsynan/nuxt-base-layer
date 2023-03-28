#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

program
  .command('init')
  .description('Initialize the config file')
  .option('-o, --output <outputFile>', 'Specify output file', 'basecli.config.js')
  .option('-m, --message <message>', 'Specify a message', 'Hello, World!')
  .action(async (cmd) => {
    const filePath = path.join(process.cwd(), cmd.output);
    const data = `module.exports = ${JSON.stringify({ message: cmd.message })};\n`;

    try {
      await fs.promises.writeFile(filePath, data);
      console.log(`Config file created at ${filePath}`);
    } catch (error) {
      console.error('Error creating config file:', error);
    }
  });

program.parse(process.argv);