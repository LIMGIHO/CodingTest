const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const data = input.slice(2).map(Number);
    const expression = input[1].trim().split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            return data[char.charCodeAt(0) - 65];
        }
        return char;
    });
    
    const nums = [];
    for (const char of expression) {
        if (!isNaN(char)) {
            nums.push(char);
        } else {
            const operator = char;
            const a = nums.pop();
            const b = nums.pop();

            switch (operator) {
                case "+":
                    nums.push(a+b);
                    break;
                case "-":
                    nums.push(b-a);
                    break;
                case "*":
                    nums.push(a*b);
                    break;
                case "/":
                    nums.push(b/a);
                    break;
            }
        }
    }
    
    return nums.pop().toFixed(2);
}

console.log(solve(input));
