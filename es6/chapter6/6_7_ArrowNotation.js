const f1 = function() {
    return "hello!";
};
console.log(f1());

const a1 = () => "hello!";
console.log(a1());

const f2 = function(name) {
    return `Hello, ${name}!`;
};
console.log(f2('Iron'));

const a2 = name => `Hello, ${name}!`;
console.log(a2('Iron'));

const f3 = function(a, b) {
    return a + b;
};
console.log(f3(1, 2));

const a3 = (a, b) => a + b;
console.log(a3(1, 2));

const o = {
    name: 'Juile',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; --i) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
console.log(o.greetBackwards());