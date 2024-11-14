import java.util.*;

class Solution {
    public int solution(int k, int[] tangerine) {
        int answer = 0;
        int box = 0;
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int t : tangerine) {
            if (map.containsKey(t)) map.put(t, map.get(t)+1);
            else map.put(t,1);
        }
        
        List<Map.Entry<Integer,Integer>> list = new ArrayList<>(map.entrySet());
        list.sort((a,b) -> b.getValue().compareTo(a.getValue()));

        for (Map.Entry<Integer,Integer> n : list) { 
            box += n.getValue();
            answer++;
            
            if (box >= k) break;
        }
        
        return answer;
    }
}