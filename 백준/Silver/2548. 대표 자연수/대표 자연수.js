const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const nums = input[1].split(' ').map(Number).sort((a,b) => a-b);

    return nums[Math.floor((N-1)/2)];
}

console.log(solve(input));
