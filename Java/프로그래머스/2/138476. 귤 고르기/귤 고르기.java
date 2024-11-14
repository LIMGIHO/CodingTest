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



// import java.util.*;

// class Solution {
//     public int solution(int k, int[] tangerine) {
//         int answer = 0;
//         HashMap<Integer,Integer> map =new HashMap<>();

//         for (int t : tangerine) {
//             map.put(t, map.getOrDefault(t, 0) + 1);
//         }

//         List<Integer> list = new ArrayList<>(map.keySet());
//         list.sort((o1, o2) -> map.get(o2)-map.get(o1));

//         for(Integer key:list){
//             k -=map.get(key);
//             answer++;
//             if(k<=0){
//                 break;
//             }
//         }

//         return answer;
//     }
// }