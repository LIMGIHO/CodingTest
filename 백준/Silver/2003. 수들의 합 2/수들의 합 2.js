const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const [N,M] = input[0].split(' ').map(Number);
  const numbers = input[1].split(' ').map(Number);

  /**
   * 1. lt, rt 를 조정해가면서 M을 만족하는 수를 ++ 하기
   * 2. sum 이 M보다 작을 경우 rt++, sum += numbers[rt]
   * 3. sum 이 M보다 클 경우 lt++, sum += numbers[lt]
   */
  let answer = 0;
  let lt = 0; rt = 0; sum = numbers[0];
  while (lt < N && rt < N) {
    if (sum === M) {
      answer++;
      sum += numbers[++rt];
    } else if (sum > M) {
      sum -= numbers[lt++];
    } else {
      sum += numbers[++rt];
    }
  }

  return answer;
};

console.log(solve(input));
