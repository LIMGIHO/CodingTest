const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [N,M,K,X] = input[0].split(' ').map(Number);
  const graph = {};
  for(let i = 1; i <= M; i++) {
    const [from, to] = input[i].split(' ').map(Number);
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  let head = 0;
  const check = new Set();
  const que = [[X,0]];
  const answer = [];
  
  while (head < que.length) {
    const [current, move] = que[head++];

    if (move > K) continue;
    if (check.has(current)) continue;

    if (move === K ) {
      check.add(current);
      answer.push(current);
      continue;
    } 
      
    check.add(current);   

    const nexts = graph[current];
    if (!nexts) continue;
    for (const next of nexts) {
      que.push([next, move+1]);
    }
  }

  return answer.length === 0 ? '-1' : answer.sort((a,b) => a-b).join('\n');
}

console.log(solve(input));
