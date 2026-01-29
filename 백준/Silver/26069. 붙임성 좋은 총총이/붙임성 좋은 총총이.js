const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const set = new Set(['ChongChong']);

    for (let i = 1; i <= N; i++) {
        const [a, b] = input[i].split(' ');

        if (set.has(a) || set.has(b)) {
            set.add(a);
            set.add(b);
        }
    }

    return set.size;
}

console.log(solve(input));
