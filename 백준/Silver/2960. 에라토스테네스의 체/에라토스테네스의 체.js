const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);
// const input = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);

const solve = (input) => {
  const [N,K] = input[0].split(' ').map(Number);
  const arr = Array.from({length:N+1}, () => false);
  
  let answer;
  let erase = 0;
  let i = 2;
  while (i <= N) {
    let isFinish = false;
    let next = i;

    if (!arr[next]) {
      while (next <= N) {
        if (!arr[next]) {
          arr[next] = true;
          erase++;

          if (erase === K) {
            isFinish = true;
            answer = next;
          }
        }
        if (isFinish) break;

        next += i;
      }
    }
    if (isFinish) break;
    i++;
  }
  

  return answer;
}

console.log(solve(input));
