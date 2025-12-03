const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const answer = input.slice(1)
                    .map(v => v.split(' ').map(Number))
                    .sort((a,b) => {
                        if (a[0] === b[0]) return a[1] - b[1];

                        return a[0] - b[0];
                    });

    return answer.map(v => v.join(' ')).join('\n');
}

console.log(solve(input));