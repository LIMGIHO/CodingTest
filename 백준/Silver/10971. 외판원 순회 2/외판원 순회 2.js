const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const n = Number(input[0]);
    const arr = input.slice(1).map(arr => arr.split(' ').map(Number));
    const costs = arr.reduce((acc, v, i) => {
        for (let j = 0; j < v.length; j++) {
            if (!acc[i]) acc[i] = [];

            if (j === i) continue;
            const c = v[j];
            acc[i].push([j,c]);
        }

        return acc;
    }, {});
    const check = Array.from({length:n}, () => false);

    let answer = Number.MAX_VALUE;
    const dfs = (from, depth, sum, path=[]) => {
        if (from === 0 && depth === n && check.every(c => c)) {
            // console.log("=====path", path, sum)
            answer = Math.min(answer, sum);
            return;
        }

        const cost = costs[from];
        // console.log("cost", costs, cost)
        for (const [to, c] of cost) {
            if (check[to] || !c) continue;
            check[to] = true;
            // dfs(to, depth+1, sum+c, [...path, to]);
            dfs(to, depth+1, sum+c)
            check[to] = false;
        }
    }

    //
    dfs(0, 0, 0, [0]);

    return answer;
}

console.log(solve(input));


