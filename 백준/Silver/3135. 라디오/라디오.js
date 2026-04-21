const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [A,B] = input[0].split(' ').map(Number);
    const N = Number(input[1]);
    const shortcuts = input.slice(2).map(Number).sort((a,b) => a-b);

    let min = Math.abs(A-B);
    for (let i = 0; i < N; i++) {
        const short = shortcuts[i];

        if (Math.abs(B - short) + 1 < min)
            min = Math.abs(B - short) + 1;
    }

    return min;
}

console.log(solve(input));
