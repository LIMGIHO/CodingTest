const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);

  let dp = Array.from({length:N+1}, () => 'CY');
  dp[0] = dp[1] = dp[3] = 'SK';

  for (let i = 4; i <= N; i++) {
    if (dp[i-1] !== 'SK' || dp[i-3] !== 'SK')
      dp[i] = 'SK';
  }
  
  return dp[N];
}

console.log(solve(input));
