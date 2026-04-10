const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let idx = 0
    const [N,M] = input[idx++].split(' ').map(Number);

    const rank = [];
    for (let i = 0; i < N; i++) {
        const [name, score] = input[idx++].split(' ');
        rank.push({name, score:+score});
    }

    const answer = [];
    for (let i = 0; i < M; i++) {
        const score = Number(input[idx++]);
        let lt = 0, rt = N-1, cur = 0;
        while (lt <= rt) {
            const mid = Math.floor((lt + rt) / 2);

            const r = rank[mid];
            if (r.score < score) {
                lt = mid+1;
            } else {
                cur = mid;
                rt = mid-1;
            }
        }
        answer.push(rank[cur].name);
    }
    
    return answer.join('\n')
}

console.log(solve(input));
