const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [n,m] = input[0].split(' ').map(BigInt);

  const answer = [];
  answer.push((n/m).toString());
  answer.push((n%m).toString());
  return answer.join('\n');
}

console.log(solve(input));
