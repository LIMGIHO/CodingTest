const fs = require("fs");
const arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let count = arr[0];
let sum = 0n;

for (let i = 1; i < arr.length; i++) {    
    count--;
    sum += BigInt(arr[i]);
    if (count == 0) {
        console.log(sum == 0 ? "0" : sum > 0 ? "+" : "-");
        sum = 0n;
        count = +arr[++i];
    }
}