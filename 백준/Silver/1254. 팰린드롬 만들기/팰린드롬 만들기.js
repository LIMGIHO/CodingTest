const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const s = input[0].split('');
    const len = s.length;
    let mid = Math.floor(len/2);
    let isOdd = len % 2 === 0 ? false : true;

    /**
     * 1. 중간값을 기준으로 leftStack, midStr, rightStack으로 분류
     * 1-1. leftStack.length != rightStack.length면 3-3 진행
     * 2. left, right 가 같으면(펠린드롬) mid * 2 + 1 return
     * 3. 펠린드롬이 아니면 - while
     *    1) leftStack.push(midStr)
     *    2) midStr = rightStack.unshift()
     *    3) left.length - right.length ~ 0 loop 돌면서 rightStack.push
     */

    const leftStack = [];
    let midStr = isOdd ? s[mid] : '';
    let rightStack = [];
    for (let i = 0; i < len; i++) {
        if (isOdd && i === mid) continue;
        if (i < mid) leftStack.push(s[i]);
        else rightStack.push(s[i]);
    }

    function addWordTail() {
        let start = leftStack.length - rightStack.length - 1;
        for (let i = start; i >= 0; i--) {
            rightStack.push(leftStack[i]);
        }
    }

    const isPalindrome = () => {
        for (let i = 0; i < mid; i++) {
            if (leftStack[i] !== rightStack[mid - i - 1]) return false;
        }
        return true;
    }
// 
    // console.log("=====start", leftStack, mid, rightStack)
    // return;

    const calibration = () => {
        let next = 0;
        if (midStr === '') {
            midStr = rightStack.shift();
            next++;
        } else {
            leftStack.push(midStr);
            midStr = '';
            mid++;
        }
        rightStack = s.slice(mid+next);
        addWordTail();

        isOdd = !isOdd;
    }

    while (!isPalindrome()) {
        calibration();
    }

    return leftStack.length * 2 + (isOdd ? 1 : 0);
}

console.log(solve(input));