const fs = require('fs');
// const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
// const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const input = new Uint8Array(fs.fstatSync(0).size);
fs.readSync(0, input);

function Scanner() {
	this.idx = 0;

	this.getInt = () => {
		let n = 0;
		while (!(input[this.idx] & 0x10)) ++this.idx;
		while (input[this.idx] & 0x10) {
			n = n * 10 + (input[this.idx] & 0x0f);
			++this.idx;
		}
		return n;
	};

    this.getString = () => {
		while (this.idx < input.length && input[this.idx] <= 32) ++this.idx; // 공백 skip
		if (this.idx >= input.length) return '';
		const start = this.idx;
		while (this.idx < input.length && input[this.idx] > 32) ++this.idx;  // 토큰
		return Buffer.from(input.subarray(start, this.idx)).toString();
	};
}

const solve = () => {
    const sc = new Scanner();
    let s = sc.getInt();
    let p = sc.getInt();
    let str = sc.getString().split('');

    const need = [];
    for (let i = 0; i < 4; i++) {
        need.push(sc.getInt());
    }

    const isPossible = (cur) => {
        for (let i = 0; i < 4; i++) {
            if (need[i] > cur[i]) return false;
        }
        return true;
    }

    let l = 0, r = 0;
    let strLoc = {'A':0,'C':1,'G':2,'T':3};
    let curCount = [0,0,0,0];
    let answer = 0;
    while(l <= r && r < s) {
        const idx = strLoc[str[r]] ?? -1;
        if (idx === -1) {
            l = ++r;
            curCount = [0,0,0,0];
            continue;
        }

        curCount[idx]++;

        if (r - l === p -1) {
            if (isPossible(curCount)) {
                answer++;
            }
            const idx = strLoc[str[l++]];
            curCount[idx]--;
        };

        r++;      
    }

    return answer;
}

console.log(solve());