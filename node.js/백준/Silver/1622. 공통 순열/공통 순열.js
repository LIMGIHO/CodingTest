const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let answer = '';

for (let i = 0; i < input.length; i+=2) {
    const str1 = input[i].split('').sort();
    const str2 = input[i+1].split('').sort();
    const same = [];

    let idx1 = 0, idx2 = 0;
    while (idx1 < str1.length && idx2 < str2.length) {
        if (str1[idx1] === str2[idx2]) {
            same.push(str1[idx1]);
            idx1++;
            idx2++;
        } else if (str1[idx1] < str2[idx2]) {
            idx1++;
        } else {
            idx2++;
        }
    }
    console.log(same.sort().join(''))
}