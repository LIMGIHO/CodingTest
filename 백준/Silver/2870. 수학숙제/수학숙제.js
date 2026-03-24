const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const strs = input.slice(1);

    const answer = [];
    for (let i = 0; i < N; i++) {
        const nums = strs[i].match(/\d+/g);
        if (nums) answer.push(...nums.map(v => BigInt(v)));
    }

    return answer.sort((a,b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }).join('\n');
}

console.log(solve(input));
