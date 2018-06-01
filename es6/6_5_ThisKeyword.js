let o = {
    name: 'Wallace',
    speak() { return `My name is ${this.name}!`; },
};
console.log(o.speak());

const speak = o.speak;
console.log(speak === o.speak);
console.log(speak());

o = {
    name: 'Julie',
    greetBackwards() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log(o.greetBackwards());
