const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const arr = input.map(a => a.split(' ').map(Number));
	const n = 6;
	const check = Array.from({length:14}, () => false);
	const result = Array.from({length:n}); 
	const answer = [];

	const dfs = (idx, start, nums) => {
		if (idx === n) {
			answer.push(result.join(' '));
			return;
		}
		
		
		for (let i = start; i < nums.length; i++) {
			if (check[i]) continue;
			check[i] = true;
			result[idx] = nums[i];
			dfs(idx+1, i+1, nums);
			check[i] = false;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		const nums = arr[i];
		if (nums[0] === 0) break;

		const count = nums.shift();
		// console.log("=====", nums)
		dfs(0, 0, nums);
		answer.push('')
	}

	return answer.join('\n');
}

console.log(solve(input));
