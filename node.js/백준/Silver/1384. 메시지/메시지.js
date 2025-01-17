const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let isNum = /^[0-9]+$/;
let group = 1;
let names = [];
let memos = [];
let cur_member = 0;
for (let cur of input) {

  if (isNum.test(cur) || cur == 0) {
    let isNothing = true;
    if (names.length) {
      memos.forEach((memo,i) => {
        memo.forEach((m,j) => {
          if (m === 'N') {
            isNothing = false;
            const from = (i - j + cur_member - 1) % cur_member;
            console.log(`${names[from]} was nasty about ${names[i]}`);
          }
        })
      });

      if (isNothing) console.log('Nobody was nasty');
    }
    cur_member = Number(cur);
    names = [];
    memos = [];

    if (cur != 0 && group != 1) console.log("");
    if (cur != 0) console.log(`Group ${group}`);
    group++;
  } else {
    let arr = cur.split(" ");
    names.push(arr.shift());
    memos.push(arr);
  }
}