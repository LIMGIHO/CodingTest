const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/).map(Number);
let N = input.shift();
let dasom = input.shift();
let answer = 0;
let max = Math.max(...input);

while (dasom <= max) {  
  let idx = input.indexOf(max);

  dasom++;
  input[idx]--;
  answer++;
  max = Math.max(...input);
}

console.log(answer);