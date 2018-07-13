const fs = require('fs');
const ws = fs.createWriteStream('stream.txt', 'utf8');

ws.write('line1\n');
ws.write('line2\n');
ws.write('line3\n');
ws.end();
