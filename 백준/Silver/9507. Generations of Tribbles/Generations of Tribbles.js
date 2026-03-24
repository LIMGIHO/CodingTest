const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const fibo = Array.from({length:68});
    fibo[0] = 1n; fibo[1] = 1n; fibo[2] = 2n; fibo[3] = 4n;
    
    for (let i = 4; i <= 67; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2] + fibo[i-3] + fibo[i-4];
    }

    const answer = [];
    for (let i = 1; i <= N; i++) {
        const idx = +input[i]
        answer.push(fibo[idx]);
    }

    return answer.join('\n');
}

console.log(solve(input));
