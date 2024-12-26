const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");

console.log(arr[0] == '' ? 0 : arr.length);
