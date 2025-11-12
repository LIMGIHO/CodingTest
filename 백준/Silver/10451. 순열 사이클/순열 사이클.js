const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const T = Number(input.shift());

  const getCycle = (que, check, graph) => {
    
    while (que.length) {
      const st = que.shift();
      if (check[st]) continue;
      
      check[st] = true;
      if (st === graph[st]) return;

      que.push(graph[st]);
    }
  }

  const answer = [];
  for (let t = 0; t < T; t++) {
    let cycle = 0;
    const N = Number(input.shift());
    const check = Array.from({length:N+1}, () => false);
    const graph = {};
    input.shift().split(' ').map((num, i) => {
      graph[i+1] = +num;
    });

    for (let i = 1; i <= N; i++) {
      if (check[i]) continue;

      cycle++;
      getCycle([i], check, graph);
    }

    answer.push(cycle);
  }

  return answer.join('\n');
}

console.log(solve(input));
