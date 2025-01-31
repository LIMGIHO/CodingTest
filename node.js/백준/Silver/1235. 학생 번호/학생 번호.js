const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = Number(input.shift());
let len = input[0].length;
let k = 0;
let set = new Set();
while (set.size !== N) {
    k++;
    set.clear()
    for (let i = 0; i < input.length; i++) {
        set.add(input[i].substring(len-k));
    }
}

console.log(k);