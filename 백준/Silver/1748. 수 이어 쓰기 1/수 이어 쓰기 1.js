const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = Number(input[0]);
  let len = String(N).length;
  let answer = N * len;

  while (len > 1) {
    answer -= Number('9'.repeat(--len));
  }
  
  return answer;
}

console.log(solve(input));