const fs = require('fs');
const path = require('path');

function showFileInfo() {
  
  const filePath = path.join(__dirname, 'data', 'example.txt');
  console.log('File path:', filePath);

 
  const exists = fs.existsSync(filePath);
  console.log('File exists:', exists);

  if (exists) {
    const stats = fs.statSync(filePath);
    console.log('File size:', stats.size, 'bytes');
    console.log('Created on:', stats.birthtime);
  }
}

module.exports = showFileInfo;
