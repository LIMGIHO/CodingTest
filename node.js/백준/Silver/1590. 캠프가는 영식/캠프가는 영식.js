const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, T] = input.shift().split(" ").map(Number);
let answer = Number.MAX_SAFE_INTEGER;
input.forEach(arr => {
    let [start, interval, cnt] = arr.split(" ").map(Number);
    cnt--;
    while (T > start) {
        start += interval;
        cnt--;

        if (cnt == 0) break;
    }
    if (cnt >= 0 && (start - T) >= 0) answer = Math.min(answer, start - T);
});

if (answer === Number.MAX_SAFE_INTEGER) answer = -1;

console.log(answer);