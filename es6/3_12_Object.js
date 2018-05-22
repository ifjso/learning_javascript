const obj = {};
obj.color = "yellow";
obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;
obj.SIZE = 0;

console.log(obj);
console.log(obj[SIZE]);
console.log(obj.SIZE);

const sam1 = {
    name: 'Sam',
    age: 4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 };
console.log(sam2);

const sam3 = {
    name: 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    }
};
console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

sam3.speak = function() { return "Meow!"; };
sam3.speak();

console.log(sam3);

delete sam3.classification;
delete sam3.speak;

console.log(sam3);