const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const N = Number(input[0]);
  const dp = Array.from({length: 3}, () => 0);

  for (let i = 1; i <= N; i++) {
    const [r,g,b] = input[i].split(' ').map(Number);
    const R = r + Math.min(dp[1], dp[2]);
    const G = g + Math.min(dp[0], dp[2]);
    const B = b + Math.min(dp[0], dp[1]);
    dp[0] = R;
    dp[1] = G;
    dp[2] = B;
  }
  
  return Math.min(...dp);
}

console.log(solve(input));
