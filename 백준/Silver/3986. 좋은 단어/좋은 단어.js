const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const strArr = input.slice(1);

  let answer = 0;
  for (let i = 0; i < N; i++) {
    const str = strArr[i];
    const stack = [];
    for (let j = 0; j < str.length; j++) {
      const chr = str[j];
      if (stack.length === 0) {
        stack.push(chr);
      }
      else if (stack[stack.length-1] === chr) {
        stack.pop();
      } else {
        stack.push(chr);
      }
    }
    if (stack.length === 0) answer++;
  }

  return answer;
}

console.log(solve(input));