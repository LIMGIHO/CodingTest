const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const scores = input.map((score, idx) => {
    return [idx+1, +score]
  }).sort((a,b) => b[1] - a[1])
    .slice(0,5)
    .sort((a,b) => a[0] - b[0])
  ;

  let answer = [0, ''];
  for (const [idx, score] of scores) {
    answer[0] += score;
    if (answer[1] !== '')
      answer[1] = answer[1] + ' ' + String(idx);
    else 
      answer[1] += String(idx);
  }
  
  return answer.join('\n');
}

console.log(solve(input));
