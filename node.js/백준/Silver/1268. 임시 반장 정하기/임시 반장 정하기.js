const fs = require("fs");
let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
// let arr = fs.readFileSync('./dev/stdin', 'utf8').trim().split(" ");
let studentCnt = arr[0];
let classStudent = {
    //학년-반 : 학생
    '0-0' : []
}
let studentClass = {
    //학생: 반
}
let studentSameClassCnt = {
    //학생: 같은반 학생(set)
}
for (let i = 1; i <= studentCnt; i++) {
    arr[i].split(" ").forEach((cls, year) => {
        if (!classStudent[[`${year+1}-${cls}`]]) classStudent[[`${year+1}-${cls}`]] = [];
        classStudent[[`${year+1}-${cls}`]].push(i);

        if (!studentClass[i]) studentClass[i] = [];
        studentClass[i].push(`${year+1}-${cls}`);
    });
}

for (let i = 1; i <= studentCnt; i++) {
    let set = new Set();
    studentClass[i].forEach(cls => {
        classStudent[cls].forEach(student => set.add(student));
    });

    studentSameClassCnt[i] = set.size - 1;
}

let answer = [];
for (const [key,val] of Object.entries(studentSameClassCnt)) {
    answer.push([key,val]);
}

answer.sort((a,b) => b[1] - a[1]);

console.log(answer[0][0]);