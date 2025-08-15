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
    let n = sc.getInt();
    let m = sc.getInt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        let s = sc.getInt();
        arr.push(s);
    }
    arr.sort((a,b) => a-b);

    const answer = [];
    const set = new Set();
    const check = Array.from({length:n}, () => false);
    const temp = Array.from({length:m});
    const dfs = (idx) => {
        if (idx === m) {
            const unique = temp.join('-');
            if (!set.has(unique)) {
                set.add(unique);
                answer.push([...temp]);
            }
            return;
        }

        for (let i = 0; i < n; i++) {
            if (check[i]) continue;

            check[i] = true;
            if (idx === 0 || temp[idx-1] <= arr[i]) {
                temp[idx] = arr[i];
                dfs(idx+1);
            }
            check[i] = false;
        }
    }

    dfs(0);

    return answer.map(arr => arr.join(' ')).join('\n');
}

console.log(solve());