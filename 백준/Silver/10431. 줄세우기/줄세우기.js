const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    let answer = [];

    for (let i = 1; i <= N; i++) {
        const lines = input[i].split(' ').map(Number);
        const num = lines.shift();
        answer.push([num,0]);

        const line = [lines[0]];
        for (let j = 1; j < lines.length; j++) {
            line.push(lines[j]);
            let idx = j
            while (line[idx-1] > line[idx]) {
                answer[i-1][1]++;
                const temp = line[idx];
                line[idx] = line[idx-1];
                line[idx-1] = temp;
                idx--;
            }
        }
    }

    return answer.map(a => a.join(' ')).join('\n');
}

console.log(solve(input));