const arr = [5, 7, 2, 4];
let sum = arr.reduce((a, x) => a += x, 0);
console.log(sum);
sum = arr.reduce((a, x) => a += x);
console.log(sum);

const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]])
        a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
console.log(alphabetical);

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
const stats = data.reduce((a, x) => {
    a.N++;
    let delta = x - a.mean;
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.mean);
    return a;
}, { N: 0, mean: 0, M2: 0 });
if (stats.N > 2) {
    stats.variance = stats.M2 / (stats.N - 1);
    stats.stdev = Math.sqrt(stats.variance);
    console.log(stats);
}

let longWords = words.reduce((a, w) => w.length > 6 ? a + " " + w : a, "").trim();
console.log(longWords);
longWords = words.filter(w => w.length > 6).join(" ");
console.log(longWords);