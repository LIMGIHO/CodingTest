const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = input[0];

function mathSort(a,b){return Number(a)-Number(b)}
let A = input[1].split(" ").map(Number).sort(mathSort);
let B = input[2].split(" ").map(Number).sort(mathSort);

let answer = 0;
for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - 1- i];
}

console.log(answer);