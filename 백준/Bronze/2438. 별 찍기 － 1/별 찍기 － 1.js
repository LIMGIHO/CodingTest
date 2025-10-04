const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = Number(input[0]);

  const answer = [];
  for (let i = 1; i <= N; i++) {
    answer[i-1] = '*'.repeat(i);
  }

  return answer.join('\n');
}

console.log(solve(input));
