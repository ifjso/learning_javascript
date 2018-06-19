for (let i = 5; i >= 0; i--) {
    setTimeout(function() {
        console.log("let\t" + (i === 0 ? "go!" : i));
    }, (5 - i) * 1000);
}

for (var i = 5; i >= 0; i--) {
    (function(i) {
        setTimeout(function() {
            console.log("var\t" + (i === 0 ? "go!" : i));
        }, (5 - i) * 1000);
    })(i);
}