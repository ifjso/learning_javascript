let before = { d: new Date() };
console.log(before.d instanceof Date);

let json = JSON.stringify(before);
let after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);

after.d = new Date(after.d);
console.log(after.d instanceof Date);

before = { d: new Date().valueOf() };
console.log(typeof before.d);

json = JSON.stringify(before);
after = JSON.parse(json);
console.log(typeof after.d);

console.log(new Date(after.d));
