const axios = require('axios');
const chalk = require('chalk');

async function fetchData() {
  try {
    console.log(chalk.cyan('Fetching data from JSONPlaceholder API...'));
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const data = response.data;

    console.log(chalk.greenBright('\n--- Data Fetched Successfully ---'));
    console.log(chalk.yellow(`Title: ${data.title}`));
    console.log(chalk.white(`Body: ${data.body}\n`));
  } catch (error) {
    console.error(chalk.red('❌ Error fetching data:'), error.message);
  }
}

module.exports = fetchData;
