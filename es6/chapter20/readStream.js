const fs = require('fs');
const rs = fs.createReadStream('stream.txt', 'utf8');

rs.on('data', function(data) {
    console.log('>> data: ' + data.replace(/\n/g, '\\n'));
});

rs.on('end', function() {
    console.log('>> end');
});
