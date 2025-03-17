const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let N = BigInt(input[0]);

if (N === 1n) console.log(1);
else 
console.log((N * 2n - 2n).toString())