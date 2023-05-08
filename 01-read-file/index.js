const fs = require('fs');
const path = require('path');
const source = path.join(__dirname, 'text.txt');
let stream = fs.createReadStream(source, 'utf8');

stream.on('data', function(cod){
    console.log(cod);
});