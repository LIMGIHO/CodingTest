// import java.util.*;
// import java.util.regex.*;

// class Solution {
//     public int solution(String str1, String str2) {
//         int answer = 0;
//         // str1 = str1.replaceAll("[^a-zA-Z]","").toLowerCase();
//         // str2 = str2.replaceAll("[^a-zA-Z]","").toLowerCase();
//         // System.out.println(str1 + " / " + str2);
//         Map<String, Integer> map1 = getSet(str1);
//         Map<String, Integer> map2 = getSet(str2);
        
//         if (map1.size() == 0 && map2.size() == 0) {
//             return 65536;
//         }
        
//         // 교집합 계산
//         int intersection = 0;
//         for (String key : map1.keySet()) {
//             if (map2.containsKey(key)) {
//                 intersection += Math.min(map1.get(key), map2.get(key)); // 교집합은 각 요소의 최소 빈도수
//             }
//         }

//         // 합집합 계산
//         int union = 0;
//         for (String key : map1.keySet()) {
//              // 교집합은 각 요소의 최소 빈도수
//             if (map2.containsKey(key)) {
//                 union += Math.max(map1.get(key), map2.get(key));
//                 map2.remove(key);
//             } else {
//                 union += map1.get(key);
//             }
//         }
//         for (String key : map2.keySet()) {
//             union += map2.get(key);
//         }
        
//         System.out.println(map1.toString());
//         System.out.println(intersection + " / " + union);
//         return (int)(((double)intersection / union) * 65536.0);
//     }
    
//     private Map<String, Integer> getSet(String str) {
//         Map<String, Integer> map = new HashMap<>();
//         for (int i = 0; i < str.length() - 1; i++) {
//             String s = Character.toString(str.charAt(i)).toLowerCase() + Character.toString(str.charAt(i + 1)).toLowerCase();
            
//             Pattern pattern = Pattern.compile("[^a-zA-Z]");
//             Matcher matcher = pattern.matcher(s);

//             if (!matcher.find()) {
//                 map.put(s, map.getOrDefault(s, 0) + 1);
//             }
//         }
        
//         return map;
//     }
    
// }


// // 1. 영문만 남기기(정규표현식)
// // 2. 두 글자씩 다중집합으로 만들기
// // 3. 합집합, 교집합 구하기

import java.util.*;
import java.util.regex.*;

class Solution {
    public int solution(String str1, String str2) {
        double multi = 65536.0;
        int answer = 0;
        Map<String, Integer> map1 = getSet(str1);
        Map<String, Integer> map2 = getSet(str2);
        
        if (map1.size() == 0 && map2.size() == 0) return (int)multi;
        
        int intersection = 0;
        for (String key : map1.keySet()) {
            if (map2.containsKey(key)) intersection += Math.min(map1.get(key), map2.get(key));
        }
        
        int union = 0;
        for (String key : map1.keySet()) {
            if (map2.containsKey(key)) {
                union += Math.max(map1.get(key), map2.get(key));
                map2.remove(key);
            } else {
                union += map1.get(key);
            }
        }
        
        for (String key : map2.keySet()) {
            union += map2.get(key);
        }
        
        answer = (int)(((double)intersection / union) * multi);
        return answer;
    }
    
    private Map<String, Integer> getSet(String str) {
        Map<String, Integer> map = new HashMap<>();
        Pattern pattern = Pattern.compile("[^a-zA-Z]");
        
        for (int i = 0; i < str.length() - 1; i++) {
            String s = (str.charAt(i) + "" + str.charAt(i+1)).toLowerCase();
            Matcher match = pattern.matcher(s);
            if (!match.find()) {
                map.put(s, map.getOrDefault(s,0) + 1);
            }
        }
        return map;
    }
}
