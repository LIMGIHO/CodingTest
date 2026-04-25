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
    const que = [R];
    let h = 0, t = 0; order = 1;
    const visited = new Uint8Array(N+1);
    visited[R] = 1;
    while (h <= t) {
        const idx = que[h++];
        answer[idx-1] = order++;
        if (!graph[idx]) continue;

        const nexts = graph[idx].sort((a,b) => a-b);
        for (const next of nexts) {
            if (visited[next] === 1) continue;

            visited[next] = 1;
            que.push(next);
            t++;
        }
    }

    return answer.join('\n');
}

console.log(solve(input));
