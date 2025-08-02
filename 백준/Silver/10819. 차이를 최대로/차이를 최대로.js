const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);
    const nums = input[1].split(' ').map(Number);
    const check = Array.from({length: n}, () => false);
    let answer = Number.MIN_VALUE;

    const sumfunction = (arr) => {
        let sum = 0;
        for (let i = 0; i < n-1; i++) {
            const [a, b] = [arr[i], arr[i+1]];

            sum += Math.abs((nums[a] - nums[b]));
        }

        return sum;
    }

    const dfs = (arr = []) => {
        if (arr.length === n) {
            answer = Math.max(answer, sumfunction(arr));
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!check[i]) {
                check[i] = true
                dfs([...arr, i]);
                check[i] = false;
            }
        }
    }
    
    dfs();
    return answer;
}

console.log(solve(input));


