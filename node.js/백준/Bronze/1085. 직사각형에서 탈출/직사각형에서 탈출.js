const fs = require("fs");
const [x,y,w,h] = fs.readFileSync('./dev/stdin', 'utf8').trim().split(' ');
const minW = Math.min(x,w-x);
const minH = Math.min(y,h-y);
console.log(Math.min(minW, minH));