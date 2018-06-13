let cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
let names = cart.map(x => x.name);
console.log(names);
let prices = cart.map(x => x.price);
console.log(prices);
let discountPrices = prices.map(x => x * 0.8);
console.log(discountPrices);

let items = ["Widget", "Gadget"];
prices = [9.95, 22.95];
cart = items.map((x, i) => ({ name: x, price: prices[i] }));
console.log(cart);

const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])
    for (let value = 1; value <= 13; ++value)
        cards.push({ suit, value });

console.log(cards.filter(c => c.value === 2));
console.log(cards.filter(c => c.suit === 'D'));
console.log(cards.filter(c => c.value > 10));
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
for (let i = 2; i <= 10; i++)
    values[i] = i;

function cardToString(c) {
    return values[c.value] + suits[c.suit];
}

console.log(cards.filter(c => c.value === 2).map(cardToString));
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString));