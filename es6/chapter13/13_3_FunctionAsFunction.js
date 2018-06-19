function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if (++colorIndex >= colors.length) {
                colorIndex = 0;
            }

            return { value: colors[colorIndex], done: false };
        }
    };
}

const it = getRainbowIterator();
console.log(it.next());
console.log(it.next());
