const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input.slice(1).map(Number).sort((a,b) => a-b);

    return arr.join('\n');
}

console.log(solve(input));