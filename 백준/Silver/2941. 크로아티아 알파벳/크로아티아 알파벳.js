const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
  let str = input[0];
  const replaces = ['c=','c-','dz=','d-','lj','nj','s=','z='];

  replaces.forEach(r => {
    const regex = new RegExp(r.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');

    str = str.replace(regex, '@');
  });
  

  return str.length;
}

console.log(solve(input));
