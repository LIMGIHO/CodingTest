const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [n] = input[0].split(' ').map(BigInt);

n = n.toString(2);
let answer = 0n;
for (let i = 0; i < n.length; i++) {
  if (Number(n[i]) === 1) answer += 3n ** BigInt(n.length - i - 1);
}

console.log(answer.toString());