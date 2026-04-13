const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N, gameType] = input[0].split(' ');
    const list = input.slice(1);
    const rule = {
        'Y': 1, 'F': 2, 'O': 3
    }

    return Math.floor(new Set(list).size / rule[gameType]);
}

console.log(solve(input));
