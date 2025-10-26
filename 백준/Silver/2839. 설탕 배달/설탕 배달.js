const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = Number(input[0]);
    const bags = [Math.floor(n/5), Math.floor((n%5)/3)];

    while (bags[0] > 0) {
        const sum = bags[0] * 5 + bags[1] * 3;
        if (sum === n) break;

        if (sum > n) bags[0]--;
        
        bags[1]++;
    }
    let sum = bags[0] * 5 + bags[1] * 3;
    if (sum !== n) return -1;

	return bags.reduce((acc, bag) => acc + bag, 0);
}

console.log(solve(input));
