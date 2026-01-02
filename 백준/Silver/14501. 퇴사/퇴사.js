const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const arr = input.slice(1).map(str => str.split(' ').map(Number));
    const dp = Array.from({length:N}, () => 0);

    let max = 0;
    for (let i = 0; i < N; i++) {
        const [t, p] = input[i+1].split(' ').map(Number);
        
        if (i + t - 1 < N)
            dp[i+t - 1] = Math.max(dp[i], dp[i+t-1], max+p); 

        if (max < dp[i]) max = dp[i]
        // console.log("====", dp, i, t, p, "max", max)
    }

    return Math.max(...dp);
}

console.log(solve(input));