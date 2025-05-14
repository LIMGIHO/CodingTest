const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let arr = [];

const solution = () => {
  let answer = [];
  let m = 1;
  let temp = 0n;
  
  for (const v of arr) {
    let rem = 0n;   // 1, 11, 111, … 을 v 로 나눈 나머지
    let m   = 0;    // 1이 몇 개 이어졌는지

    // (최소 m 을 찾을 때까지 무한 루프)
    while (true) {
      m++;
      rem = (rem * 10n + 1n) % BigInt(v);
      if (rem === 0n) {
        answer.push(m);
        break;
      }
    }
  }
  
  console.log(answer.join('\n'));
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);
  
  arr.push(temp[0]);
  
     
 }).on("close", function () {  
  solution();
 });