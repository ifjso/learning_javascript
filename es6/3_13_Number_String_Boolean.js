const s = "hello";
console.log(s.toUpperCase());
s.rating = 3;
console.log(s.rating);

const a1 = [1, 2, 3, 4];
console.log(a1);

const a2 = [1, 'two', 3, null];
console.log(a2);

const a3 = [
    "What the hammer? What the chain?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?"
];
console.log(a3);

const a4 = [
    { name: "Ruby", hardness: 9 },
    { name: "Diamond", hardness: 10 },
    { name: "Topaz", hardness: 8 },
];
console.log(a4);

const a5 = [
    [1, 3, 5],
    [2, 4, 6],
];
console.log(a5);

let arr = ['a', 'b', 'c'];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

arr = [1, 2, 'c', 4, 5];
arr[2] = 3;
console.log(arr); 
