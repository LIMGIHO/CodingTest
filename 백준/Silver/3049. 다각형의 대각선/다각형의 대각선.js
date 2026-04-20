const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    if (N < 4) return '0';

    const dp = Array.from({length:N+1});
    dp[0] = 1n; dp[1] = 1n;

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i-1] * BigInt(i);
    }

    return (dp[N] / (dp[4] * dp[N-4])).toString();
}

console.log(solve(input));
