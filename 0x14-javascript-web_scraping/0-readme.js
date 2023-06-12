#!/usr/bin/node

const fs = require('fs');

const readAndPrintFileContent = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`An error occurred while reading the file: ${err}`);
    } else {
      console.log(data);
    }
  });
};

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.log('Please provide the file path as an argument.');
} else {
  const filePath = process.argv[2];
  readAndPrintFileContent(filePath);
}
