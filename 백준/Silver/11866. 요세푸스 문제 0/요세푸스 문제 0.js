const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,K] = input[0].split(' ').map(Number);
    const person = Array.from({length:N}, () => true);
    const answer = [];
    let idx = -1;
    while (answer.length < N) {
        let loop = K;
        while (loop > 0) {
            if (idx+1 === N) idx = -1;
            if (person[++idx]) {
                --loop;
            }
        }

        person[idx] = false;
        answer.push(idx+1);
    }

    return (`<${answer.join(', ')}>`);
}

console.log(solve(input));