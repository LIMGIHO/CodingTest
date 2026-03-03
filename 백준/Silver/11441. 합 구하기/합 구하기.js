const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input[1].split(' ').map(Number);
    const M = Number(input[2]);

    const dp = Array.from({length:N+1}, () => 0);
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i-1] + arr[i-1];
    }

    const answer = [];
    for (let i = 3; i < M + 3; i++) {
        const [a,b] = input[i].split(' ').map(Number);
        
        answer.push(dp[b] - dp[a-1]);
    }
    
    return answer.join('\n');
}

console.log(solve(input));