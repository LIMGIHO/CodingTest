const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const n = Number(input[0]);
  const arr = Array.from({length: n}, (_, i) => i + 1);
  
  const answer = [];
  while (arr.length) {
    answer.push(arr.shift());
    if (arr.length === 0) break;
    arr.push(arr.shift());
  }

  return answer.join(' ');
}

console.log(solve(input));
