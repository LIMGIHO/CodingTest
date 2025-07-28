const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const answer = new Set();
    const n = Number(input[0]);
    const m = Number(input[1]);
    const relations = input.slice(2).map(str => str.split(' ').map(Number));

    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);

    for (const [a, b] of relations) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    const que = [1];
    visited[1] = true;
    const f1 = new Set(graph[1]);
    const f2 = new Set();

    while (que.length) {
        const cur = que.shift();
        const arr = graph[cur];

        if (cur !== 1 && !f1.has(cur) && !f2.has(cur)) break;

        for (const next of arr) {
            if (f1.has(next)) {
                f2.add(next);
            }
            if (!visited[next]) {
                visited[next] = true;
                que.push(next);
                answer.add(next);
            }
        }
    }
    return answer.size;
}

console.log(solve(input));


