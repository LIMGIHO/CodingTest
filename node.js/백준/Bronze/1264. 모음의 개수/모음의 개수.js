const fs = require("fs");
const arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

arr.forEach(row => {
    if (row == '#') return;
    const vowels = row.match(/[aeiou]/gi);
    const count = vowels ? vowels.length : 0;
    console.log(count);
})