const fs = require('fs');

// /dev/stdin에서 데이터 읽기
const [a,b] = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(" ");
console.log(+a + +b);