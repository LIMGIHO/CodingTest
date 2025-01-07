const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");

let word = arr[0];
let answer = "";

let smallest = null;

for (let i = 0; i < word.length - 2; i++) {
    const first = word.substring(0, i + 1).split("").reverse().join("");
    for (let j = i+1; j < word.length - 1; j++) {
        const second = word.substring(i + 1, j + 1).split("").reverse().join("");
        const third = word.substring(j + 1).split("").reverse().join("");

        if (!smallest || smallest > first + second + third) smallest = first + second + third;
    }
}

console.log(smallest);

