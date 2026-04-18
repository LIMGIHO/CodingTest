const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let t = 0;
    const target = input[t++];
    const N = Number(input[t++]);

    let answer = 0;
    for (let i = 0; i < N; i++) {
        const str = input[t] + input[t++];

        if (str.includes(target))
            answer++;
    }

    return answer;
}

console.log(solve(input));

