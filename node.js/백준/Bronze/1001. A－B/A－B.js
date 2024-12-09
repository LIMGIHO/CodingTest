const fs = require('fs');
const [a,b] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ');
console.log(a-b);