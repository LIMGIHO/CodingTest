const fs = require('fs');

function solve(input) {
  const lines = input.trim().split('\n');
  const n = +lines[0];
  
  //true: SK
  //false: CY
  const dp = Array.from({length:n+1});
  dp[1] = true;
  dp[2] = false;
  dp[3] = true;
  dp[4] = true;
  
  for (let i = 5; i <= n; i++) {
    if (!dp[i-1] || !dp[i-3] || !dp[i-4]) {
      dp[i] = true;
    } else {
      dp[i] = false;
    }
  }

  console.log(dp[n] ? "SK" : "CY");
}

const input = fs.readFileSync('./dev/stdin', 'utf-8');
solve(input);
