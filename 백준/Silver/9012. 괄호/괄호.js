const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const T = Number(input[0]);
  const psArr = input.slice(1);

  const answer = [];
  for (let i = 0; i < T; i++) {
    const ps = psArr[i];
    const stack = [];
    for (const str of ps.split('')) {
      if (stack.length && str === ')' && stack[stack.length-1] === '(') 
        stack.pop();
      else 
        stack.push(str);
    }

    if (!stack.length) answer.push('YES');
    else answer.push('NO');
  }

  return answer.join('\n');
}

console.log(solve(input));
