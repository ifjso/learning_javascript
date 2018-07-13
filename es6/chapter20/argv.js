const fs = require('fs');

const filenames = process.argv.slice(2);

const counts = filenames.map(f => {
    try {
        const data = fs.readFileSync(f, 'utf8');
        return `${f}: ${data.split('\n').length}`;
    } catch (err) {
        return `${f}: couldn't read file`;
    }
});

console.log(counts.join('\n'));

const debug = process.env.DEBUG === "1" ? console.log : function() {};

debug("Visible only if environment variable DEBUG is set!");

console.log(`Current directory: ${process.cwd()}`);
process.chdir(__dirname);
console.log(`Current directory: ${process.cwd()}`);
