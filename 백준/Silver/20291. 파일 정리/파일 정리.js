const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const files = input.slice(1).map(f => f.split('.'));

    const map = new Map();
    for (let i = 0; i < N; i++) {
        const ext = files[i][1];
        map.set(ext, (map.get(ext) || 0) + 1);
    }

    return [...map].sort()
        .map(file => file.join(' '))
        .join('\n');
}

console.log(solve(input));