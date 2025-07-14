const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

function solve(input) {
    //1. 부모, 자식 양방향 object 생성
    //2. r1에서 r2까지 몇번에 걸처 갔는지 bfs -> 촌수 리턴
    //3. 값이 없으면 -1 리턴

    let answer = -1;
    const n = Number(input[0]);
    const [r1, r2] = input[1].split(' ').map(Number);
    const m = Number(input[2]);
    const relations = input.slice(3).map(rel => rel.split(' ').map(Number));
    const check = Array.from({length:n+1}, () => false);
    const graph = {}
    for (const [x,y] of relations) {
        if (!graph[x]) graph[x] = [];
        graph[x].push(y);

        if (!graph[y]) graph[y] = [];
        graph[y].push(x);
    }

    const BFS = (r, count) => {
        if (check[r]) return;
        if (r === r2) {
            answer = count;
            return;
        }

        const arr = graph[r];
        check[r] = true;
        for (const y of arr) {
            BFS(y, count+1);
        }
    }

    BFS(r1, 0);
    return answer;
}

console.log(solve(input));


