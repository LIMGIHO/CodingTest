const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    
    const dp = [[[1]]];

    const w = (a,b,c) => {

        if (!dp[a]) dp[a] = [];
        if (!dp[a][b]) dp[a][b] = [];

        if (dp[a][b][c]) return dp[a][b][c];

        if (a <= 0 || b <= 0 || c <= 0) return 1;

        if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

        if (a < b && b < c) {
            dp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
        } else {
            dp[a][b][c] =  w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
        }

        return dp[a][b][c];
    }

    const answer = [];
    for (const i of input) {
        const [a,b,c] = i.split(' ').map(Number);

        if (a === -1 && b === -1 && c === -1) break;
        answer.push(`w(${a}, ${b}, ${c}) = ${w(a,b,c)}`);
    }

    return answer.join('\n');
}

console.log(solve(input));


