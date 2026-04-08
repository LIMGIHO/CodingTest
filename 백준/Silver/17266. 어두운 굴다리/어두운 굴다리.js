const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const X = input[2].split(' ').map(Number);

    let answer = Math.max(X[0] - 0, N - X[M-1]);
    for (let i = 1; i < M; i++) {
        const diff = Math.ceil((X[i] - X[i-1]) / 2);
        
        if (answer < diff)
            answer = diff;
    }

    return answer;
}

console.log(solve(input));
