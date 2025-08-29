const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);
    const L = input[1].split(' ').map(Number);
    const J = input[2].split(' ').map(Number);

    const dp = Array.from({length:100}, () => 0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 100; j++) {

            if (j+L[i] < 100)
                dp[j] = Math.max(dp[j], dp[j+L[i]]+J[i]);
        }
    }

    return Math.max(...dp)
}

console.log(solve(input));