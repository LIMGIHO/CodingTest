const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [T] = input.shift();
const max = Math.max(...input.map(Number));
const fibo = Array.from({length:max+1}, () => new Array(2).fill(0));
fibo[0] = [1,0];
fibo[1] = [0,1]

for (let i = 2; i <= max; i++) {
    const [x0,x1] = fibo[i-2];
    const [y0,y1] = fibo[i-1];

    fibo[i] = [x0+y0, x1+y1];
}

for (const x of input) {
    console.log(fibo[x][0], fibo[x][1]);
}