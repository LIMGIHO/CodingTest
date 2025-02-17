const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(Number);
    const dist = Math.sqrt((x1-x2)**2 + (y1-y2)**2);

    if (x1===x2 && y1 === y2 && r1 === r2) console.log(-1);
    else if (dist === r1 + r2 || dist === Math.abs(r1-r2)) console.log(1)
    else if (dist > r1 + r2 || dist < Math.abs(r1-r2)) console.log(0)
    else console.log(2);
    
}