const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const n = Number(input[0]);
  const rank = input.slice(1).map(Number);
  rank.sort((a,b) => a-b);

  let answer = 0;
  rank.forEach((r,i) => {
    answer += Math.abs(r-(i+1));
  });
  return answer;
}

console.log(solve(input));
