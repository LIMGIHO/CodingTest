function solution(citations) {
    var answer = citations.length;
    citations.sort((a,b) => b-a);
    let i = citations[0];
    while (i >= 0) {
        let h_len = citations.filter(n => n >= i).length;
        if (h_len >= i /*&& r_max <= val*/) return i;
        
        i--;
    }
    return answer;
}
