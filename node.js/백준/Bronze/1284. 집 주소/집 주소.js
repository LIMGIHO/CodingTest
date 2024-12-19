const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

for (let i = 0; i < arr.length; i++) {
    let nums = arr[i];
    if (nums == "0") return;

    let width = nums.split('').reduce((acc,v) => {
        // console.log(v);
        if (v == "1") return acc + 2;
        else if (v == "0") return acc + 4;
        else return acc + 3;
    }, 0) + nums.length + 1;

    console.log(width);
}