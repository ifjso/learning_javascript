let input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g);
const end = input.match(/\w+$/g);
const everything = input.match(/^.*$/g);
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);

console.log(beginning);
console.log(end);
console.log(everything);
console.log(nomatch1);
console.log(nomatch2);

input = "One line\nTwo lines\nThree lines\nFour";
const beginnings = input.match(/^\w+/mg);
const endings = input.match(/\w+$/mg);

console.log(beginnings);
console.log(endings);

const aa = "abcd efg Three";
console.log(aa.replace(/\babcd\b/ig, 'MM $& $& MM'));
