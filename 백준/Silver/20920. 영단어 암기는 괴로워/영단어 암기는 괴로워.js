const fs = require('fs');
const inputPath = fs.existsSync('dev/stdin') ? 'dev/stdin' : '/dev/stdin';
const input = fs.readFileSync(inputPath).toString().split(/\r?\n/) //split('\s+');

const solve = (input) => {
    const [N,M] = input[0].split(' ').map(Number);
    const words = [];
    
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        const word = input[i].trim();
        if (word.length < M) continue;

        if (!map.has(word)) words.push(word);
        map.set(word, (map.get(word) || 0) + 1);
    }

    const sortedWords = words.sort((a,b) => {
        // console.log(a,b)
        if (map.get(a) !== map.get(b)) return map.get(b) - map.get(a);
        if (a.length !== b.length) return b.length - a.length;
        return a.localeCompare(b);
    })
    
    return sortedWords.join('\n');
}

console.log(solve(input));