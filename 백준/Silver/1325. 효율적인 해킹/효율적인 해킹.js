
const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

const N = +tok[p++], M = +tok[p++];

// 1) 역방향 인접리스트 (모든 노드에 빈 배열 미리)
const adj = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const a = +tok[p++], b = +tok[p++];
  adj[b].push(a); // b를 해킹하면 a로 퍼짐 (역방향 유지)
}

// 2) 방문표시: Int32Array + 세대 마킹
const vis = new Int32Array(N + 1);

// 3) 고정 큐 버퍼 (여유분)
const q = new Int32Array(N + 5);

// 4) 각 시작점의 도달 수만 저장
const reach = new Int32Array(N + 1);

for (let s = 1; s <= N; s++) {
  let head = 0, tail = 0, cnt = 0;
  const mark = s;
  vis[s] = mark;
  q[tail++] = s;

  while (head < tail) {
    const v = q[head++];
    const list = adj[v];
    for (let i = 0, L = list.length; i < L; i++) {
      const u = list[i];
      if (vis[u] === mark) continue;
      vis[u] = mark;
      q[tail++] = u;
      cnt++;
    }
  }
  reach[s] = cnt;
}

// 5) 최대값 한 번에 계산 + 출력
let maxv = 0;
for (let i = 1; i <= N; i++) if (reach[i] > maxv) maxv = reach[i];

let out = [];
for (let i = 1; i <= N; i++) if (reach[i] === maxv) out.push(i);
console.log(out.join(' '));
