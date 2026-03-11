const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,K] = input[0].split(' ').map(Number);
    const dp = Array.from({length:K+1});
    dp[0] = 0;

    for (let i = 1; i <= K; i++) {
        dp[i] = dp[i-1] + i;
    }

    if (dp[K] > N) return -1;
    
    const adder = (N - dp[K]) % K === 0 ? 0 : 1;
    // console.log(dp, adder)
    return dp[K] - dp[K-1] - 1 + adder;
}

console.log(solve(input));