const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const dp = Array.from({length:N+1}, () => Array(10));
    dp[1].fill(1n);

    for (let i = 2; i <= N; i++) {
        let sum = dp[i-1].reduce((acc, v) => acc+v, 0n);
        for (let j = 0; j < 10; j++) {
            dp[i][j] = sum;
            sum -= dp[i-1][j];
        }
    }

    const answer = dp[N].reduce((acc,v) => acc+v,0n) % 10007n;
    return answer.toString();
}

console.log(solve(input));