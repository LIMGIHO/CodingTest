const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let N = input.shift();
const summary = {}
input.forEach(book_nm => {
    summary[book_nm] = summary[book_nm] ? summary[book_nm] + 1 : 1;
});

console.log(Object.entries(summary).sort((a,b) => {
    if (a[1] === b[1]) return a[0].localeCompare(b[0])

    return b[1] - a[1]
})[0][0]);