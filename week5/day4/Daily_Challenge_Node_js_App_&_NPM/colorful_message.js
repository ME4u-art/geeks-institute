
const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.blue.bold('💙 Keep learning and coding!'));
  console.log(chalk.greenBright('💚 Node.js makes JavaScript powerful.'));
  console.log(chalk.yellow('💛 You’re improving every day!'));
}

module.exports = showColorfulMessage;
