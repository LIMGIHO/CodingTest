const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const getGCD = (a,b) => {
	if (b===0) return a;
	return getGCD(b,a%b);
}

const solve = (input) => {
    const [n,s] = input[0].split(' ').map(Number);
	const children = input[1].split(' ').map(c => {
		return Math.abs(s - Number(c));
	}).sort((a,b) => a-b);

	let gcd = children[0];
	for (let i = 1; i < n; i++) {
		gcd = getGCD(children[i], gcd);
	}

	return gcd;
}

console.log(solve(input));
