const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/);

const solve = (input) => {
    let check = new Set(["(",")","[","]"]);
    let map = {
        ")": "(",
        "]": "[",
    }
	
    const isBalance = (str) => {
        const stack = [];
        for (const s of str.split('')) {
            if (!check.has(s)) continue;
            if (!stack.length || !map[s]) stack.push(s)
            else {
                if (stack[stack.length-1] !== map[s]) 
                    return 'no'
                else
                    stack.pop();
            }
        }

        if (stack.length === 0) 
            return 'yes';
        else 
            return 'no';
    }

    const answer = [];
    for (let i = 0; i < input.length; i++) {
        const str = input[i];
        if (str === ".") break;

        answer.push(isBalance(str));
    }

    return answer.join('\n');
}

console.log(solve(input));
