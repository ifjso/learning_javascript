'use strict';

const appInfo = {
    company: 'White Knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    copyright() {
        return `Ⓒ ${new Date().getFullYear()}, ${this.company}`;
    },
};

Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));

console.log(appInfo.copyright());

appInfo.newProp = 'test';

delete appInfo.company;

appInfo.company = 'test';

Object.defineProperty(appInfo, 'company', { enumerable: false });

class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }

    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log = new Logger("Captain's Log");
Object.seal(log);
console.log(Object.isSealed(log));

log.name = "Captain's Boring Log";
log.add("Another boring day at sea...");

log.newProp = 'test';

log.name = 'test';

delete log.name;

Object.defineProperty(log, 'log', { enumerable: false });

const log2 = new Logger("First Mate's Log");
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));

log2.name = "Fist Mate's Boring Log";
log2.add("Another boring day at sea...");

log2.newProp = 'test';

log2.name = 'test';
delete log2.name;
Object.defineProperty(log2, 'log', { enumerable: false });
