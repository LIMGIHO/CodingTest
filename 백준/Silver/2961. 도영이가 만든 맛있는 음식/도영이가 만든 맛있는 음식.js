const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = Number(input[0]);
    const arr = input.slice(1).map(a => a.split(' ').map(Number));
	
	// 비트마스크를 이용한 모든 부분집합 생성
	const generateAllSubsets = (n) => {
		const subsets = [];
		
		// 0부터 2^n - 1까지 모든 비트마스크에 대해
		for (let mask = 0; mask < (1 << n); mask++) {
			const subset = [];
			
			// 각 비트를 확인하여 해당 인덱스를 포함할지 결정
			for (let i = 0; i < n; i++) {
				if (mask & (1 << i)) {
					subset.push(i);
				}
			}
			
			subsets.push(subset);
		}
		
		return subsets;
	};

	const allCases = generateAllSubsets(n);
	let answer = Infinity;

	for (const taste of allCases) {
		if (!taste.length) continue;
		let s = 1; b = 0;
		for (let i = 0; i < taste.length; i++) {
			s *= arr[taste[i]][0];
			b += arr[taste[i]][1];
		}

		answer = Math.min(answer, Math.abs(s-b));
	}

	return answer;
}

console.log(solve(input));
