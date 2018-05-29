const numStr = "33.3";
const num = Number(numStr);
console.log(num);

const a = parseInt("16 volts", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");
console.log(a, b, c);

const d = new Date();
const ts = d.valueOf();
console.log(ts);

const e = true;
const n = e ? 1 : 0;
console.log(e, n);

const f = 33.5;
console.log(f);

const g = f.toString();
console.log(g);

const arr = [1, true, "hello"];
console.log(arr.toString());

const h = 0;
const b1 = !!h;
const b2 = Boolean(h);
console.log(h, b1, b2);