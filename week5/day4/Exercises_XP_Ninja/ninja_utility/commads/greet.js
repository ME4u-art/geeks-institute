const chalk = require('chalk');

function greet() {
  console.log(chalk.greenBright.bold('Hello Ninja!'));
  console.log(chalk.blue('Welcome to your Node.js command-line utility!'));
  console.log(chalk.yellow('Ready to perform some awesome tasks? 🚀'));
}

module.exports = greet;
