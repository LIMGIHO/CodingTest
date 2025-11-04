const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const N = Number(input[0]);
  const physique = input.slice(1).map(p => p.split(' ').map(Number));

  const answer = [];
  for (let i = 0; i < N; i++) {
    const [weight,height] = physique[i];
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) continue;

      const [w,h] = physique[j];
      if (w > weight && h > height) rank++;
    }
    answer.push(rank);
  }

  return answer.join(' ');
}

console.log(solve(input));
