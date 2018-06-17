class Car {
    static getNextVin() {
        return Car.nextVin++;
    }

    constructor(model, make) {
        this.model = model;
        this.make = make;
        this.vin = Car.getNextVin();
    }

    toString() {
        return `${this.make} ${this.model} ${this.vin}`;
    }
}
Car.nextVin = 0;

const car1 = new Car('Telsa', 'Model S');
const car2 = new Car('Mazda', 'Si');
console.log(car1.toString());
console.log(car2.toString());
