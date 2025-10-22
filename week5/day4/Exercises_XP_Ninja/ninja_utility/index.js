const { program } = require('commander');
const greet = require('./commands/greet');
const fetchData = require('./commands/fetch');
const readFile = require('./commands/read');

program
  .name('ninja-utility')
  .description('A versatile Node.js command-line tool')
  .version('1.0.0');


program
  .command('greet')
  .description('Display a colorful greeting message')
  .action(greet);


program
  .command('fetch')
  .description('Fetch data from a public API')
  .action(fetchData);


program
  .command('read <filename>')
  .description('Read and display the content of a file')
  .action(readFile);

program.parse(process.argv);
