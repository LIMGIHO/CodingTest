const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const s = Number(input[0]);
  const dp = [0,1];

  let i = 1;
  while (dp[i] <= s) {
    i++;
    dp[i] = dp[i-1] + i
  }

  return dp.length-2;
}

console.log(solve(input));