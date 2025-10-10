const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  const arr = [
    ['SHIP NAME      CLASS          DEPLOYMENT IN SERVICE'],
    ['N2 Bomber      Heavy Fighter  Limited    21        '],
    ['J-Type 327     Light Combat   Unlimited  1         '],
    ['NX Cruiser     Medium Fighter Limited    18        '],
    ['N1 Starfighter Medium Fighter Unlimited  25        '],
    ['Royal Cruiser  Light Combat   Limited    4         ']
  ]
  
  return arr.join('\n')
};

console.log(solve(input));
