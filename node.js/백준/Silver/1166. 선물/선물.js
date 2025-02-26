const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [n, l,w,h] = input[0].split(' ').map(Number);
let low = 0;
let high = Math.min(l,w,h);

for (let i=0; i < 100; i++) {
    const mid = (low+high)/2;
    const count = Math.floor(l/mid) * Math.floor(w/mid) * Math.floor(h/mid);

    if (n <= count) low = mid;
    else high = mid;
}

console.log(low)