const fs = require('fs');

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M, V] = input[0].split(' ').map(Number);

// 1) 인접리스트 초기화
const graph = Array.from({ length: N+1 }, () => []);

// 2) 간선 추가
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// 3) 정점번호 오름차순 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// 4) DFS
const visitedDFS = Array(N+1).fill(false);
const resultDFS = [];
function dfs(u) {
  visitedDFS[u] = true;
  resultDFS.push(u);
  for (const v of graph[u]) {
    if (!visitedDFS[v]) dfs(v);
  }
}
dfs(V);

// 5) BFS
const visitedBFS = Array(N+1).fill(false);
const resultBFS = [];
const queue = [V];
visitedBFS[V] = true;

while (queue.length > 0) {
  const u = queue.shift();
  resultBFS.push(u);
  for (const v of graph[u]) {
    if (!visitedBFS[v]) {
      visitedBFS[v] = true;
      queue.push(v);
    }
  }
}

// 6) 출력
console.log(resultDFS.join(' '));
console.log(resultBFS.join(' '));