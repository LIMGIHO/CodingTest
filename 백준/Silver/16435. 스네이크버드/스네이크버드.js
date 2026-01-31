const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let [N, L] = input[0].split(' ').map(Number);
    const fruits = input[1].split(' ').map(Number).sort((a,b) => a-b);

    for (const f of fruits) {
        if (f <= L) L++;
        else break;
    }

    return L;
}

console.log(solve(input));
