const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N,M] = input.shift().split(" ").map(Number);
let P = input.map(Number);

let answer = 0;
let price = 0;
P.forEach(p => {
    let sum = 0;
    let count = N;
    for (let i = 0; i < P.length; i++) {
        if (P[i] >= p) {
            sum += p;
            count--;
        }

        if (count === 0) break;
    }
    
    if (answer < sum) {
        price = p;
        answer = sum;
    }
})

console.log(price + ' ' + answer);