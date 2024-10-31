class Solution {
    public int solution(int n) {
        int answer = 0;
        int count = Integer.bitCount(n);
        int nextCnt = 0;
        
        while (count != nextCnt) {
            ++n;
            nextCnt = Integer.bitCount(n);
        } 
        
        return n;
    }
}
