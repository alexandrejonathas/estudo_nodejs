'use strict';

const fs = require('fs');

let file = fs.createReadStream('content.txt');

let novo = fs.createWriteStream('content_novo.txt');

file.pipe(novo);
