const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

const [a, b] = [ BigInt(input[0]), BigInt(input[1]) ]

console.log( [a+b, a-b, a*b].join('\n') )