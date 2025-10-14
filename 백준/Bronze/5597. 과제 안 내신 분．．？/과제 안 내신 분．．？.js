const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const max = 30;
  const students = new Uint8Array(max+1);
  
  for (const num of input) {
    students[Number(num)] = 1;
  }

  const answer = [];
  for (let i = 1; i <= max; i++) {
    if (students[i] === 0) answer.push(i);
  }

  return answer.join('\n');
};

console.log(solve(input));