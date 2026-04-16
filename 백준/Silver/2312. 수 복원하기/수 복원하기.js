const fs = require('fs');
const inputPath = process.platform === 'win32' ? 'dev/stdin' : 0;
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    const N = Number(input[0]);
    const nums = input.slice(1).map(Number);
    const cache = {};

    const answer = [];
    for (let num of nums) {
        const init = num;
        let map;
        if (!cache[init]) {
            map = new Map();
            for (let i = 2; i * i <= num; i++) {
                while (num % i === 0) {
                    map.set(i, (map.get(i) || 0) + 1);
                    num /= i;

                    if (cache[num]) {
                        for (const [key,val] of cache[num].entries()) {
                            map.set(key, (map.get(key) || 0) + val);
                        }
                        num = 0;
                        break;
                    }
                }
                if (cache[num]) break;
            }

            if (num > 1) map.set(num, (map.get(num) || 0) + 1);

            cache[init] = new Map(map);
        } else {
            map = cache[init];
        }
        
        for (const m of map.entries()) {
            answer.push(m.join(' '));
        }
    }
    
    return answer.join('\n');
}

console.log(solve(input));
