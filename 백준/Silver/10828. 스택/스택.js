const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const stack = [];
    
    const answer = [];
    for (let i = 1; i <= N; i++) {
        const [command, n] = input[i].split(/\s+/);
        // console.log("====", command, n, answer)
        if (command === 'push') {
            stack.push(n);
        } else if (command === 'pop') {
            if (stack.length > 0) answer.push(stack.pop());
            else answer.push(-1);
        } else if (command === 'size') {
            answer.push(stack.length);
        } else if (command === 'empty') {
            answer.push(stack.length === 0 ? 1 : 0);
        } else if (command === 'top') {
            if (stack.length > 0) answer.push(stack[stack.length - 1]);
            else answer.push(-1);
        }
    }

    return answer.join('\n');
}

console.log(solve(input));
