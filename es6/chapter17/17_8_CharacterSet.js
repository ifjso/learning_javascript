const beer99 = "99 bottles of beer on the wall " +
    "take 1 down and pass it around -- " +
    "98 bottles of beer on the wall.";
const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches);

const m1 = beer99.match(/[0123456789]/g);
const m2 = beer99.match(/[0-9]/g);
console.log(m1);
console.log(m2);

let match = beer99.match(/[-0-9a-z.]/ig);
console.log(match);

match = beer99.match(/[^-0-9a-z.]/ig);
console.log(match);
