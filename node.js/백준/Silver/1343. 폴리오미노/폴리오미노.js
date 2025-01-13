const fs = require("fs");
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim();

if (input.replaceAll('.','') === '') return console.log(input);

let len = 0;
let answer = '';
for (let v of input.split('')) {
  if (v === '.') {
    if (len === 2 ) {
      answer += 'BB.';
      len = 0;
    } else if (len === 0) {
      answer += '.';
      continue;
    } else return console.log('-1');
  } else {
    len++;
    if (len === 4) {
      answer += 'AAAA';
      len = 0;
    }
  }
}

if (len === 2) answer += 'BB';
else if (len !== 0) return console.log('-1');

console.log(answer);