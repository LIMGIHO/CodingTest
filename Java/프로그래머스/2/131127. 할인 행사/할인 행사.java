import java.util.*;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        Map<String, Integer> map = new HashMap<>();
        
        for (int i = 0; i < want.length; i++) {
            map.put(want[i], i);
        }
        
        
        for (int i = 0; i < discount.length; i++) {
            int[] clone = number.clone();
            
            for (int j = i; j < i + 10 && j < discount.length; j++) {
                if (map.containsKey(discount[j])) {
                    clone[map.get(discount[j])]--;
                }
            }
            
            long cnt = Arrays.stream(clone)
                        .filter(v -> v > 0)
                        .count();
            
            if (cnt == 0L) answer++;
        }
        
        return answer;
    }
}