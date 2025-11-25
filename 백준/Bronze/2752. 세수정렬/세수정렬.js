const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const arr = input[0].split(' ').map(Number).sort((a, b) => a - b);
    return arr.join(' ');
}

console.log(solve(input));
