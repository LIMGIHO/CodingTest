const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const G = input.slice(1).map((arr,i) => {
        const result = [];
        const row = arr.split(' ');
        for (let idx = 0; idx < row.length; idx++) {
            if (row[idx] === '1') result.push(idx);
        }

        return result;
    });

    const answer = Array.from({length:N}, () => Array(N).fill(0));
    for (let i = 0; i < N; i++) {
        const que = [...G[i]];
        while (que.length) {
            const next = que.shift();
            if (answer[i][next] === 1) continue;

            answer[i][next] = 1;
            que.push(...G[next]);
        }
    }

    return answer.map(arr => arr.join(' ')).join('\n');
}

console.log(solve(input));

