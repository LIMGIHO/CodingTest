const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
input.shift();
input = input.map(Number)
let set = new Set(input);
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
    let start = input[i];
    let notExist = 0;
    for (let j = start; j < start + 5; j++) {
        if (!set.has(j)) notExist++;
    }

    answer = Math.min(answer, notExist);
}

console.log(answer);