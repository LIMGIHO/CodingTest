const fs = require("fs");
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/).map(Number);
let [N, K] = input;

const answer = [];
const visited = Array.from({ length: N + 1 }, () => false);
let move = 0;
let idx = 0;
while (answer.length != N) {
    idx++;

    if (idx > N) idx = 1;

    if (!visited[idx]) {
        move++;
        if (move === K) {
            move = 0;
            visited[idx] = true;
            answer.push(idx);
        }
    }
}

console.log(`<${answer.join(', ')}>`);