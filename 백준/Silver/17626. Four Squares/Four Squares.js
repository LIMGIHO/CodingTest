const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split('\s+');

const solve = (input) => {
    const n = Number(input[0]);
    const dp = Array.from({length:n+1}, () => Infinity);
    dp[0] = 0; dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        for (let j = Math.floor(Math.sqrt(i)); j > 0; j--) {
            dp[i] = Math.min((dp[i-j*j]+1), dp[i]);
        }
    }

    return dp[n];
}

console.log(solve(input));