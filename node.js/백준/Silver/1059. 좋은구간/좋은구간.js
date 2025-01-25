const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split("\n");
const S = input[1].split(" ").map(Number).sort((a,b) => (a-b));
const n = Number(input[2]);

let min = 1;
let max = 1000;
let answer = 0;

for (let i = 0; i < S.length; i++) {
    const num = S[i];
    if (num === n) return console.log(0)
    if (n > num) min = num + 1;
    else {
        max = num - 1;
        break;
    }
}

for (let i = min; i <= n; i++) {
    answer += max - Math.max(i, n) + 1;
}

console.log(answer - 1);
