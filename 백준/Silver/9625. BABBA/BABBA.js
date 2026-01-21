const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const K = Number(input[0]);
    const dp = Array.from({length:K+1}, () => Array(2));
    dp[2] = [1,1]; dp[1] = [0,1];

    for (let i = 3; i <= K; i++) {
        dp[i][0] = dp[i-2][0] + dp[i-1][0];
        dp[i][1] = dp[i-2][1] + dp[i-1][1];
    }

    return dp[K].join(' ');
}

console.log(solve(input));