const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [n,k] = input[0].split(' ').map(Number);
    const pascal = Array.from({length:n+1}, () => new Array(n));
    pascal[0][0] = 1; pascal[1][0] = 1; pascal[1][1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i-1)
                pascal[i][j] = 1;
            else
                pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
    }

    return pascal[n][k-1];
}

console.log(solve(input));