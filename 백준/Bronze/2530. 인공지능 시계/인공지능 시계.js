const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  let [A, B, C] = input[0].split(' ').map(Number);
  let D = Number(input[1]);
  let total = A * 3600 + B * 60 + C + D;

  A = Math.floor(total/3600) % 24;
  total %= 3600;

  B = Math.floor(total/60);
  total %= 60;

  C = total;

  return `${A} ${B} ${C}`;
}

console.log(solve(input));