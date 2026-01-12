const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const nums = input[1].split(' ').map(Number).sort((a,b) => a-b);
 
    const answer = [];
    const temp = Array.from({length: M});
    const check = Array.from({length:N}, () => false);
    const dfs = (start, depth = 0) => {
        if (depth === M) {
            answer.push(temp.join(' '));
            return;
        }

        for (let i = start; i < N; i++) {
            if (check[i]) continue;

            check[i] = true;
            temp[depth] = nums[i];
            dfs(i+1, depth+1);
            check[i] = false;
        }
    }

    dfs(0, 0);
    
    return answer.join('\n');
}

console.log(solve(input));