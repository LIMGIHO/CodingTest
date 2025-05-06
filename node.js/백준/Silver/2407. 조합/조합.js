const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let m;

const solution = () => {
  let x = 1n;
  let y = 1n;

  for (let i = n; i > n - m; i--) {
    x *= BigInt(i);
  }

  for (let i = 1; i <= m; i++) {
    y *= BigInt(i);
  }

  console.log(((x) / (y)).toString());
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
    m = temp[1];
  } else {
    arr = temp;
  }
     
 }).on("close", function () {  
  solution();
 });
