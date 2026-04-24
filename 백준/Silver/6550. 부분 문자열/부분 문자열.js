const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
// const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
const input = fs.readFileSync(inputPath).toString().trim().split(/\s+/);

const solve = (input) => {
    let idx = 0;
    const answer = [];

    function makeSubseqRegex(s) {
        const escaped = [...s].map(ch => ch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        return new RegExp(escaped.join(".*"));
    }

    while (input[idx]) {
        const s = input[idx++];
        const t = input[idx++];

        const pattern = makeSubseqRegex(s);

        if (pattern.test(t))
            answer.push('Yes');
        else
            answer.push('No');
    }

    return answer.join('\n');
}

console.log(solve(input));