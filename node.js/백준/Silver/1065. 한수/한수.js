const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = input[0];

let answer = 0;
for (let i = 1; i <= N; i++) {
    const arr = i.toString().split("").map(Number);

    if (arr.length <= 2) answer++;
    else {
        const diff = arr[0] - arr[1];
        if (arr.every((v,i) => i === 0 || arr[i-1] - v === diff)) answer++;
    }
}

console.log(answer);