const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let n = Number(input[0]);
let arr = ['00', '1'];
let answer = Array.from({length: n+1});
answer[1] = 1;
answer[2] = 2;

for (let i = 3; i <= n; i++) {
  answer[i] = (answer[i-1] + answer[i-2]) % 15746;
}

console.log(answer[n]);