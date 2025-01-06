const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");

let target = arr[0];
let answer = target;

let acc = 1;
let adder = 1;

while (target > acc) {
    adder++;
    acc += adder;
}
//adder 홀수 : (0,adder) -> acc - adder만큼 (++, --)
//adder 짝수 : (adder,0) -> acc - adder만큼 (--, ++)
const diff = acc - target;
const a = adder % 2 != 0 ? diff + 1 : adder - diff;
const b = adder % 2 == 0 ? diff + 1 : adder - diff;

console.log(a + "/" + b);
