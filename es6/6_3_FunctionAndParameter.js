function f(o) {
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체!"
    };
    console.log(`f 내부: o.message="${o.message}" (할당 후)`);
}

let o = {
    message: '초기값'
};

console.log(`f를 호출하기 전: o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);

// 6_3_2
function getSentenceFromObject({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};

console.log(getSentenceFromObject(o));

function getSentenceFromArray([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];
console.log(getSentenceFromArray(arr));

function addPrefix(prefix, ...words) {
    const prefixedWords = [];
    for (let i = 0; i < words.length; ++i) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));

// 6_3_3
function g(a, b = "default", c = 3) {
    return `${a} - ${b} - ${c}`;
}

console.log(g(5, 6, 7));
console.log(g(5, 6));
console.log(g(5));
console.log(g());