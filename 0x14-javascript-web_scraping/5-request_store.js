#!/usr/bin/node

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('An error occurred: ${error}');
  } else if )response.statusCode !== 200) {
    console.error('Request failed with the status code
                  ${response.statusCode}');
  } else {
    fs.writeFile(filePath, body, 'utf-8', (error) => {
      if (error) {
        console.error('An error occurred while saving the file: ${err}');
      } else {
        console.log(`Webpage content has been saved to ${filePath}`);
      }
    });
  }
});
