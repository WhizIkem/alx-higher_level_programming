#!/usr/bin/node
const myArgs = process.argv.slice(2);

if (myArgs[0]  === undefined && myArgs[1] === undefined) {
  console.log('undefined is undefined');
} else {
  console.log(myArg[0], 'is', myArgs[1]);
}
