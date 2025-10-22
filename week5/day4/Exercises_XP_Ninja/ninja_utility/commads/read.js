const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function readFile(fileName) {
  try {
    const filePath = path.join(__dirname, '..', fileName);

    if (!fs.existsSync(filePath)) {
      console.log(chalk.red('❌ File not found!'));
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    console.log(chalk.greenBright('\n--- File Content ---'));
    console.log(chalk.white(content));
  } catch (error) {
    console.error(chalk.red('Error reading file:'), error.message);
  }
}

module.exports = readFile;
