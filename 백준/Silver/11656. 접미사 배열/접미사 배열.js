const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const str = input[0];
    const suffixes = [];
    for (let i = 0; i < str.length; i++) {
        suffixes.push(str.substr(i));
    }

    return suffixes.sort().join('\n');
}

console.log(solve(input));