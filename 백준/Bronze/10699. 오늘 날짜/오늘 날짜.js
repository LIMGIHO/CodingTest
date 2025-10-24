const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const now = new Date();
  const koreanTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const year = koreanTime.getFullYear();
  const month = String(koreanTime.getMonth() + 1).padStart(2, '0');
  const day = String(koreanTime.getDate()).padStart(2, '0');
  return (`${year}-${month}-${day}`);
}

console.log(solve(input));
