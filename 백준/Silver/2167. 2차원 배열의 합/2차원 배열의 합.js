const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [n,m] = input[0].split(' ').map(Number);
  const arr = input.slice(1,n+1).map(r => r.split(' ').map(Number));
  const k = Number(input[n+1]);

  const getSum = (i,j,x,y) => {
    let sum = 0;
    for (let row = i; row <= x; row++) {
      for (let col = j; col <= y; col++) {
        sum+= arr[row-1][col-1];
      }
    }

    return sum;
  }

  let answer = [];
  for (const temp of input.slice(n+2)) {
    const  [i,j,x,y] = temp.split(' ').map(Number)
    
    answer.push(getSum(i,j,x,y))
  }

  return answer.join('\n');
};

console.log(solve(input));
