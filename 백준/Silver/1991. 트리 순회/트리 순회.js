const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const answer = ['','',''];
    const tree = Array(N*2);
    tree[0] = 'A';
    const map = new Map();
    map.set('A',0);

    for (let i = 1; i <= N; i++) {
        const [root, left, right] = input[i].split(' ');
        const rootIdx = map.get(root);
        const leftIdx = rootIdx*2+1;
        const rightIdx = rootIdx*2+2;

        // tree[rootIdx] = root;
        if (left !== '.') {
            tree[leftIdx] = left;
            map.set(left, leftIdx);
        }
        if (right !== '.') {
            tree[rightIdx] = right;
            map.set(right, rightIdx);
        }
    }

    const preOrder = () => {
        const stack = [0];
        const isUsed = Array(N*2).fill(0);

        while (stack.length) {
            const cur = stack[stack.length-1];
            const next = cur*2;

            if (!isUsed[cur]) {
                answer[0] += tree[cur];
                isUsed[cur] = 1;
            }

            if (tree[next+1] && !isUsed[next+1])
                stack.push(next+1);
            else if (tree[next+2] && !isUsed[next+2])
                stack.push(next+2);
            else 
                stack.pop();                       
        }       
    }

    const inOrder = () => {
        const stack = [0];
        const isUsed = Array(N*2).fill(0);

        while (stack.length) {
            const cur = stack[stack.length-1];
            const next = cur*2;

            if (tree[next+1] && !isUsed[next+1])
                stack.push(next+1);
            else {
                stack.pop();
                isUsed[cur] = 1;
                answer[1] += tree[cur];

                if (tree[next+2] && !isUsed[next+2]) {
                    stack.push(next+2);
                }                       
            }
        }
    }

    const postOrder = () => {
        const stack = [0];
        const isUsed = Array(N*2).fill(0);

        while (stack.length) {
            const cur = stack[stack.length-1];
            const next = cur*2;

            if (tree[next+1] && !isUsed[next+1])
                stack.push(next+1);
            else if (tree[next+2] && !isUsed[next+2]) 
                stack.push(next+2);
            else {
                stack.pop();
                isUsed[cur] = 1;
                answer[2] += tree[cur];

            }
        }
    }
    
    preOrder();
    inOrder();
    postOrder();

    return answer.join('\n');
}

console.log(solve(input));