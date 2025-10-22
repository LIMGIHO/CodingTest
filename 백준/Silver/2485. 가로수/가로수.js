const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const trees = input.slice(1).map(Number);
  let distance = Number.MAX_SAFE_INTEGER;
  let dp = Array.from({length:N}, () => 0);

  for (let i = 1; i < N; i++) {
    dp[i] = trees[i] - trees[i-1];
    if (distance > dp[i]) distance = dp[i];
  }

  const gcd = (a,b) => {
    if (b === 0) return a;

    return gcd(b, a%b);
  }

  let divisor = dp[1];
  for (let i = N - 1; i > 1; i--) {
    divisor = gcd(dp[i], divisor);
  }

  let answer = 0;
  for (let i = 1; i < N; i++) {
    answer += dp[i] / divisor - 1;
  }

  return answer;
};

console.log(solve(input));
