const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, A, B] = input;
let setA = new Set(A.split(' '));
let setB = new Set(B.split(' '));
let answer = setA.size + setB.size;

for (const a of setA) {
    if (setB.has(a)) answer--;
}

for (const b of setB) {
    if (setA.has(b)) answer--;
}

console.log(answer);