import java.util.*;

class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int h = 3;
        
        while (true) {
            int w = (brown + yellow) / h;
            
            if ((h-2) * (w-2) == yellow) {
                answer[0] = w;
                answer[1] = h;
                break;
            }
            
            h++;
        }
        
        
        return answer;
    }
}
    

// 2w + 2h-4 = brown
// (h-2) * (w-2) = yellow
// hw - 2h - 2w + 4