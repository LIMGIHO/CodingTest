const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let dp = [0n,1n,2n];
let arr = [];

const get2chinsu = () => {
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  console.log(dp[n].toString());
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
  } 
     
 }).on("close", function () {  
  get2chinsu();
 });