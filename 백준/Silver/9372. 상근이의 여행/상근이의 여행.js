const { count } = require('console');
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let idx = 0;
    const T = Number(input[idx++]);

    let answer = [];
    for (let i = 0; i < T; i++) {
        const [N, M] = input[idx++].split(' ').map(Number);
        idx += M;
        answer.push(N-1);
    }

    return answer.join('\n');
}

console.log(solve(input));
