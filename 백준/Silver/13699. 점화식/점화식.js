const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const n = Number(input[0]);
    const dp = Array.from({length:n+1});
    dp[0] = 1n;

    for (let i = 1; i <= n; i++) {
        let l = 0; r = i-1;
        let sum = 0n;
        while (r >= 0) {
            sum += dp[l++] * dp[r--];
        }

        dp[i] = sum;
    }
    
    return dp[n].toString();
}

console.log(solve(input));