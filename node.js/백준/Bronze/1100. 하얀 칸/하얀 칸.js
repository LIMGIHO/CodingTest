const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let result = 0;
arr.forEach((row,i) => {
    const cells = row.split('');
    if (i % 2 == 0) {
        result += cells.reduce((acc,v,j) => {
            if (j % 2 == 0 && v == 'F') return acc + 1;
            else return acc;
        }, 0);
    }

    if (i % 2 == 1) {
        result += cells.reduce((acc,v,j) => {
            if (j % 2 == 1 && v == 'F') return acc + 1;
            else return acc;
        }, 0);
    }
})

console.log(result);
