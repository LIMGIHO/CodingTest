const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);

  const answer = [];
  for (let i = 1; i <= N; i++) {
    const call = input[i];
    if (call === '0')
      answer.pop();
    else 
      answer.push(+call);
  }
  
  return answer.reduce((acc,n) => acc+n,0);
}

console.log(solve(input));
