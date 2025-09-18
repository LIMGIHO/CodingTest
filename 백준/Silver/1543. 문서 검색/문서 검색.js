const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');


const solve = (input) => {
  let target = input[0];
  const search = input[1];

  let answer = 0;
  let index = 0;
  while ((index = target.indexOf(search, index)) !== -1) {
      // 찾았을 때 처리
      answer++;
      index += search.length;
  }

  return answer;
};

console.log(solve(input));
