const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const list = input.slice(1)
                    .map(str => {
                        const [name, dd, mm, yyyy] = str.split(' ');
                        return [name, +dd, +mm, +yyyy];
                    })
                    .sort((a,b) => {
                        if (a[3] !== b[3]) return b[3] - a[3];
                        if (a[2] !== b[2]) return b[2] - a[2];
                        if (a[1] !== b[1]) return b[1] - a[1];
                    })
                    ;

    return list[0][0] + '\n' + list[N-1][0];
}

console.log(solve(input));