const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [F,S,G,U,D] = input[0].split(' ').map(Number);
    const dp = Array.from({length:F+1}, () => 0);

    if (S === G) return '0';

    const que = [S];
    let head = 0; tail = 0;
    while (head <= tail) {
        const cur = que[head++];

        if (cur === G)
            break;

        if (cur + U <= F && U > 0) {
            if (dp[cur+U] === 0 || dp[cur+U] > dp[cur] + 1) {
                tail++;
                que.push(cur+U);
                dp[cur+U] = dp[cur] + 1;
            }
        }

        if (cur - D > 0 && D > 0) {
            if (dp[cur-D] === 0 || dp[cur-D] > dp[cur] + 1) {
                tail++;
                que.push(cur-D);
                dp[cur-D] = dp[cur] + 1;
            }
        }
    }

    return dp[G] ? dp[G] : "use the stairs";
}

console.log(solve(input));