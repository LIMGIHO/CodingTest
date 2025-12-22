const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const solve = (input) => {
    const N = Number(input[0]);
    const response = [
        "\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.",
        "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.",
        "그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\""
    ];
    const prefix = "____";

    const answer = [
        "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.",
    ];
    const recursive = (n) => {
        if (n > N) return;

        answer.push(prefix.repeat(n) + "\"재귀함수가 뭔가요?\"");

        if (n === N) {
            answer.push(`${prefix.repeat(n)}"재귀함수는 자기 자신을 호출하는 함수라네\"`);
        } else {
            response.forEach(str => {
                let strs = '';
                answer.push(`${prefix.repeat(n)}${str.trim()}`);
            }, '');
        }

        recursive(n+1);

        answer.push(prefix.repeat(n) + "라고 답변하였지.")
    }

    recursive(0);
    return answer.join('\n');
}

console.log(solve(input));
