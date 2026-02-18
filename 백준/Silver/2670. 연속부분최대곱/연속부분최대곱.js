const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);

    const arr = input.slice(1).map(Number);
    const dp = Array.from({length:N}, () => 0);
    dp[0] = arr[0];
    for (let i = 1; i < N; i++) {
        dp[i] = Math.max(dp[i-1] * arr[i], arr[i]);

    }

    // console.log(dp)
    return Math.max(...dp).toFixed(3)
}

console.log(solve(input));