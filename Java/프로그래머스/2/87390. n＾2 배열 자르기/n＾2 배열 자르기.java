import java.util.*;

class Solution {
    public int[] solution(int n, long left, long right) {
        int[] answer = new int[(int)(right - left + 1L)];
        int cnt = 0;
        for (long i = left; i <= right; i++) {
            int val = (int)Math.max(i/(long)n, i % (long)n) + 1;
            answer[cnt++] = val;
        }
        
        return answer;
    }
}