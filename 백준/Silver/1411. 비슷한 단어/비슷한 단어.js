const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');


const solve = (input) => {
  const n = Number(input[0]);
  const letters = input.slice(1);

  const summary = [];
  for (const letter of letters) {
    const map = new Map();
    let idx = 0;
    let reg = [];
    for (const l of letter.split('')) {
      if (!map.has(l)) {
        map.set(l, idx);
        idx++;
      } 
      reg.push(map.get(l));
    }
    
    summary.push(reg.join(','));
  }
  
  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i+1; j < n; j++) {
      if (summary[i] === summary[j]) answer++;
    }
  }

  return answer;
};

console.log(solve(input));
