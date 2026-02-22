const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const S = input[2].split('');
    const answer = [];

    let h = 0, t = 0;
    const cnt = {
        'I': 0, 'O':0
    }    
    cnt[S[0]]++;

    const initCnt = (chr) => {
        cnt['I'] = 0;
        cnt['O'] = 0;
        cnt[chr]++;
    }

    for (let i = 1; i < M; i++) {
        if (S[i-1] === S[i]) {
            initCnt(S[i]);
            h = i;
            continue;
        }
        cnt[S[i]]++;
        if (cnt['I'] === N + 1 && cnt['O']  === N) {
            answer.push([h, i]);
        } 
        while (cnt['I'] > N+1) cnt[S[h++]]--;
        while (cnt['O'] > N) cnt[S[h++]]--;
    }


    return answer.length;
}

console.log(solve(input));