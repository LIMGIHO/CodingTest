const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = input.shift();
let answer = [input.shift().repeat(2)];

input.forEach(str => {
    let isInclude = false;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i].length / 2 === str.length && answer[i].includes(str)) {
            isInclude = true;
            break;
        }
    }
    if (!isInclude) answer.push(str.repeat(2));
})

console.log(answer.length);