const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const A = input[1].split(' ').map(Number);
    const B = input[2].split(' ').map(Number);

    A.push(...B);

    return A.sort((a,b)=>a-b).join(' ');
}

console.log(solve(input));
