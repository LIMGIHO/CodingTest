const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const answer = [];

  for (const str of input) {
    const [N,S] = str.split(' ').map(Number);
    answer.push(Math.floor(S / (N+1)));
  }
  
  return answer.join('\n');
}

console.log(solve(input));