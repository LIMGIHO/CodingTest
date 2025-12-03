const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const S = input[0];
    const N = S.length;

    const answer = new Set();
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            answer.add(S.substring(i, j + 1));
        }
    }

    return answer.size;
}

console.log(solve(input));