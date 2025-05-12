
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let c;
let arr = [];

const solution = () => {

  const cnt = {};
  const set = new Set();
  let rank = 1;

  for (x of arr) {
    if (!cnt[x]) {
      cnt[x] = [1, rank];
      rank++;
    }
    else cnt[x][0]++;

  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], cnt[arr[i]][0], cnt[arr[i]][1]];
  }

  arr = arr.sort((a,b) => {
    if (b[1] === a[1]) return a[2] - b[2];
    return b[1] - a[1];
  }).map(row => row[0]);

  console.log(arr.join(' '));
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
    c = temp[1];
  } else {
    arr = temp;
  }
     
 }).on("close", function () {  
  solution();
 });