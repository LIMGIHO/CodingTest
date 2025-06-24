const fs = require('fs');

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solve(lines) {
    const N = Number(lines[0]);
    const arr = lines[1].split(' ').map(Number);
    let answer = [];
    let check = Array.from({length: N}, () => false);
    const DFS = (temp) => {
        if (temp.length === N) {
          let bool = true;
          for (let i = 0; i < N; i++) {
            const x = temp[i];
            let leftCnt = arr[x];
    
            let start = i-leftCnt;
            if (start < 0) {
              bool = false;
              break;
            }
    
            for (let j = i-1; j >= 0; j--) {
              if (temp[j] > x) leftCnt--;
            }
            if (leftCnt !== 0) bool = false;
            
            if (!bool) break;
          }
    
          if (bool) {
            console.log(temp.map(n => n+1).join(' '));
            return;
          }
        }
        for (let j = 0; j < N; j++) {
          if (check[j]) continue;
          check[j] = true;
          DFS([...temp, j]);
          check[j] = false;
        }
    }
    DFS([]);

}

solve(input);
