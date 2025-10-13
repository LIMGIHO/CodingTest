const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const answer = [];
  for (let i = 0; i < input.length; i++) {
    const wgt = Number(input[i]);
    if (wgt === -1) break;

    const result = (wgt * 0.167).toFixed(2);
    answer.push(`Objects weighing ${wgt.toFixed(2)} on Earth will weigh ${result} on the moon.`)
  }

  return answer.join('\n');
}

console.log(solve(input));
