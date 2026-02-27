const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [A,B] = input[0].split(' ').map(Number);
    const m = Number(input[1]);
    const targets = input[2].split(' ').map(Number);

    function toBaseDigits(n, base) {
        const digits = [];
        while (n > 0) {
          digits.push(n % base);   // 각 자리값 (10진수)
          n = Math.floor(n / base);
        }
        return digits.reverse();   // 앞자리부터 보이게
      }

    const answer = [];
    let base = 0;
    for (let i = 0; i < m; i++) {
        if (i === 0)
            base += targets[targets.length - 1];
        else
            base += (A ** i) * targets[targets.length - 1 - i];
    }
    if (base === 0) return '0';
    const baseB = toBaseDigits(base, B)
    
    for (let i = 0; i < baseB.length; i++) {
        let num1 = baseB[i] 
        let num2 = base[i+1] || '';
        let num = Number(num1 + num2);
        if (num > B) {
            i++;
            answer.push(num);
        } else 
            answer.push(num1);
    }
    return answer.join(' ');
}

console.log(solve(input));