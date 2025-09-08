const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
	const n = Number(input[0]);
	const triangles = input.slice(1).map(arr => arr.split(' ').map(Number));
	
	function triangleArea(x1, y1, x2, y2, x3, y3) {
		return Math.abs(x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)) / 2;
	}

	let answer = 0;
	for (let i = 0; i < n-2; i++) {
		const [x1, y1] = triangles[i];
		for  (let j = i + 1; j < n-1; j++) {
			const [x2, y2] = triangles[j];
			for  (let k = i + 2; k < n; k++) {
				const [x3, y3] = triangles[k];
				answer = Math.max(answer, triangleArea(x1,y1,x2,y2,x3,y3));
			}
		}
	}

	return answer.toFixed(1);
}

console.log(solve(input));
