function validPassword(p) {
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[^A-Za-z0-9])/.test(p);
}

console.log(validPassword("abcdA03a."));
console.log(validPassword("aBcd03a"));
console.log(validPassword("0baEade"));
