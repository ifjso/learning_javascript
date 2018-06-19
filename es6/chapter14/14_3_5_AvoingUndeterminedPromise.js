const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
    constructor(seconds, superstitious) {
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }

    go() {
        const countdown = this;
        const timeoutIds = [];
        return new Promise(function(resolve, reject) {
            for (let i = countdown.seconds; i >= 0; i--) {
                timeoutIds.push(setTimeout(function() {
                    if (countdown.superstitious && i === 13) {
                        timeoutIds.forEach(clearTimeout);
                        return reject(new Error("Oh my god"));
                    }
                    countdown.emit('tick', i);
                    if (i === 0)
                        resolve();
                }, (countdown.seconds - i) * 1000));
            }
        });
    }
}

function addTimeout(fn, timeout = 1000) {
    return function(...args) {
        return new Promise(function(resolve, reject) {
            const tid = setTimeout(reject, timeout, new Error("promise timed out"));
            fn(...args)
                .then(function(...args) {
                    clearTimeout(tid);
                    resolve(...args);
                })
                .catch(function(...args) {
                    clearTimeout(tid);
                    reject(...args);
                });
        });
    };
}

function launch() {
    return new Promise(function(resolve) {
        console.log("Lift off!");
        if (Math.random() < 0.5)
            return;

        setTimeout(function() {
            resolve("In orbit!");
        }, 2 * 1000);
    });
}

const c = new Countdown(5, true)
    .on('tick', i => console.log(i + '...'));

c.go()
    .then(addTimeout(launch, 7 * 1000))
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error("Houston, we have a problem: " + err.message);
    });
