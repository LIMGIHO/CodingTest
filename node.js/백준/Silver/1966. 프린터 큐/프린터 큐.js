const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [cnt] = input.shift().split(' ').map(Number);
let answer = [];

for (let i = 0; i < cnt; i++) {
  const [n,m] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").map(Number);
  const important = arr.map((n,i) => [i,n]);
  const sorted = [...arr].sort((a,b)=> b-a);
  let pointer = 0;

  let seq = 1;
  while (important.length) {
    const [idx, imp] = important.shift();
    
    if (idx === m && imp === sorted[pointer]) {
      answer.push(seq);
      break;
    }

    if (imp === sorted[pointer]) {
      pointer++;
      seq++;
    } else {
      important.push([idx,imp]);
    }
  }
}

console.log(answer.join("\n"));