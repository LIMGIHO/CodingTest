const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const nums = input[1].split(' ').map(Number);
    const operation = input[2].split(' ').map((op, idx) => {
        const result = [];
        if (op !== '0') {
            const sign = idx === 0 ? '+'
                        : idx === 1 ? '-'
                        : idx === 2 ? '*'
                        : '/';
            for (let i = 0; i < +op; i++) {
                result.push(sign);
            }
        }

        return result;
    }).filter(v => v.length).flat();

    const getCalculator = (op) => {
        let idx = 0;
        let result = nums[idx++];
        for (let i = 0; i < op.length; i++) {
            const sign = op[i];
            
            if (sign === '+')
                result += nums[idx++];
            else if (sign === '-')
                result -= nums[idx++];
            else if (sign === '*')
                result *= nums[idx++];
            else if (sign === '/') {
                if (result < 0) {
                    result = Math.floor(Math.abs(result) / nums[idx++]);
                    result *= -1;
                } else 
                    result = Math.floor(result / nums[idx++]);
            }
        }

        return result;
    }

    const check = Array(N-1);
    const answer = [];
    const op = [];
    const dfs = () => {
        if (op.length === N - 1) {
            const result = getCalculator(op);
            // console.log("=====", op, result)
            answer.push(result);
        }

        for (let i = 0; i < N-1; i++) {
            if (check[i] === 1) continue;

            check[i] = 1;
            op.push(operation[i]);
            dfs();
            op.pop();
            check[i] = 0;
        }
    }

    dfs();
    answer.sort((a,b) => a-b);
    return `${answer[answer.length-1]}\n${answer[0]}`
}

console.log(solve(input));

