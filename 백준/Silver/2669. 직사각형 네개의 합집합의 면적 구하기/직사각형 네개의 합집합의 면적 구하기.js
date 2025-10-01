const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const squares = input.map(a => a.split(' ').map(Number));
  const flat = Array.from({length:10000}, () => 0);

  for (const square of squares) {
    const [x1,y1,x2,y2] = square
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        const idx = (i - 1) * 100 + (j-1);

        flat[idx] = 1;
      }
    }
  }

  return flat.reduce((acc,v) => acc + v,0);
};

console.log(solve(input));
