let n = 5;
const s = "5";
console.log(n === s);
console.log(n !== s);
console.log(n === Number(s));
console.log(n !== Number(s));
console.log(n == s);
console.log(n != s);

const a = { name: "an object" };
const b = { name: "an object" };
console.log(a === b);
console.log(a !== b);
console.log(a == b);
console.log(a != b);

n = 0;
while (true) {
    n += 0.1;
    if (Math.abs(n - 0.3) < Number.EPSILON)  break;
}
console.log(`Stoppend at ${n}`);