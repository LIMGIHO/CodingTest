const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number).sort((a,b) => a-b);
    const dp = Array.from({length:N+1},  () => 0);

    let answer = 0;
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i-1] + arr[i-1];
    }

    return dp.reduce((acc, num) => acc+num, 0);
}

console.log(solve(input));