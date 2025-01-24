const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, A, B] = input[0].split(" ").map(Number);

A -= 1;
B -= 1;
let answer = 0;
while (A!==B) {
    answer++;
    A = Math.floor(A / 2);
    B = Math.floor(B / 2);
}

console.log(answer);