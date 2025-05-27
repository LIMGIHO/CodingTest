const fs = require('fs');

function solve(input) {
  const lines = input.trim().split('\n');
  const T = +lines[0];
  let dp = [1,1,1,2,2,3,4,5,7,9];
  let idx = 10;
  while (idx < 100) {
    dp[idx] = dp[idx-5] + dp[idx-1];
    idx++;
  }

  for (let i = 1; i <= T; i++) {
    const n = +lines[i];
    console.log(dp[n-1]);
  }
}

const input = fs.readFileSync('./dev/stdin', 'utf-8');
solve(input);
