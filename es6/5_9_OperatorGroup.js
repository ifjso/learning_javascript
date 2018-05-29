let n = 22;
console.log(n << 1);
console.log(n >> 1);
console.log(n >>> 1);
n = ~n;
n++;
console.log(n << 1);
console.log(n >> 1);
console.log(n >>> 1);

const FLAG_EXECUTE = 1;     // 0b001
const FLAG_WRITE = 2;       // 0b010
const FLAG_READ = 4;        // 0b100

let p = FLAG_READ | FLAG_WRITE;
let hasWrite = p & FLAG_WRITE;
console.log(`hasWrite: ${hasWrite}`);
let hasExecute = p & FLAG_EXECUTE;
console.log(`hasExecute: ${hasExecute}`);

// toggle
p = p ^ FLAG_WRITE;
console.log(p);
p = p ^ FLAG_WRITE;
console.log(p);

const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
console.log(`hasReadOrExecute: ${hasReadOrExecute}`);
const hasReadAndExecute = (p & (FLAG_READ | FLAG_EXECUTE)) === (FLAG_READ | FLAG_EXECUTE);
console.log(`hasReadAndExecute: ${hasReadAndExecute}`);

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof true);
console.log(typeof 1);
console.log(typeof "");
console.log(typeof Symbol());
console.log(typeof function(){});

console.log(void 0);

let v, v0;
v = v0 = 9.8;
console.log(v, v0);

const nums = [3, 5, 15, 7, 5];
let i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
    console.log(`Number less than 10: ${n}.`);
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);


