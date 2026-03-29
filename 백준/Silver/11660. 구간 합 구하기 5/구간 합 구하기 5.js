const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const nums = [[], ...input.slice(1,N+1).map(arr => [0,...arr.split(' ').map(Number)])];
    const ranges = [[], ...input.slice(N+1).map(arr => [0,...arr.split(' ').map(Number)])];
    const dp = Array.from({length:N+1}, () => Array(N+1).fill(0));
    
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            dp[i][j] = dp[i][j-1] + nums[i][j];
        }
    }
    
    const answer = [];
    for (let i = 1; i <= M; i++) {
        const [_, x1,y1,x2,y2] = ranges[i];
        let sum = 0
        for (let x = x1; x <= x2; x++) {
            sum += dp[x][y2] - dp[x][y1-1];
        }

        answer.push(sum);
    }

    return answer.join('\n');
}

console.log(solve(input));
