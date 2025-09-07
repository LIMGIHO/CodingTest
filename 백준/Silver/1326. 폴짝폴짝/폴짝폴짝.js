const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

const solve = (input) => {
  const n = Number(input[0]);
  const bridges = [null, ...input[1].split(' ').map(Number)];
  const [from, to] = input[2].split(' ').map(Number);

  const que = [[from, 1]];
  while (que.length) {
    const [cur, count] = que.shift();
    const jump = bridges[cur];

    // console.log("====", cur, count, jump)
    if (Math.abs(to-cur) % jump === 0) return count;

    for (let i = cur + jump; i <= n; i+=jump) {
      if (jump !== bridges[i]) que.push([i, count+1]);
    }

    for (let i = cur - jump; i > 0; i-=jump) {
      if (jump !== bridges[i]) que.push([i, count+1]);
    }
  }

  return -1;
};

console.log(solve(input));
