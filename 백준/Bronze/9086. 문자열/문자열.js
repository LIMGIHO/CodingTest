const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const T = Number(input[0]);

  const answer = [];
  for (let i = 0; i < T; i++) {
    const str = input[i+1];
    answer.push(str[0] + str[str.length-1]);
  }

  return answer.join('\n');
}

console.log(solve(input));
