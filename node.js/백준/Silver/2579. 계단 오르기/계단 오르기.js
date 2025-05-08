
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let stairs = [0];

const solution = () => {
  
  let dp = Array.from({length:n+1}, () => 0);
  dp[1] = stairs[1];
  dp[2] = dp[1] + stairs[2];

  for (let i = 3; i <= n; i++) {
    let sum1 = dp[i-3] + stairs[i] + stairs[i-1];
    let sum2 = dp[i-2] + stairs[i];
    
    dp[i] = Math.max(sum1, sum2);
  }

  console.log(dp[n]);
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
  } else {
    stairs.push(temp[0]);
  }
     
 }).on("close", function () {  
  solution();
 });
