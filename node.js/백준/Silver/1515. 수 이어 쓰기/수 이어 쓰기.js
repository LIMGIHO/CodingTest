const fs = require("fs");
const readline = require('readline');
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const numArr = input.shift().toString().trim().split('').map(Number);
let now_num = 0;
let now_idx = 0;

while (true) {
    now_num += 1

    nowArr = now_num.toString().split('').map(Number);
    for (let i = 0; i < nowArr.length; i++) {
        if (nowArr[i] === numArr[now_idx]) {
            now_idx += 1;
            if (now_idx >= numArr.length) {
                break;
            }
        }
    }

    if (now_idx >= numArr.length) {
        console.log(now_num);
        break;
    }
}