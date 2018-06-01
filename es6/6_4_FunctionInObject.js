// 6_3_4
let o = {
    name: 'Wallace',
    bark: function() { return 'Woof!'; },
};

o = {
    name: 'Wallace',
    bark() { return 'Woof!'; },
};

console.log(o.bark());