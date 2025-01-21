const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let numArr = input[1].split(" ")
                .map((v,i) => ({v,from:i}))
                .sort((a,b) => (a.v - b.v))
                .map((v,i) => ({...v, to:i}))
                .sort((a,b) => a.from - b.from)
                ;

let answer = numArr.map(o => o.to).join(" ");
console.log(answer);