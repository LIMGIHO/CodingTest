const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const noMix = Array.from({length:N+1}, () => new Array(N+1).fill(false));
    
    for (let i = 1; i <= M; i++) {
        const [a,b] = input[i].split(' ').map(Number);
        noMix[a][b] = true;
        noMix[b][a] = true;
    }

    let answer = 0;
    const picked = [];
    const dfs = (start) => {
        if (picked.length === 3) {
            answer++;
            return;
        }

        for (let i = start; i <= N; i++) {
            let ok = true;
            for (const pick of picked) {
                if (noMix[pick][i]) {
                    ok = false;
                    break;
                }
            }

            if (!ok) continue;

            picked.push(i);
            dfs(i+1);
            picked.pop();
        }
    }

    dfs(1);

    return answer;
}

console.log(solve(input));
