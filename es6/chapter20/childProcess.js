const exec = require('child_process').exec;

exec('dir', function(err, stdout, stderr) {
    if (err) {
        console.error('Error executing "dir"');
        return;
    }

    stderr = stderr.toString();
    if (stderr !== '') {
        console.error('error:');
        console.error(stderr);
        return;
    }

    stdout = stdout.toString();
    console.log(stdout);
});