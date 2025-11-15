const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = parseInt(input[0]);
    const members = input.slice(1).map(m => m.split(' '))
                        .sort((a,b) => a[0] - b[0]);
    
    return members.map(m => m.join(' ')).join('\n');
}

console.log(solve(input));
