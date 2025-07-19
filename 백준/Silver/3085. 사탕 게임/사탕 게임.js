const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    let answer = 0;
    const n = Number(input[0]);
    const board = input.slice(1).map(b => b.split(''));
    
    //1. 안움직인 board상태에서 최대 연속 사탕 갯수 구하기
    //2. 1이 n과 같을때 n 리턴
    //3. 한칸씩 이동 후 연속된 상탕 갯수 체크
    //  1) 대상사탕 기준 오른쪽, 아래쪽 사탕 색이 같으면 continue;
    //  2) 오른쪽과 바꾼 후 j 컬럼, j+1 컬럼 연속 사탕 갯수 체크
    //  3) 아래쪽과 바꾼 후 i 열, i+1 열 연속 사탕 갯수 체크

    const rowCheck = (i) => {
        let x_color = board[i][0];
        let count = 1;

        for (let j = 1; j < n; j++) {
            if (x_color === board[i][j]) {
                count++;
            } else {
                x_color = board[i][j];
                count = 1;
            }
            answer = Math.max(answer, count);
        }
    }

    const colCheck = (i) => {
        let x_color = board[0][i];
        let count = 1;

        for (let j = 1; j < n; j++) {
            if (x_color === board[j][i]) {
                count++;
            } else {
                x_color = board[j][i];
                count = 1;
            }
            answer = Math.max(answer, count);
        }
    }

    for (let i = 0; i < n; i++) {
        rowCheck(i);
        colCheck(i);

        if (answer === n) return answer;
    }

    let temp1, temp2;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            if (j < n - 1) {
                temp1 = board[i][j];
                temp2 = board[i][j+1];
                board[i][j] = temp2
                board[i][j+1] = temp1;
                
                colCheck(j);
                colCheck(j+1);
                rowCheck(i);

                // console.log("J:", j, board, answer);

                board[i][j] = temp1
                board[i][j+1] = temp2;
            }
            

            if (i < n - 1) {
                temp1 = board[i][j];
                temp2 = board[i+1][j];
                
                board[i][j] = temp2
                board[i+1][j] = temp1;

                rowCheck(i);
                rowCheck(i+1);
                colCheck(j);

                // console.log("I:", i, board, answer);

                board[i][j] = temp1
                board[i+1][j] = temp2;
            }
        }
        
        if (answer === n) return answer;
    }

    return answer;
}

console.log(solve(input));


