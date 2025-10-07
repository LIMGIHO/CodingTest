const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const n = Number(input[0]);
  const dp = Array.from({length: Math.abs(n)+1});
  dp[0] = 0;
  dp[1] = 1;

  const abs_n = Math.abs(n);
  if (n < 0) {
    for (let i = 2; i <= abs_n; i++) {
      dp[i] = (dp[i-2] - dp[i-1]) % 1000000000;
    }
  } else {
    for (let i = 2; i <= n; i++) {
      dp[i] = (dp[i-1] + dp[i-2]) % 1000000000;
    }
  }

  let answer = [
    (dp[abs_n] > 0 ? 1 
      : dp[abs_n] === 0 ? 0
      : -1),
    Math.abs(dp[abs_n] % 1000000000)
  ]

  return answer.join('\n');
}

console.log(solve(input));

// -3 2 -1 1 0 1

// 음수일경우 - 뒤에서 앞에껄 뺀수