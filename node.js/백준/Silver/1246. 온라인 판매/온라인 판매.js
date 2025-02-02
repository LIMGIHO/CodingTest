const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N,M] = input.shift().split(" ").map(Number);
let P = input.map(Number).sort((a,b) => a-b);

let answer = 0;
let max = 0
for (let i = 0; i < M; i++) {
    const count = Math.min(N, M - i);
    const price = P[i];
    const sum = price * count;

    if (max < sum) {
        answer = price + ' ' + sum;
        max = sum;
    }
}

console.log(answer);