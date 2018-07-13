'use strict';

const obj = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
obj.foo = 'bar';

Object.defineProperty(obj, 'foo', { writable: false });

Object.defineProperty(obj, 'color', {
    get: function() {
        return this._color;
    },

    set: function(value) {
        this._color = value;
    },
});

Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
});

Object.defineProperty(obj, 'greet', {
    value: function() {
        return `Hello, my name is ${this.name}!`;
    },
});

const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr, {
    sum: {
        value: function() {
            return this.reduce((a, x) => a + x);
        },
        enumerable: true,
    },

    avg: {
        value: function() {
            return this.sum() / this.length;
        },
    }
});

console.log(Object.keys(arr).forEach(k => console.log(k)));
