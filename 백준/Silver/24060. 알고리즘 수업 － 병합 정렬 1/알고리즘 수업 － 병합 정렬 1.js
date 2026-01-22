const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [N, K] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);
    let saveCount = 0;
    let savedNum = -1;

    const mergeSort = (p, r) => {
        if (savedNum > 0) return savedNum;
        if (p < r) {
            const q = Math.floor((p + r) / 2);
            mergeSort(p, q);
            mergeSort(q+1, r);
            merge(p,q,r);
        }
    }

    const merge = (p,q,r) => {
        const tmp = [];
        let i = p; 
        let j = q+1; 
        let t = 0;

        while (i <= q && j <= r) {
            if (arr[i] <= arr[j])
                tmp[t++] = arr[i++];
            else
                tmp[t++] = arr[j++];
        }
        while (i <= q) tmp[t++] = arr[i++];
        while (j <= r) tmp[t++] = arr[j++];
        i = p; t = 0;
        while (i <= r) {
            arr[i++] = tmp[t++];
            saveCount++;
            if (saveCount === K) savedNum = arr[i-1];
        }
    }

    const num = mergeSort(0, N-1);
    return savedNum;
}

console.log(solve(input));