#!/usr/bin/node

const fs = require('fs');

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, { encoding: 'utf8' }, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('File has been written successfully.');
    }
  });
}

// Usage
const filePath = process.argv[2];
const contentToWrite = process.argv[3];

writeToFile(filePath, contentToWrite);
