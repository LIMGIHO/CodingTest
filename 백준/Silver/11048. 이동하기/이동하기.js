const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [n, m] = input[0].split(' ').map(Number);
    const maze = input.splice(1).map(m => m.split(' ').map(Number));
    
    // const dfs = (cx, cy, candies) => {
    //     if (cx === n-1 && cy === m-1) {
    //         answer = Math.max(answer, candies);
    //         return;
    //     };

    //     for (const [dx, dy] of direct) {
    //         const nx = cx + dx;
    //         const ny = cy + dy;
                        
    //         if (nx < n && ny < m) {    
    //             dfs(nx, ny, candies + maze[nx][ny]);
    //         }
    //     }
    // }
    // dfs(0,0,maze[0][0]);

    const dp = Array.from({length:n+1}, () => Array(m+1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + maze[i-1][j-1];
        }
    }
    return dp[n][m];
}

console.log(solve(input));


