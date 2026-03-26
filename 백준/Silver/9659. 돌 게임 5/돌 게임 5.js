const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = BigInt(input[0]);
    // const dp = new Uint32Array(N).fill(0);
    // // 0 : SK, 1: CY
    // dp[2] = 1, dp[4] = 1;

    // for (let i = 5; i <= N; i++) {
    //     if (dp[i-1] === 0 || dp[i-3] === 0)
    //         dp[i] = 1;
    //     else 
    //         dp[i] = 0;
    // }

    // console.log(dp)
    // return dp[N] === 0 ? 'SK' : 'CY';
    return N%2n === 1n ? 'SK' : 'CY';
}

console.log(solve(input));
