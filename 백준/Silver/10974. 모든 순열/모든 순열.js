const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    let answer = [];

    const result = [];
    const dfs = (visitedBit = 0) => {
        if (result.length === N) {
            answer.push(result.join(' '));
            return;
        }

        for (let i = 1; i <= N; i++) {
            if (visitedBit & (1 << i)) continue;

            result.push(i);
            dfs(visitedBit | (1 << i));
            result.pop(); // 백트래킹: 원상복구
        }
    }

    dfs(0);

    return answer.join('\n');
}

console.log(solve(input));

