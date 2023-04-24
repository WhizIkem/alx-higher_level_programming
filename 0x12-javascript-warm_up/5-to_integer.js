#!/usr/bin/node
const arg = process.argv[2]);
if (isNAN(Number(arg))) {
  console.log('Not a number'); 
} else {
  console.log(`My number: ${parseInt(arg, 10)}`);
}
}
