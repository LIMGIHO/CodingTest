const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [a,b] = input[0].split(' ').map(Number);
  const answer = [['yt', a], ['yj',b]];

  let idx = 0;
  while (true) {
    const [_, plus_finger] = answer[idx]
    const next = (idx+1)%2;
    const finger = answer[next][1];

    answer[next][1] = finger + plus_finger;

    if (answer[idx][1] >= 5) return answer[next][0];
    idx = next;
  }
}

console.log(solve(input));
