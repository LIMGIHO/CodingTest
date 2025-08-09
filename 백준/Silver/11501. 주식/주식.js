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
}

const solve = () => {
    const sc = new Scanner();
    let t = sc.getInt();
    const answer = [];

    while(t) {
        const stocks = [];
        const days = sc.getInt();
        for (let i = 0; i < days; i++) {
            stocks.push(sc.getInt());
        }

        const dp = Array.from({length:days}, () => 0);
        let maxPrice = stocks[days-1]
        for (let i = days -2; i >= 0; i--) {
            if (stocks[i] < maxPrice) {
                dp[i] = maxPrice - stocks[i];
            } else {
                maxPrice = stocks[i];
            }
            
        }
        answer.push(dp.reduce((acc, price) => acc + price, 0));
        t--;
    }
    return answer.join('\n');
}

console.log(solve());