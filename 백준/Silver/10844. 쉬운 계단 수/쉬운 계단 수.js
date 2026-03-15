const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const dp = Array.from({length:N+1}, () => Array(10).fill(0));

    for (let i = 1; i <= 9; i++) {
        dp[1][i] = 1;
    }

    for (let i = 2; i <= N; i++) {
        dp[i][0] = dp[i-1][1];
        dp[i][9] = dp[i-1][8];
        for (let j = 1; j < 9; j++) {
            dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % 1000000000;
        }
    }

    return dp[N].reduce((acc, n) => acc + n, 0) % 1000000000;
}

console.log(solve(input));
