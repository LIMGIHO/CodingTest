const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const N = Number(input.shift())
input.sort();
input.sort((a,b) => {
    if (a.length !== b.length) return a.length - b.length;

    const sumA = a.split('').reduce((acc,v) => !isNaN(v) ? acc + Number(v) : acc, 0);
    const sumB = b.split('').reduce((acc,v) => !isNaN(v) ? acc + Number(v) : acc, 0); 
    
    if (sumA !== sumB) return sumA - sumB;
})

console.log(input.join('\n'))