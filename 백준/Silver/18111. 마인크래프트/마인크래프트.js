const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const [n,m,b] = input[0].split(' ').map(Number);
	const land = input.slice(1).map(i => i.split(' ').map(Number));

	/**
	 * 1. 지면의 최소높이, 최대 높이 min, max를 구한다
	 * 2. min ~ max 값을 loop돌면서 소요시간, 인벤토리 갯수를 구한다
	 * 3. 최소소요시간, 인벤토리 갯수를 리턴 
	 */
	const flat = land.flat();
	const min = Math.min(...flat);
	const max = Math.max(...flat);

	const changeBlock = (target, height) => {
		let time = 0;
		let inven = 0;
		if (target > height) {
			const val = target - height
			time += val;
			inven -= val;
		} else if (target < height) {
			const val = height - target
			time += 2 * val;
			inven += val;
		}

		return [time, inven];
	}

	const claculateTime = (target) => {
		let inven = b;
		let time = 0;

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				const height = land[i][j];
				const result = changeBlock(target, height);
				
				time += result[0];
				inven += result[1];
			}
		}

		if (inven < 0) return null;
		return [time, inven];
	}

	const answer = [Infinity, 0];
	for (let i = min; i <= max; i++) {
		const result = claculateTime(i);
		if (!result) continue;

		if (answer[0] >= result[0]) {
			answer[0] = result[0];
			answer[1] = i;
		} 
	}

	return answer.join(' ');
}

console.log(solve(input));
