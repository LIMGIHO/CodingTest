const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const n = Number(input[0]);
    const k = Number(input[1]);
    const cards = input.slice(2).map(Number);

    const list = Array.from({length:k});
    const used = Array.from({length:n}, () => 0);
    const answer = new Set();
    const dfs = (lv) => {
        if (lv === k) {
            answer.add(list.join(''));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (used[i] === 1) continue;

            used[i] = 1;
            list[lv] = cards[i];
            dfs(lv+1);
            used[i] = 0;
        }
    }

    dfs(0);

    return answer.size;
}

console.log(solve(input));