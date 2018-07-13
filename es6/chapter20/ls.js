const fs = require('fs');

fs.readdir(__dirname, function(err, files) {
    if (err) {
        return console.error('Unable to read directory contents');
    }

    console.log(`cContents of ${__dirname}:`);
    console.log(files.map(f => '\t' + f).join('\n'));
});
