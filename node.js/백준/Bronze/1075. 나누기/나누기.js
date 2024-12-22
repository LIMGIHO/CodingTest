const fs = require("fs");
let [N,F] = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

N = N - (N % 100);

while (N % F != 0) {
    N++;
}

console.log(N.toString().substring(N.toString().length - 2))
