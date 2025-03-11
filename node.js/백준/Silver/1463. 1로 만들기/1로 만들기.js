const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [n] = input.shift().split(' ').map(Number);
let answer = 0;

let dp = new Array(n+1).fill(0);

for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + 1;

    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2] + 1);
}

console.log(dp[n]);