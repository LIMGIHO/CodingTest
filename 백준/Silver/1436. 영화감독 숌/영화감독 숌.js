const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');


const solve = (input) => {
  let n = Number(input[0]);
  
  let answer = 666;
  while (n > 1) {
    answer++;

    if (answer.toString().includes('666')) {
      n--;
    }
  }
  return answer;
};

console.log(solve(input));
