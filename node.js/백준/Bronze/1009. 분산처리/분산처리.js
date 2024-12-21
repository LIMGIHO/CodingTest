const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let cnt = arr[0];

for (let i = 1; i <= cnt; i++) {
    let [a,b] = arr[i].split(' ');
    let result = 1;
    while (b > 0) {
        result = (result * a) % 10;
        b--;
    }
    if (result === 0) result = 10;
    console.log(result);
}
