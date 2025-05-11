const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin")
});

let computers;
let nodes;
let graph = [];

const solution = () => {

  let set = new Set([1]);
  let que = [1];

  while (que.length) {
    const c = que.shift();
    const arr = graph[c];

      if (!arr) continue;
      
    for (a of arr) { 
      if (!set.has(a)) {
        que.push(a);
        set.add(a);
      }
    }
  }
  
  console.log(set.size - 1);
}

rl.on("line", function (line) {
  //여기서 한줄씩 처리해야됨
  let temp = line.split(" ").map(Number);

  if (!computers) {
    computers = temp[0];
  } else if (!nodes) {
    nodes = temp[0];
  }
  else {
      const [a,b] = [temp[0], temp[1]];
      if (!graph[a]) graph[a] = [];
      graph[a].push(b);

      if (!graph[b]) graph[b] = [];
      graph[b].push(a);
  }
     
 }).on("close", function () {  
  solution();
 });