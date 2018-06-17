class Vehicle {}
class Car extends Vehicle {}
class Motorcycle extends Vehicle {}

const c = new Car();
const m = new Motorcycle();

console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);
