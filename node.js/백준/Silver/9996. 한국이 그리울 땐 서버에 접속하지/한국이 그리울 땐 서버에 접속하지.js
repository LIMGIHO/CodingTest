const fs = require('fs');

function solve(input) {
  const lines = input.trim().split(/\r?\n/);
  const n = +lines.shift();
  const p = lines.shift().split("*");
  const arrStr = lines;
  
  const answer = [];
  for (const str of arrStr) {
    if (str.length < p[0].length + p[1].length) answer.push("NE")
    else if (str.trim().startsWith(p[0]) && str.trim().endsWith(p[1]))
      answer.push("DA");
    else answer.push("NE");
  }
  console.log(answer.join("\n"));
  // console.log(lines)
}

const input = fs.readFileSync('./dev/stdin', 'utf-8');
solve(input);
