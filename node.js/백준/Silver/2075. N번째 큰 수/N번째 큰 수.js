const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let n;
let que = [];
let row = 0;

const insertQue = (num) => {
  que.push(num);
  let idx = que.length - 1;

  while (idx > 0) {
    const p_idx = Math.floor((idx-1)/2);

    if (que[p_idx] > que[idx]) {
      //[que[p_idx], que[idx]] = [que[idx], que[p_idx]];
      const tmp = que[idx];
      que[idx] = que[p_idx];
      que[p_idx] = tmp;
      idx = p_idx;
    } else {
      break;
    }
  }

}

const deleteQue = () => {
  const length = que.length;
  let idx = 0;
  que[idx] = que[length-1];
  que.pop();
  
  while (true) {
    const left = idx * 2 + 1;
    const right = idx * 2 + 2;

    let smallest = idx;

    if (left < length && que[left] < que[smallest]) {
      smallest = left;
    }

    if (right < length && que[right] < que[smallest]) {
      smallest = right;
    }

    if (smallest !== idx) {
      //[que[biggest], que[idx]] = [que[idx], que[biggest]];
      const tmp = que[idx];
      que[idx] = que[smallest];
      que[smallest] = tmp;
      idx = smallest;
    } else {
      break;
    }
  }
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!n) {
    n = temp[0];
  } else {
    for (let i = 0; i < n; i++) {
      const num = temp[i];

      insertQue(num);
      if (que.length > n) deleteQue();
    }
    row++
    if (row === n) {
      rl.close();
    }
  }
     
 }).on("close", function () {
  console.log(que[0]);
 });