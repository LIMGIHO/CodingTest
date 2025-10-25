const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  let N = Number(input[0]);

  let answer = 0;
  for (let i = 1; i <= N; i++) {
    const [q, y] = input[i].split(' ').map(Number);

    answer += q * y;
  }

  return answer.toFixed(3);
}

console.log(solve(input));