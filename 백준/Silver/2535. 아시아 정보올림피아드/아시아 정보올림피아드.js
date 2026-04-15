const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const list = input.slice(1).map(str => str.split(' ')
                    .map(Number))
                    .sort((a,b) => b[2] - a[2]);
    const countrySummry = {

    }

    const answer = [];
    for (let i = 0; i < N; i++) {
        const [country, student, score] = list[i];

        if ((countrySummry[country] || 0) < 2) {
            answer.push(list[i].slice(0,2).join(' '));
            countrySummry[country] = (countrySummry[country] || 0) + 1;
        }

        if (answer.length === 3) break;
    }

    return answer.join('\n');
}

console.log(solve(input));