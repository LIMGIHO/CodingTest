const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let sortedNum = input[0]
                .split("")
                .sort((a,b) => b-a)
                .join('');

console.log(sortedNum);