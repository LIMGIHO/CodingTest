const fs = require('fs');
const { compileFunction } = require('vm');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const que = [];

    let answer = [];
    for (let i = 1; i <= N; i++) {
        const [command, num] = input[i].split(/\s+/);

        if (command === 'push') {
            que.push(num);
        } else if (command === 'pop') {
            answer.push(que.length ? que.shift() : '-1');
        } else if (command === 'size') {
            answer.push(que.length);
        } else if (command === 'empty') {
            answer.push(que.length ? 0 : 1);
        } else if (command === 'front') {
            answer.push(que.length ? que[0] : -1);
        } else if (command === 'back') {
            answer.push(que.length ? que[que.length-1] : -1);
        }
    }

    return answer.join('\n');
}

console.log(solve(input));
