const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);

    return [...new Set(arr)].sort((a, b) => a - b).join(' ');
}

console.log(solve(input));