const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [A,B,N] = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");
let remain = A % B;
let answer = 0;
while (N > 1) {
    N--;
    remain = (remain * 10) % B;
}

console.log(Math.floor((remain*10)/B));