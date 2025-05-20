const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let T;
let arr = [];

const solution = () => {
    let answer = [];

    const DFS = (n, sum, temp) => {
      if (sum === n) {
        answer.push(temp);
        return;
      } else if (sum > n) return;

      for (const a of [1,2,3]) {
        DFS(n, sum+a, [...temp, a]);
      }
    }

    for (const n of arr) {
      DFS(n, 0, []);
      console.log(answer.length);
      answer = [];
    }
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);
  
  if (!T) T = temp[0];
  else arr.push(temp[0]);

  
     
 }).on("close", function () {  
  solution();
 });
