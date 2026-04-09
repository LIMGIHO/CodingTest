const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const [N,K] = input[0].split(' ').map(Number);
    const programKit = input[1].split(' ').map(Number);

    const isVisit = new Uint8Array(N);
    const tmp = [];
    const allCase = [];
    const dfs = () => {
        if (tmp.length === N) {
            allCase.push([...tmp]);
            return;
        }

        for (let i = 0; i < N; i++) {
            if (isVisit[i] === 1) continue;

            isVisit[i] = 1;
            tmp.push(i);
            dfs();
            isVisit[i] = 0;
            tmp.pop();
        }
    }

    dfs();
    
    const getPossible = (kit) => {
        let power = 500;
        for (const i of kit) {
            const increase = programKit[i];
            power += increase;
            power -= K

            if (power < 500) return false;
        }

        return true;
    }

    let answer = 0;
    for (let i = 0; i < allCase.length; i++) {
        const p = getPossible(allCase[i]);
        if (p)
            answer++;

        // console.log(allCase[i].join(' '), p);
    }

    return answer;
}

console.log(solve(input));