const coefficients = {
    a: 1,
    c: 3,
};

function evaluate(x, co) {
    return co.a + co.b * x + co.c * Math.pow(x, 2);
}

const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        const value = target[key];
        return /^[-+]*[0-9]+$/.test(value) ? value : 0;
    }
});

console.log(evaluate(5, betterCoefficients));
console.log(betterCoefficients.b);

const cook = {
    name: "Walt",
    redPhosphorus: 100,
    water: 500,
};

const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if (key === 'redPhosphorus') {
            if (target.allowDangerousOperations) {
                return target[key] = value;
            } else {
                return console.log("Too dangerous!");
            }
        }

        target[key] = value;
    }
});

protectedCook.water = 550;
protectedCook.redPhosphorus = 150;

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
