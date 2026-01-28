const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const N = Number(input[0]);
    const nums = input.slice(1, N+1).map(Number);
    
    const merge_sort = (l,r) => {
        if (l < r) {
            const mid = Math.floor((l + r) / 2);

            merge_sort(l,mid);
            merge_sort(mid+1, r);
            merge(l,mid,r);
        }
    }

    const merge = (l, m, r) => {
        let i = l, j = m+1, t = 0;
        let tmp = [];
        while (i <= m && j <= r) {
            if (nums[i] >= nums[j])
                tmp[t++] = nums[i++];
            else
                tmp[t++] = nums[j++];
        }

        while (i <= m) tmp[t++] = nums[i++];
        while (j <= r) tmp[t++] = nums[j++];

        i = l, t = 0;
        while (i <= r) nums[i++] = tmp[t++];
    }

    merge_sort(0,N-1);
    return nums.join('\n');
}

console.log(solve(input));