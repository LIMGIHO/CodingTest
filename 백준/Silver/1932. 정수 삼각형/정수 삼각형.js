const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const n = Number(input[0]);
    const triangle = input.slice(1).map(str => str.split(' ').map(Number))
    const dp = Array.from({length:n}, () => Array(n).fill(0));
    dp[0][0] = triangle[0][0]; 

    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < i+1; j++) {
            const max = dp[i][j];
            const nextRow = i+1;

            dp[nextRow][j] = Math.max(dp[nextRow][j], max + triangle[nextRow][j]);
            dp[nextRow][j+1] = Math.max(dp[nextRow][j+1], max + triangle[nextRow][j+1]);
        }
    }

    return Math.max(...dp[n-1]);
}

console.log(solve(input));
