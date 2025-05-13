const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let x;
let arr;

const solution = () => {
  let answer = 0;
  let nums = Array.from({length:1000001}, () => 0);
  
  for (const a of arr) {
    nums[a] = 1;
  }

  for (let i = 0; i < n; i++) {
    const a = arr[i];
    const diff = x-a;
    if (diff !== a && nums[diff] === 1) {
      answer++;
      nums[a] = 0;
      nums[x-a] = 0;
    }
  }

  console.log(answer);
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
  } else if (!arr) {
    arr = temp;
  } else {
    x = temp[0];
  }
     
 }).on("close", function () {  
  solution();
 });