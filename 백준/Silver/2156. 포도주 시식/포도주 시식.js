const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const wines = input.slice(1).map(Number);
    const dp = {
        used0: 0,
        used1: 0,
        used2: 0
    }

    for (let i = 0; i < N; i++) {
        const wine = wines[i];

        const used0 = dp.used0;
        const used1 = dp.used1;
        const used2 = dp.used2;

        dp.used0 = Math.max(used0, used1, used2);     
        dp.used2 = Math.max(used1 + wine, used2);
        dp.used1 = Math.max(used0 + wine, used1);
    }

    let answer = dp.used0 > dp.used1 && dp.used0 > dp.used2 ? dp.used0
            : dp.used1 > dp.used2 ? dp.used1 : dp.used2;
    return answer;
}

console.log(solve(input));
