const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let [current, target] = input;

let minDiff = current.length;
for (let i = 0; i <= target.length - current.length; i++) {
    let diff = 0;
    for (let j = 0; j < current.length; j++) {
        const c = current.charCodeAt(j);
        const t = target.charCodeAt(j+i);

        if (c !== t) diff++; 
    }

    minDiff = Math.min(minDiff, diff);
}

console.log(minDiff);