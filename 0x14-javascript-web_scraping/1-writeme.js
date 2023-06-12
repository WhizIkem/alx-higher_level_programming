#!/usr/bin/node
const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('File has been written successfully.');
    }
  });
}

// Usage
const filePath = 'path/to/your/file.txt';
const contentToWrite = 'Hello, World!';

writeToFile(filePath, contentToWrite);
