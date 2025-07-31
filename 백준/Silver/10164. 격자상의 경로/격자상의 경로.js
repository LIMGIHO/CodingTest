const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [n,m,k] = input[0].split(' ').map(Number);
    const board = Array.from({length: n+1}, () => new Array(m+1).fill(false));

    let answer = 0;

    const dfs = (x,y, isPassed = false) => {
        if (x > n || y > m) return;
        if (k === 0 || (x-1)*m+y === k) isPassed = true;
        if (x === n && y === m) {
            if (isPassed) answer++;
            return;
        }

        dfs(x+1, y, isPassed);
        dfs(x, y+1, isPassed);        
    }

    dfs(1,1);
    return answer;
}

console.log(solve(input));


