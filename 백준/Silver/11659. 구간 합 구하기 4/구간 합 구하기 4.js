const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const nums = input[1].split(' ').map(Number);

    const dp = Array.from({length:N+1}, () => 0);
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i-1] + nums[i-1];
    }

    const answer = [];
    for (let row = 2; row < M+2; row++) {
        const [i,j] = input[row].split(' ').map(Number);

        answer.push(dp[j] - dp[i-1]);
    }

    return answer.join('\n');
}

console.log(solve(input));