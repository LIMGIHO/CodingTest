const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const dp = Array.from({length:N+1}, () => 0);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= N; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 10007;
    }

    return dp[N];
}

console.log(solve(input));