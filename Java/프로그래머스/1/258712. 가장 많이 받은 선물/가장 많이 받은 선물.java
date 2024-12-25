import java.util.*;

class Solution {
    public int solution(String[] friends, String[] gifts) {
        int answer = 0;
        
        //map1 = muzi, [give, recice]
        //map2 = muzi, map(ryan, 1)
        Map<String, Integer[]> summary = new HashMap<>();
        Map<String, Map<String,Integer>> detail = new HashMap<>();
        
        for (String friend : friends) {
            summary.put(friend, new Integer[]{0,0});
            detail.put(friend, new HashMap<String, Integer>());
        }
        
        for (String gift : gifts) {
            String[] arr = gift.split(" ");
            String from = arr[0];
            String to = arr[1];
            
            Integer[] give = summary.get(from);
            Integer[] recieve = summary.get(to);
            give[0]++;
            recieve[1]++;
            summary.put(from, give);
            summary.put(to, recieve);
            
            Map<String, Integer> temp = detail.get(from);
            temp.put(to, temp.getOrDefault(to, 0) + 1);
            detail.put(from, temp);
        }
        
        for (String m_f : friends) {
            int giftCount = 0;
            for (String d_f : friends) {
                if (m_f.equals(d_f)) continue;
                int m = detail.get(m_f).getOrDefault(d_f, 0);
                int d = detail.get(d_f).getOrDefault(m_f, 0);
                
                if (m > d) {
                    giftCount++;
                } else if (m == d) {
                    int total_m = summary.get(m_f)[0] - summary.get(m_f)[1];
                    int total_d = summary.get(d_f)[0] - summary.get(d_f)[1];
                    
                    if (total_m > total_d) giftCount++;
                }
            }
            answer = Math.max(answer, giftCount);
        }
        
        return answer;
    }
}