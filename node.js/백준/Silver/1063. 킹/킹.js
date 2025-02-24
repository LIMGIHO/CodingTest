const fs = require("fs");
// let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n|\s/);
let input = fs.readFileSync('./dev/stdin', 'utf8').trim().split(/\r?\n/);
let [k_loc, s_loc, N] = input.shift().split(' ');
let [ky, kx] = k_loc.split('').map(v => {
    if (isNaN(v)) return v.charCodeAt() - 64;
    else return Number(v)
});
let [sy, sx] = s_loc.split('').map(v => {
    if (isNaN(v)) return v.charCodeAt() - 64;
    else return Number(v)
});

const move = {
    'B': [-1,0],
    'L': [0,-1],
    'T': [1,0],
    'R': [0,1]
}
for (let i = 0; i < input.length; i++) {
    const m = input[i];
    let [dx,dy] = [0,0];
    let isSame = false;
    for (let j = 0; j < m.split('').length; j++) {
        const d = m[j];
        dx += move[d][0];
        dy += move[d][1];
    }
    // console.log(dx,dy, kx + dx, ky + dy)
    if (kx + dx <= 0 || ky + dy <= 0 || kx + dx > 8 || ky + dy > 8) continue;
    else {
        if (kx + dx === sx && ky + dy === sy) {
            if (sx + dx <= 0 || sy + dy <= 0 || sx + dx > 8 || sy + dy > 8) continue;
            else isSame = true;
        }
    }

    kx += dx;
    ky += dy;

    if (isSame) {
        sx += dx;
        sy += dy;
    }
    
}
let answer = [String.fromCharCode(ky+64) + '' + kx
            , String.fromCharCode(sy+64) + '' + sx]

console.log(answer.join('\n'))