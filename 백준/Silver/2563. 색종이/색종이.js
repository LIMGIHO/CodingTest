const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const w = 100;
  const n = Number(input[0]);
  const triangles = input.slice(1).map(a => a.split(' ').map(Number));

  const canvas = Array.from({length:w}, () => new Array(w).fill(0));
  let answer = 0;
  for (const [x,y] of triangles) {
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < w; j++) {
        if (canvas[i][j] === 1) continue;

        if (i >= (y-1) && i <= (y + 8) && j >= (x -1) && j <= (x + 8)) {
          canvas[i][j] = 1;
          answer++;
        }
      }
    }
  }
  return answer;
};

console.log(solve(input));
