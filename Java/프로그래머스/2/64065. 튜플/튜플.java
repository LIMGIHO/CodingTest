import java.util.*;

class Solution {
    public int[] solution(String s) {
        Map<Integer, String[]> map = new TreeMap<>();
        s = s.substring(1,s.length()-1);
        
        // System.out.println(s);
//         s = s.replaceAll("[{}]", "");
        
        for (String str : s.split("},")) {
            String[] arr = str.replaceAll("[{}]", "").split(",");
            map.put(arr.length, arr);
        }
        
        Set<String> set = new HashSet<>();
        List<Integer> list = new ArrayList<>();
        map.forEach((key,value) -> {
            for (String v : value) {
                if (!set.contains(v)) {
                    list.add(Integer.parseInt(v));
                    set.add(v);
                }
            }
        });
        
        return list.stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}