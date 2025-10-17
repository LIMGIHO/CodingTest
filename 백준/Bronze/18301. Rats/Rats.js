const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [n1,n2,n12] = input[0].split(' ').map(Number);
  
  return Math.floor((n1+1)*(n2+1)/(n12+1)-1);
};

console.log(solve(input));
