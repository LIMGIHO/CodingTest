const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const [W, H, X, Y, P] = input.shift().split(" ").map(Number);
const R = H / 2;
let answer = 0;

for (const arr of input) {
    const [x,y] = arr.split(" ").map(Number);

    if (X <= x && Y <= y && X+W >= x && Y+H >= y) {
        answer++;
    } else {
        const distance1 = Math.sqrt((X - x) ** 2 + ((Y+R) - y) ** 2);
        const distance2 = Math.sqrt((x - (X+W)) ** 2 + (y - (Y+R)) ** 2);
        if (R >= distance1 || R >= distance2) answer++;
    }
}

console.log(answer);