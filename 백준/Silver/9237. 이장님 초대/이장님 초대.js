const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const trees = input[1].split(' ').map(Number).sort((a,b) => b-a);
    let answer = 0;

    for (let i = 0; i < N; i++) {
        const time = trees[i] + i + 2;
        if (answer < time)
            answer = time;
    }

    return answer;
}

console.log(solve(input));