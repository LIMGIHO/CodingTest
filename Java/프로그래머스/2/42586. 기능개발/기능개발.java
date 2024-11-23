import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int len = progresses.length;
        int[] day = new int[len];
        List<Integer> list = new ArrayList<>();
        
        for (int i = 0; i < len; i++) {
            int p = 100 - progresses[i];
            int s = speeds[i];
            day[i] = (int)Math.ceil((double)p / s);
        }
        
        // System.out.println(Arrays.toString(day));
        
        int cur_day = 0;
        int deploy = 0;
        for (int d : day) {
            // System.out.println(d + " / " + cur_day);
            if (cur_day < d) {
                if (cur_day > 0) {
                    list.add(deploy);
                    deploy = 0;
                }
                cur_day = d;
            } 
            
            deploy++;
        }
        if (deploy > 0) list.add(deploy);
        int[] answer = list.stream()
                        .mapToInt(Integer::intValue)
                        .toArray();
        return answer;
    }
}