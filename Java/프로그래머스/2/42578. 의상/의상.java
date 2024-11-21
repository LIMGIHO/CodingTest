import java.util.*;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 0;
        Map<String, Integer> map = new HashMap<>();
        
        for (String[] arr : clothes) {
            String type = arr[1];
            map.put(type, map.getOrDefault(type,0) + 1);
        }
        
        System.out.println(map.toString());
        
        int[] cnt = map.entrySet()
                    .stream()
                    .sorted((m1,m2) -> m2.getValue().compareTo(m1.getValue()))
                    .mapToInt(Map.Entry::getValue)
                    .toArray();
        
        int len = cnt.length;        
        for (int i = 0; i < len; i++) {
            int v = cnt[i];
            int result = 1;
            
            for (int j = i + 1; j < len; j++) {
                result = result + result * cnt[j];
            }
            
            answer += result * v;
        }
        return answer;
    }
    
}