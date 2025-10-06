const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [a,b] = input[0].split(' ').map(Number);

  const answer = [];
  for (let i = 1; i <= Math.min(a,b); i++) {
    if (a % i === 0 && b % i === 0) {
      answer.push(i + ' ' + a/i + ' ' + b/i);
    }
  }

  return answer.join('\n')
}

console.log(solve(input));
