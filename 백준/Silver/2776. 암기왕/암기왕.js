const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const T = Number(input[0]);

    const answer = [];
    let idx = 1;
    for (let i = 0; i < T; i++) {
        const N = Number(input[idx++]);
        const note1 = new Set(input[idx++].split(' ').map(Number));
        const M = Number(input[idx++]);
        input[idx++].split(' ').forEach(num => {
            if (note1.has(+num))
                answer.push('1');
            else
                answer.push('0');
        });
    }

    return answer.join('\n');
}

console.log(solve(input));