const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = input[0];
let A = input[1].split(" ").map(Number).sort((a,b) => a - b);
let B = input[2].split(" ").map(Number).sort((a,b) => b - a);

let answer = 0;
for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
}

console.log(answer);