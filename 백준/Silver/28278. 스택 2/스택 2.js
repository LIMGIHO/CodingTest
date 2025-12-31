const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

class Stack {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        if (this.stack.length)
            return this.stack.pop();
        else 
            return -1;
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return !this.stack.length ? 1 : 0;
    }

    top() {
        return this.stack.length ? this.stack[this.stack.length-1] : -1;
    }
}

const solve = (input) => {
    const N = Number(input[0]);

    const stk = new Stack();
    let answer = [];
    for (let i = 1; i <= N; i++) {
        const op = input[i];
        if (op[0] === '1')
            stk.push(Number(op.split(' ')[1]));
        else if (op[0] === '2')
            answer.push(stk.pop());
        else if (op[0] === '3')
            answer.push(stk.size());
        else if (op[0] === '4')
            answer.push(stk.isEmpty());
        else if (op[0] === '5')
            answer.push(stk.top());
    }

    return answer.join('\n');
}

console.log(solve(input));