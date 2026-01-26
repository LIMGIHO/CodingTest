const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const scores = input.slice(1).map(Number);

    let answer = 0;
    for (let i = N - 2; i >= 0; i--) {
        let diff = 0;
        if (scores[i+1] <= scores[i])
            diff = scores[i] - scores[i+1] + 1

        answer += diff;

        scores[i] -= diff;
    }

    return answer;
}

console.log(solve(input));
