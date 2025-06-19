const fs = require('fs');

function solve(input) {
  // console.time("시작");
  // logMemoryUsage("시작")

  let answer = [];
  const lines = input.trim().split(/\r?\n/);
  const [t] = lines.shift().split(" ").map(Number);
  for (let i = 0; i < t; i++) {
    let count = 0;
    let [m,n,k] = lines.shift().split(" ").map(Number);
    const check = Array.from({length:n}, () => new Array(m).fill(0));
    for (let j = 0; j < k; j++) {
      let [y,x] = lines.shift().split(" ").map(Number);
      check[x][y] = 1;
    }
    
    const DFS = (x,y) => {
      if (check[x][y] === 0) return;

      check[x][y] = 0;
      for (const [dx,dy] of [[1,0],[0,-1],[-1,0],[0,1]]) {
        if (x + dx < 0 || x + dx >= n || y + dy < 0 || y + dy >= m) continue;

        DFS(x+dx, y+dy)
      }
    }

    for (let ii = 0; ii < n; ii++) {
      for (let jj = 0; jj < m; jj++) {
        // console.log(check[ii][jj], ii, jj, 'count',count)
        if (check[ii][jj] === 1) {
          count++;
          DFS(ii,jj);
        }
      }
    }

    answer.push(count);
  }

  console.log(answer.join('\n'));
}


const input = fs.readFileSync('./dev/stdin', 'utf-8');
solve(input);