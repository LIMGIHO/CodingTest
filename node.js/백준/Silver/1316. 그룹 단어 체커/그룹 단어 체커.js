const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");
let answer = 0;
for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    let set = new Set();
    let x_word = "";
    let isGroup = true;
    for (let j = 0; j < word.length; j++) {
        const v = word.charAt(j);
        if (v == x_word) {
            continue;
        }

        if (set.has(v)) {
            isGroup = false;
            break;
        }

        set.add(v);
        x_word = v;
    }
    if (isGroup) answer++;
}

console.log(answer);

