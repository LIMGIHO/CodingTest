const fs = require("fs");
const readline = require('readline');
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N,L] = input.shift().split(' ').map(Number);
let whole = input[0].split(' ').map(Number).sort((a,b) => a-b);
let start = whole[0];
let answer = 1;

for (let i = 1; i < N; i++) {
    const a = whole[i];

    if (a - start + 1 > L) {
        answer++;
        start = a;
    } 
}

console.log(answer);