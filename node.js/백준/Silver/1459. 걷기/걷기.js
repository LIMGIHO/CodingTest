const fs = require("fs");
const readline = require('readline');
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [x,y,w,s] = input[0].split(' ').map(Number)
let answer = 0;
let diff = Math.abs(x-y);

let case1 = x*w + y*w;
let case2 = Math.min(x,y)*s + Math.min(diff*w, diff % 2 === 0 ? diff*s : (diff-1)*s+w);

answer = Math.min(case1, case2);

console.log(answer);