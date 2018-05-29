let obj = {b: 2, c: 3, d: 4};

const {a, b, c} = obj;
console.log(a, b, c);

obj = {e:5, f:6, g:7};
let d, e, f;
// (d, e, f} = obj;
({d, e, f} = obj);
console.log(d, e, f);

let arr = [1, 2, 3];
let [x, y] = arr;
console.log(x, y);

arr = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr;
console.log(first, second, rest);

let h = 5, i = 10;
[h, i] = [i, h];
console.log(h, i);