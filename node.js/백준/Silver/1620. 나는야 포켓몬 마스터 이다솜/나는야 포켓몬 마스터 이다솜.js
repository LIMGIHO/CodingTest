const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, M] = input.shift().split(" ").map(Number);

const poketmons1 = new Map();
const poketmons2 = new Map();
for (let i = 0; i < N; i++) {
    poketmons1.set(input[i], i+1);
    poketmons2.set(i+1,input[i]);
}

let answer = '';
for (let i = 0; i < M; i++) {
    const v = input[N+i];
    
    if (answer !== '') answer += '\n';

    if (isNaN(v)) answer += poketmons1.get(v);
    else answer += poketmons2.get(Number(v));
}

console.log(answer);