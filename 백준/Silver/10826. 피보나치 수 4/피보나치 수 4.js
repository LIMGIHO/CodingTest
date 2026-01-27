const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const dp = Array.from({length:N+1});
    dp[0] = 0n; dp[1] = 1n;

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i-2] + dp[i-1];
    }

    return dp[N].toString();
}

console.log(solve(input));
