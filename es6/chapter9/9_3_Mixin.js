const Car = (function() {
    const userProps = new WeakMap();

    class Car {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.vin = Car.getNextVin();
            this._userProps = ['P', 'N', 'R', 'D'];
            userProps.set(this, { userGear: this._userProps[0] });
        }

        static getNextVin() {
            return Car.nextVin++;
        }

        get userGear() {
            return userProps.get(this).userGear;
        }

        set userGear(value) {
            if (this._userProps.indexOf(value) < 0) {
                throw new Error(`Invalid gear: ${value}`);
            }
            userProps.get(this).userGear = value;
        }

        shift(gear) {
            this.userGear = gear;
        }

        toString() {
            return `${this.make} ${this.model} ${this.vin}`;
        }
    }

    return Car;
})();
Car.nextVin = 0;

class InsurancePolicy {}
const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();
function makeInsurable(o) {
    o[ADD_POLICY] = function(p) {
        this[_POLICY] = p;
    };
    o[GET_POLICY] = function() {
        return this[_POLICY];
    };
    o[IS_INSURED] = function() {
        return !!this[_POLICY];
    };
}

makeInsurable(Car.prototype);
const car1 = new Car();
car1[ADD_POLICY](new InsurancePolicy());
console.dir(Car);