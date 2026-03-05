const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const dp = Array.from({length:N+1}, () => 0);
    dp[0] = 1n; dp[1] = 1n;

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    let answer = dp[N] * 2n + dp[N-1] * 2n;
    return answer.toString();
}

console.log(solve(input));