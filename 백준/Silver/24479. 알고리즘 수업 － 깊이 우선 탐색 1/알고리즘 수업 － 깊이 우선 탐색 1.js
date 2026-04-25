const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,M,R] = input[0].split(' ').map(Number);
    const graph = {};
    input.slice(1).map(str => {
        const [a,b] = str.split(' ').map(Number);
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
        
    });

    const answer = Array(N).fill(0);
    const visited = new Uint8Array(N+1);
    let order = 1;
    const dfs = (cur) => {
        visited[cur] = 1;
        answer[cur-1] = order++;
        
        if (!graph[cur]) return;
        
        for (const next of graph[cur].sort((a,b) => a-b)) {
            if (visited[next] === 1) continue;
            dfs(next);
        }
    }

    dfs(R);

    return answer.join('\n');
}

console.log(solve(input));
