const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = Number(input.shift());
input = input.map(Number).sort((a,b) => b-a);

let answer = -1;
for (let i = 0; i < N - 2; i++) {
    const [a,b,c] = input.slice(i,i+3);
    
    if (c === undefined) {
        answer = -1;
        break;
    }

    if (a < b + c && b < a + c && c < b + a) {
        answer = a+b+c;
        break;
    }
}

console.log(answer);