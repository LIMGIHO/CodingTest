const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const lines = input.slice(1).map(Number).sort((a,b) => b-a);

    let answer = 0;
    for (let i = 0; i < N; i++) {
        const tip = (lines[i] - i) <= 0 ? 0 : (lines[i] - i);
        answer += tip;
    }

    return answer;
}

console.log(solve(input));