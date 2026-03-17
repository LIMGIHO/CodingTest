const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const personCard = input.slice(1).map(card => card.split(' ').map(Number));

    const isUsed = Array(5).fill(false);
    const tmp = Array(3);
    let max = 0;
    let maxIdx = 0;
    const bfs = (cur, idx, card) => {
        if (idx === 3) {
            const sum = tmp.reduce((acc, n) => acc + n, 0);
            const last = +String(sum)[String(sum).length-1];
            if (max <= last) {
                max = last;
                maxIdx = cur;
            };

            return;
        }

        //구현
        for (let i = 0; i < 5; i++) {
            if (isUsed[i]) continue;

            isUsed[i] = true;
            tmp[idx] = card[i];
            bfs(cur, idx+1,card);
            isUsed[i] = false;
        }
    }

    let i = 0;
    for (const card of personCard) {
        bfs(++i, 0, card);
    }

    return maxIdx
}

console.log(solve(input));