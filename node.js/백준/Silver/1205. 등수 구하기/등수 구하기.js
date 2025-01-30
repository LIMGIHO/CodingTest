const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let [N, newScore, P] = input[0].split(" ").map(Number);
let chart = input[1]?.split(" ").map(Number).sort((a,b) => b-a);
let rank = 1;

if (N === 0) {
    console.log(1);
} else if (N > 0 && N === P && chart[N-1] === newScore) {
    console.log(-1);
} else {
    for (let i = 0; i < chart.length; i++) {
        const r = chart[i];
        if (r > newScore) rank++;
        else break
    }

    console.log(rank > P ? -1 : rank)
}