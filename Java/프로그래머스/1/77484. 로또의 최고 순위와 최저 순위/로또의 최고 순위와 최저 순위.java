import java.util.*;

class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = new int[2];
        int[] win = {6,6,5,4,3,2,1};
        int min = 0;
        int max = 0;
        int zero = 0;
        
        for (int ball : lottos) {
            if (ball == 0) zero++;
            
            if (Arrays.stream(win_nums).anyMatch(i -> i == ball)) min++;
        }
        
        answer[0] = win[min + zero];
        answer[1] = win[min];
        
        return answer;
    }
}