const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
 
    const answer = [];
    const temp = Array.from({length: N});
    // const check = Array.from({length:N+1}, () => false);
    const dfs = (start, depth = 0) => {
        if (depth === M) {
            answer.push(temp.join(' ').trim());
            return;
        }

        for (let i = 1; i <= N; i++) {
            // if (check[i]) continue;

            // check[i] = true;
            temp[depth] = i;
            dfs(i, depth+1);
            // check[i] = false;
        }
    }

    dfs();
    
    return answer.join('\n');
}

console.log(solve(input));