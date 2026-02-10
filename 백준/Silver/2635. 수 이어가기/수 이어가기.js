const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    let answer = [0,''];

    for (let i = N; i >= 0; i--) {
        const dp = [N, i];
        let idx = 2;
        
        while (dp[idx-2] - dp[idx-1] >= 0) { 
            const next = dp[idx-2] - dp[idx-1];
            dp[idx++] = next;
        }

        if (answer[0] < dp.length) {
            answer[0] = Math.max(answer[0], dp.length);
            answer[1] = dp.join(' ');
        }
    }

    return answer.join('\n');
}

console.log(solve(input));