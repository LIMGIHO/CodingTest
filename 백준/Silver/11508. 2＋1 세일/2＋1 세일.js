const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const product = input.slice(1).map(Number).sort((a,b) => b-a);

    let idx = 0;
    let answer = 0;
    while (idx < N) {
        answer += product[idx++];

        if (product[idx]) {
            answer += product[idx++];
            idx++;
        }
    }

    return answer;
}

console.log(solve(input));