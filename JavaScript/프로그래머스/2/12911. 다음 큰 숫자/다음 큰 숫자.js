function solution(n) {
    var binary = n.toString(2)
    var oneCnt = [...binary].filter(str => str === '1').length;
    var cnt = 0;
    while (true) {
        n++;
        binary = n.toString(2);
        if ([...binary].filter(str => str === '1').length === oneCnt) break;
    }
    var answer = parseInt(binary,2);
    return answer;
}