const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const T = Number(input[0]);
    
    let idx = 1;
    const answer = [];
    for (let i = 0; i < T; i++) {
        const N = +input[idx++];
        const X = input[idx++].split(' ').map(Number);

        const dp = Array.from({length:N+1}, () => 0);
        for (let i = 1; i <= N; i++) {
            dp[i] = dp[i-1] + X[i-1];
        }

        let min = Number.MIN_SAFE_INTEGER;
        for (let i = 1; i <= N; i++) {
            let idx2 = 0;
            while (i > idx2) {
                if (min < dp[i] - dp[idx2])
                    min = dp[i] - dp[idx2];

                idx2++;
            }
        }
        answer.push(min);
    }

    return answer.join('\n')
}

console.log(solve(input));