const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

for (let i = 1; i < input.length; i++) {
  const [k, n] = input[i].split(" ");
  let dp = Array(+n+1);
  dp[0] = 1n;
  dp[1] = 1n;
  for (let j = 2; j <= +n+1; j++) {
    dp[j] = dp[j-1] * BigInt(j);
  }
  
  console.log((dp[n] / (dp[k] * dp[n-k])).toString());
}