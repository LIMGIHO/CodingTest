const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('./dev/stdin', 'utf8'),
    crlfDelay: Infinity,
  });

let cRow = 0;
let n;
rl.on('line', (line) => {
    if (cRow === 0) {
        n = Number(line);
    } else {
        const arr = line.split(' ').map(Number);
        const Ti = arr[0];
        let candidate = '';
        let count = 0;
        for (let i = 1; i <= Ti; i++) {
            if (count === 0) {
                candidate = arr[i];
                count++;
            } else if (candidate === arr[i]) count++;
            else count--;
        }

        count = 0;
        for (let i = 1; i <= Ti; i++) {
            if (candidate === arr[i]) count++;
        }

        console.log(count > Ti/2 ? candidate : 'SYJKGW')
    }

    cRow++;
    if (cRow > n) {
        rl.close();
    }
})