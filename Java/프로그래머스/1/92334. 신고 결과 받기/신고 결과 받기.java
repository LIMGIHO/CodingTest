// import java.util.*;

// class Solution {
//     public int[] solution(String[] id_list, String[] report, int k) {
//         int[] answer = new int[id_list.length];
//         Map<String, Set<String>> reportMap = new LinkedHashMap<>();
//         Map<String, Integer> seqMap = new HashMap<>();
//         int i = 0;
//         for (String name : id_list) {
//             reportMap.put(name, new HashSet<>());
//             seqMap.put(name, i);
//             i++;
//         }
        
//         for (String str : report) {
//             String from = str.split(" ")[0];
//             String to = str.split(" ")[1];
            
//             reportMap.get(to).add(from);
//         }
        
//         for (Map.Entry<String, Set<String>> entry : reportMap.entrySet()) {
//             // System.out.println(entry.getKey() + " : " + entry.getValue());  
//             if (entry.getValue().size() >= k) {
//                 // answer[seqMap.get(entry.getKey())]++;
                
//                 for (String name : entry.getValue()) {
//                     answer[seqMap.get(name)]++;
//                 }
//             }
//         }
        
//         return answer;
//     }
// }



import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        List<String> list = Arrays.stream(report).distinct().collect(Collectors.toList());
        HashMap<String, Integer> count = new HashMap<>();
        for (String s : list) {
            String target = s.split(" ")[1];
            count.put(target, count.getOrDefault(target, 0) + 1);
        }

        return Arrays.stream(id_list).map(_user -> {
            final String user = _user;
            List<String> reportList = list.stream().filter(s -> s.startsWith(user + " ")).collect(Collectors.toList());
            return reportList.stream().filter(s -> count.getOrDefault(s.split(" ")[1], 0) >= k).count();
        }).mapToInt(Long::intValue).toArray();
    }
}