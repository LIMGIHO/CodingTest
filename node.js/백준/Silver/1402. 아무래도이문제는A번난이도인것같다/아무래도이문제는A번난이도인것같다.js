const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);

for (let i = 1; i < input.length; i++) {
    console.log('yes');
}