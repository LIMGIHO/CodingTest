const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let k;
let arr;

const solution = () => {

  let cur = 0;
  for (let i = 0; i < k; i++) {
    cur += arr[i];
  }
  
  let max = cur;
  for (let i = k; i < n; i++) {
    cur -= arr[i-k];
    cur += arr[i];

    max = Math.max(max, cur);
  }

  console.log(max)
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
    k = temp[1];
  } else {
    arr = temp;
  }
     
 }).on("close", function () {  
  solution();
 });
