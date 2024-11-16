import java.util.*;

class Solution {
    public int solution(int[] elements) {
        int answer = 0;
        int len = elements.length;
        Set<Integer> set = new HashSet<>();
        
        for (int i = 0; i < len; i++) {
            int sum = elements[i];
            set.add(sum);
            for (int j = i + 1; j < len + i; j++) {
                sum += elements[j% len];
                set.add(sum);
            }
        }
        
        answer = set.size();
        return answer;
    }
}