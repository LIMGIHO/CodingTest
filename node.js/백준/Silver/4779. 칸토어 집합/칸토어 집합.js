const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let arr = [];

const solution = () => {

  for (const x of arr) {
    let temp = ['-'];
    for (let i = 0; i < x; i++) {
      let empty = Array.from({length: Math.pow(3,i)}, () => ' ');

      temp = temp.concat(empty, temp);
      
    }

    console.log(temp.join(''));
  }
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);
  
  arr.push(temp[0]);
  
     
 }).on("close", function () {  
  solution();
 });

