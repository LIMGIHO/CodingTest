import java.util.*;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        Map<String, Set<String>> reportMap = new LinkedHashMap<>();
        Map<String, Integer> seqMap = new HashMap<>();
        int i = 0;
        for (String name : id_list) {
            reportMap.put(name, new HashSet<>());
            seqMap.put(name, i);
            i++;
        }
        
        for (String str : report) {
            String from = str.split(" ")[0];
            String to = str.split(" ")[1];
            
            reportMap.get(to).add(from);
        }
        
        for (Map.Entry<String, Set<String>> entry : reportMap.entrySet()) {
            // System.out.println(entry.getKey() + " : " + entry.getValue());  
            if (entry.getValue().size() >= k) {
                // answer[seqMap.get(entry.getKey())]++;
                
                for (String name : entry.getValue()) {
                    answer[seqMap.get(name)]++;
                }
            }
        }
        
        return answer;
    }
}