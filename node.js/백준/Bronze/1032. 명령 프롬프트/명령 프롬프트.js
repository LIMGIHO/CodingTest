const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");

let cnt = arr[0];
let answer = "";

for (let i = 0; i < arr[1].length; i++) {
    let chr = "";
    for (let j = 1; j <= cnt; j++) {
        if (chr === "") chr = arr[j].at(i);
        else {
            if (chr != arr[j].at(i)) {
                answer += "?";
                chr = "";
                break;
            }
        }
    }
    answer += chr;
}

console.log(answer);
