const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const passwords = input;
    const vowel = ['a','e','i','o','u']
    const answer = [];

    for (const pass of passwords) {
        if (pass === 'end') break;
        
        let isAcceptable = [false, true, true];

        let vCnt = 0; //연속된 모음 갯수
        let cCnt = 0; //연속된 자음 갯수
        let xChr = null; //이전 글자
        for (let i = 0; i < pass.length; i++) {
            const chr = pass[i];

            /**
             * 1. 모음 하나를 반드시 포함
             */
            if (vowel.includes(chr)) {
                isAcceptable[0] = true;
            }

            /**
             * 모음이 3개 혹은 자음이 3개 연속으로 오면 안된다
             */
            if (vowel.includes(chr)) {
                vCnt++;
                cCnt = 0;
            } else {
                vCnt = 0;
                cCnt++;
            }

            if (vCnt >= 3 || cCnt >= 3) {
                isAcceptable[1] = false;
            }

            /**
             * 3. 같은 글자가 연속적으로 두번 오면 안되나, ee, oo는 허용한다
             */
            if (xChr && xChr != 'e' && xChr != 'o' && xChr === chr) {
                isAcceptable[2] = false;
            }

            xChr = chr;
        }

        const quality = isAcceptable[0] && isAcceptable[1] && isAcceptable[2]
                    ? 'is acceptable.' : 'is not acceptable.';
        answer.push(`<${pass}> ${quality}`);
    }

    return answer.join('\n');
}

console.log(solve(input));
