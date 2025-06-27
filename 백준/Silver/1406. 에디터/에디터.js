const fs = require('fs');

// 입력 전체를 읽어서, 줄 단위 배열로 만들기
let inputPath = '/dev/stdin';
// 개발 환경에서는 dev/stdin 파일 사용
if (fs.existsSync('dev/stdin')) {
    inputPath = 'dev/stdin';
}

const input = fs.readFileSync(inputPath)
  .toString()
  .trim()
  .split('\n');

function solve(lines) {
    const initialInput = lines[0];
    const M = Number(lines[1]);
    
    // 스택 2개 사용: 커서 기준으로 왼쪽/오른쪽 나누기
    const leftStack = initialInput.split('');  // 커서 왼쪽 문자들
    const rightStack = [];  // 커서 오른쪽 문자들
    
    for (let i = 2; i < 2 + M; i++) {
        const command = lines[i].split(' ');
        
        if (command[0] === 'L') {
            // 커서를 왼쪽으로: 왼쪽 스택 top을 오른쪽 스택으로 이동
            if (leftStack.length > 0) {
                rightStack.push(leftStack.pop());
            }
        } else if (command[0] === 'D') {
            // 커서를 오른쪽으로: 오른쪽 스택 top을 왼쪽 스택으로 이동
            if (rightStack.length > 0) {
                leftStack.push(rightStack.pop());
            }
        } else if (command[0] === 'B') {
            // 커서 왼쪽 문자 삭제: 왼쪽 스택에서 pop
            if (leftStack.length > 0) {
                leftStack.pop();
            }
        } else if (command[0] === 'P') {
            // 커서 위치에 문자 삽입: 왼쪽 스택에 push
            leftStack.push(command[1]);
        }
    }
    
    // 결과 출력: 왼쪽 스택 + 오른쪽 스택 역순
    const result = leftStack.join('') + rightStack.reverse().join('');
    console.log(result);
}

solve(input);
