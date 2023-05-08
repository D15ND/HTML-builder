const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, 'text.txt');
const readline = require('readline');
const input=process;
const output=process;
const exit=process;
const newStream=fs.createWriteStream(source, 'utf-8');

input.write('write your text here:');
input.on('data', (inputText) => {
  if (inputText.toString()==='exit') {
    exit();
  }
  newStream.write(inputText);
});

function outputText() {
  output.write('your submit is adopted')
}

// process.on('exit', () => {
//   console.log('Entry completed');
// })