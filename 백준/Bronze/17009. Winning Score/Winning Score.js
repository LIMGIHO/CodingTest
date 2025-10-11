const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath, 'utf8').trim().split('\n');

function solve(input) {
  const [a3,a2,a1,b3,b2,b1] = input.map(Number);
  const apple = a3*3+a2*2+a1*1;
  const banana = b3*3+b2*2+b1*1;

  if (apple > banana) return 'A';
  else if (banana > apple) return 'B';
  else return 'T';  
}

console.log(solve(input));
