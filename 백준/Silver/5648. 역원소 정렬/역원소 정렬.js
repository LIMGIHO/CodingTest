const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
// const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
const input = fs.readFileSync(inputPath).toString().trim().split(/\s+/);

const solve = (input) => {
    let idx = 0;
    const n = +input[idx++];
    const nums = [];

    while(input[idx]) {
        const num = Number(input[idx++].split('').reverse().join(''))
        nums.push(num);
    }

    return nums.sort((a,b) => a-b).join('\n');
}

console.log(solve(input));