const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = Number(input.shift());

let answer = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
    const unitPrice = input[i].split(" ").map(Number)[0];
    let salesPrice = 0;
    for (let j = 0; j < N; j++) {
        const [price, d_fee] = input[j].split(" ").map(Number);

        if (unitPrice <= price) {
            salesPrice += (unitPrice - d_fee) > 0 ? (unitPrice - d_fee) : 0;
        }
    }
    
    if (sum < salesPrice) {
        sum = salesPrice;
        answer = unitPrice;
    } else if (sum === salesPrice && answer > unitPrice) {
        answer = unitPrice;
    }
}

console.log(answer)