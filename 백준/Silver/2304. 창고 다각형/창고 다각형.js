const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');


const solve = (input) => {
  const n = Number(input[0]);
  const leftMax = { idx:0, height:0 };
  const rightMax = { idx:0, height:0 };
  const beams = [];
  input.slice(1).map(arr => {
    const [idx, heigth] = arr.split(' ').map(Number);

    if (leftMax.height < heigth) {
      leftMax.idx = idx;
      leftMax.height = heigth;
    };
    if (rightMax.height <= heigth) {
      rightMax.idx = idx;
      rightMax.height = heigth;
    };

    beams[idx] = heigth;
  });

  let answer = 0;
  let curHeight = 0;
  for (let i = 0; i < leftMax.idx; i++) {
    if (curHeight < (beams[i] || 0)) {
      curHeight = beams[i];
    }

    answer += curHeight;
  }

  curHeight = 0;
  for (let i = beams.length + 1; i > rightMax.idx; i--) {
    if (curHeight < (beams[i] || 0)) {
      curHeight = beams[i];
    }

    answer += curHeight;
  }

  return answer + (rightMax.idx - leftMax.idx + 1) * leftMax.height
};

console.log(solve(input));
