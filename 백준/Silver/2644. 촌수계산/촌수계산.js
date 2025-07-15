const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let answer = -1;
    const n = Number(input[0]);
    const [from, to] = input[1].split(' ').map(Number);
    const m = Number(input[2]);
    const relations = Array.from({length: n + 1}, () => []);
    const check = Array.from({length: n + 1}, () => false);

    for (const r of input.slice(3)) {
        const [x,y] = r.split(' ').map(Number);
        relations[x].push(y);
        relations[y].push(x);
    };

    const BFS = () => {
        const que = [[from, 0]];

        while (que.length > 0) {
            const [child, lv] = que.shift();
            if (check[child]) continue;
            
            check[child] = true;
            if (child === to) {
                return lv;
            }

            for (const x of relations[child]) {
                que.push([x, lv+1]);
            }
        }

        return answer;
    }
    
    answer = BFS();
    return answer;
}

console.log(solve(input));