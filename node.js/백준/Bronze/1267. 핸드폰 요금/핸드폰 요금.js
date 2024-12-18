const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

arr = arr[1].split(' ')

const calc = (arrMin) => {
    let yPlan = [30, 10];
    let mPlan = [60, 15];
    let m = 0;
    let y = 0;
    for (let i = 0; i < arrMin.length; i++) {
        let min = arrMin[i];
        y += (Math.floor(min /yPlan[0]) + 1) * yPlan[1];
        m += (Math.floor(min / mPlan[0]) + 1) * mPlan[1];
    }

    if (m == y) return ["Y M", y];
    if (m > y) return ["Y", y];
    if (m < y) return ["M", m];
}


console.log(calc(arr).join(' '));
