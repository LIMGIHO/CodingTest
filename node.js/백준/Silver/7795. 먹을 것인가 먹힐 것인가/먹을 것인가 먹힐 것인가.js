const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let T;
let N,M;
let arr = [];

const solution = () => {
    let answer = [];

    for (let i = 0; i < T; i++) {
      const [N, M] = arr[i*3];
      const A = arr[i*3 + 1].sort((a,b) => a-b);
      const B = arr[i*3 + 2].sort((a,b) => a-b);
      const dp = Array.from({length:A.length+1});
      dp[0] = 0;

      let p1 = 0, p2 = 0;
      let count = 0;
      
      const setP1 = (idx) => {
        dp[idx] = dp[idx-1] + count;
      }

      while (p1 < A.length && p2 <= B.length) {

        if (p2 === B.length) {
          setP1(++p1);
          break;
        }

        if (A[p1] > B[p2]) {
          count++;
          p2++;
        } else {
          setP1(++p1);
        }
      }

      for (let i = p1+1; i <= A.length; i++) {
        setP1(i);
      }

      console.log(dp[A.length]);
    }

    // console.log(T, N, M, arr);
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);
  
  if (!T) T = temp[0];
  else arr.push(temp);

  
     
 }).on("close", function () {  
  solution();
 });

