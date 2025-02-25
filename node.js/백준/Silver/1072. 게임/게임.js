const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [X, Y] = input[0].split(' ').map(Number);

if(X==Y){
  console.log(-1)
}else{
  const C = Math.floor(Y*100/X)+1
  if(C==100){
    console.log(-1)
  }else{
    const Z = Math.ceil((C*X-100*Y)/(100-C))
    console.log(Z);
  }
}