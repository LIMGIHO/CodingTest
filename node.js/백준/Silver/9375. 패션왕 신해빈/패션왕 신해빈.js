const fs = require('fs');

function solve(input) {
  const lines = input.trim().split('\n');
  const T = +lines[0];
  let idx = 1;

  for (let tc = 0; tc < T; tc++) {
    const n = +lines[idx++];
    const countByType = {};

    for (let i = 0; i < n; i++, idx++) {
      const [, type] = lines[idx].split(' ');
      countByType[type] = (countByType[type] || 0) + 1;
    }

    let total = 1;
    for (const type in countByType) {
      total *= (countByType[type] + 1);
    }
    console.log(total - 1);
  }
}

const input = fs.readFileSync('/dev/stdin', 'utf-8');
solve(input);
