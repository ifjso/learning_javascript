const arr1 = ["b", "c", "d"];
arr1.push("e");
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift("a");
console.log(arr1);
arr1.shift();
console.log(arr1);

const arr2 = [1, 2, 3];
console.log(arr2.concat(4, 5, 6));
console.log(arr2.concat([4, 5, 6]));
console.log(arr2.concat([4, 5], 6));
console.log(arr2.concat([4, [5, 6]]));

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.slice(3));
console.log(arr3.slice(2, 4));
console.log(arr3.slice(-2));
console.log(arr3.slice(1, -2));
console.log(arr3.slice(-2, -1));

const arr4 = [1, 5, 7];
arr4.splice(1, 0, 2, 3, 4);
console.log(arr4);
arr4.splice(5, 0, 6);
console.log(arr4);
arr4.splice(1, 2);
console.log(arr4);
arr4.splice(2, 1, 'a', 'b');
console.log(arr4);

const arr5 = [1, 2, 3, 4];
arr5.copyWithin(1, 2);
console.log(arr5);
arr5.copyWithin(2, 0, 2);
console.log(arr5);
arr5.copyWithin(0, -3, -1);
console.log(arr5);

const arr6 = new Array(5).fill(1);
console.log(arr6);
arr6.fill("a");
console.log(arr6);
arr6.fill("b", 1);
console.log(arr6);
arr6.fill("c", 2, 4);
console.log(arr6);
arr6.fill(5.5, -4);
console.log(arr6);
arr6.fill(0, -3, -1);
console.log(arr6);

const arr7 = [1, 2, 3, 4, 5];
arr7.reverse();
console.log(arr7);

const arr8 = [5, 3, 2, 4, 1];
arr8.sort();
console.log(arr8);
const arr9 = [{ name: "Suzanne" }, { name: "Jim" }, { name: "Trevor" }, { name: "Amanda" }];
arr9.sort();
console.log(arr9);
arr9.sort((a, b) => a.name > b.name);
console.log(arr9);
arr9.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr9);
