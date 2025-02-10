const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [N, M] = input.shift().split(" ").map(Number);
const direct = [[0,1],[-1,0],[0,-1],[1,0]];
let [cx,cy] = [M-1, 0];
const visited = Array.from({length:M}, () => new Array(N).fill(false));
visited[cx][cy] = true;
while(true) {
    let isMoved = false;
    direct.forEach(d => {
        const [dx, dy] = d;

        while (cx + dx >= 0 && cx + dx < M && cy + dy >= 0 && cy + dy < N && !visited[cx + dx][cy+dy]) {
                cx += dx;
                cy += dy;
                visited[cx][cy] = true;
                isMoved = true;
        }
    });
    if (!isMoved) break;
}

console.log(cy, M - cx - 1)