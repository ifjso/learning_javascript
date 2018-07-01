let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);

html = '<a class="yep" href="/yep" id="nope">Yep</a>';
html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
console.log(html);

const input = "One two three";
console.log(input.replace(/two/, '($`)'));
console.log(input.replace(/two/, '($&)'));
console.log(input.replace(/two/, "($')"));
console.log(input.replace(/two/, "($$)"));
