const fs = require('fs');
const { compileFunction } = require('vm');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const front = [], back = [];

    let answer = [];
    for (let i = 1; i <= N; i++) {
        const [command, num] = input[i].split(/\s+/);
        switch (command) {
            case "push_front":
                front.push(num);
                break;
            case "push_back":
                if (!front.length && !back.length) front.push(num);
                else back.push(num);
                break;
            case "pop_front":
                const pop_front = front.length 
                                ? front.pop() 
                                : (back.length ? back.shift() : -1);
                answer.push(pop_front);
                break;
            case "pop_back":
                const pop_back = back.length 
                                ? back.pop() 
                                : (front.length ? front.shift() : -1);
                answer.push(pop_back);
                break;
            case "size":
                answer.push(front.length + back.length);
                break;
            case "empty":
                answer.push((front.length || back.length) ? 0 : 1);
                break;
            case "front":
                const frontVal = front.length ? front[front.length-1]
                                : (back.length ? back[0] : -1);
                answer.push(frontVal);
                break;
            case "back":
                const backVal = back.length ? back[back.length-1]
                                : (front.length ? front[0] : -1);
                answer.push(backVal);
                break;
        }
    }

    return answer.join('\n');
}

console.log(solve(input));
