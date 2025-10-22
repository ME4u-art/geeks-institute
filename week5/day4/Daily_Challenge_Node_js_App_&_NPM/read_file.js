
const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    console.log('File Content:\n' + data);
  } catch (error) {
    console.error(' Error reading the file:', error.message);
  }
}

module.exports = readFileContent;
