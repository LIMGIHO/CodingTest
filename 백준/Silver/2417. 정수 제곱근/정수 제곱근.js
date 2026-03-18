const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = BigInt(input[0]);

    // if (N === 1n) return 1;

    let min = 0;
    let lt = 0n, rt = N;
    while (lt <= rt) {
        const mid = (lt + rt) / 2n;

        if (mid * mid === N)
            return mid.toString();

        if (mid * mid > N) {
            rt = mid - 1n;
            min = mid;
        }
        else
            lt = mid + 1n;
    }

    return min.toString();
}

console.log(solve(input));