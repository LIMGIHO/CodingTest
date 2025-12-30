const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const set = new Set();

    let answer = 0;
    for (let i = 1; i <= N; i++) {
        if (input[i].trim() === 'ENTER') {
            answer += set.size;
            set.clear();
        } else
            set.add(input[i].trim());
    }

    return answer + set.size;
}

console.log(solve(input));