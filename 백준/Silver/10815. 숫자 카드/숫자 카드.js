const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = parseInt(input[0]);
    const set = new Set(input[1].split(' ').map(Number));
    const M = parseInt(input[2]);
    const numbers = input[3].split(' ').map(Number);

    const answer = [];
    for (const num of numbers) {
        if (set.has(num)) answer.push(1);
        else answer.push(0);
    }

    return answer.join(' ');
}

console.log(solve(input));
