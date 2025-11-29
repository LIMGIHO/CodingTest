const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);

    const dp = Array.from({length:N+1});
    dp[0] = 1; dp[1] = 3;

    for (let i = 2; i <= N; i++) {
        dp[i] = (2*dp[i-1] + dp[i-2]) % 9901;
    }

    return dp[N];
}

console.log(solve(input));
