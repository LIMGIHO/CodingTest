const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

let cnt = arr[0];
let cur_loc = '1';

for (let i = 1; i <= cnt; i++) {
    const[a,b] = arr[i].split(' ');
    if (a == cur_loc) cur_loc = b;
    else if (b == cur_loc) cur_loc = a;
}

console.log(cur_loc);