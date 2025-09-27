const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const n = Number(input[0]);

  let answer = 1;
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += j;

      if (sum > n) break;
      if (sum === n) {
        // console.log("=-====", i, j)
        answer++;
        break;
      }
    }
  }

  return answer;
}

console.log(solve(input));