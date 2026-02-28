const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const T = Number(input[0]);

    const getGCD = (a,b) => {
        if (a === 0) return b;
        return getGCD(b%a, a);
    }

    const answer = [];
    for (let t = 1; t <= T; t++) {
        const [M,N,x,y] = input[t].split(' ').map(Number);
        if (M === x && N === y) {
            const gcm = getGCD(x,y);
            answer.push(x*y/gcm);
            continue;
        }

        // k = x + M * a;
        // k = y + N * b;
        // k % M = x;
        // k % N = y;

        // x + Ma = y + Nb
        // x - y = Nb - Ma

        // k = 3 + 10 * a;
        // k = 9 + 12 * b;
        // => 10 * a - 12 * b = 6

        // 10a % 12 = 6

        // k % 10 = 3;
        // k % 12 = 9;

        const gcm = getGCD(M, N);
        if (Math.abs(y-x) % gcm !== 0) {
            answer.push(-1);
            continue;
        }

        let a = 0
        const target = ((y-x) % N + N) % N;
        while (M * a % N !== target) {
            a++;

            if (a > N/gcm) break;
        }

        if (a > N/gcm) 
            answer.push(-1);
        else
            answer.push(x + M * a);
    }

    return answer.join('\n');
}

console.log(solve(input));