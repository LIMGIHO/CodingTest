const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const tok = fs.readFileSync(inputPath, 'utf8').trim().split(/\s+/);

let p = 0;

const N = +tok[p++];
const arr = [];
while (arr.length < N) {
	const x = +tok[p++];
	const y = +tok[p++];
	arr.push([x,y]);
}

arr.sort((a,b) => {
	if (a[1] === b[1]) return a[0] - b[0];

	return a[1] - b[1];
});

console.log(arr.map(a => a.join(' ')).join('\n'));
