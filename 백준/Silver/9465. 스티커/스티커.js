const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let idx = 0;
    const T = Number(input[idx++]);
    const answer = Array(T);

    for (let t = 0; t < T; t++) {
        const n = Number(input[idx++]);
        const sticker = input.slice(idx,idx+2).map(s => s.split(' ').map(Number));
        idx += 2;

        // 0 : 첫줄 선택 했을 경우
        // 1 : 첫줄 선택 안했을 경우
        // 2 : 두번째줄 선택 했을 경우
        // 3 : 두번째줄 선택 안했을 경우
        const dp = Array.from({length:n+1}, () => new Array(4).fill(0));
        for (let i = 1; i <= n; i++) {
            const prevDp = dp[i-1];
            
            dp[i][0] = Math.max(...prevDp.filter((_,j) => j != 0)) + sticker[0][i-1];
            dp[i][1] = Math.max(...prevDp);
            dp[i][2] = Math.max(...prevDp.filter((_,j) => j != 2)) + sticker[1][i-1];
            dp[i][3] = Math.max(...prevDp);
        }

        answer[t] = Math.max(...dp[n]);
    }

    return answer.join('\n');
}

console.log(solve(input));