const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
const swCnt = input.shift();
const swArr = input.shift().split(" ").map(Number);
const swStudent = input.filter((_,i) => i > 0)
                    .map(str => str.split(" "))
                    .map(arr => arr.map(Number));

const switching = (index) => {
    swArr[index] = swArr[index] === 0 ? 1 : 0;
}

const checkLogic = ([student, index]) => {
    switch (student) {
        case 1:
            let i = index - 1;
            while (i < swCnt) {
                switching(i);
                i += index; 
            }
            break;
        case 2:
            let left = index-1;
            let right = index-1;
            while (left > 0 && right < swCnt - 1) {
                left -= 1;
                right += 1;
                if (swArr[left] !== swArr[right]) {
                    left += 1; right -= 1;
                    break;
                }
            }

            for (let j = left; j <= right; j++) {
                switching(j);
            }

            break;
    }
}

// swStudent.forEach(arr => checkLogic(arr));

for (let i = 0; i < swStudent.length; i++) {
    const arr = swStudent[i];
    checkLogic(arr);    
}
let answer = '';
swArr.forEach((v, i) => {
    if (i > 0 && i % 20 === 0) answer += ('\n' + v)
    else answer += answer == '' ? v : (' ' + v);
})

console.log(answer);