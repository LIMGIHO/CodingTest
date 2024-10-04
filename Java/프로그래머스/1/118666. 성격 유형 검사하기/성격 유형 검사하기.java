import java.util.*;

class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        int[] score = {3,2,1,0,1,2,3};
        String[] indicator = {"RT", "CF", "JM", "AN"};
        Map<String, Integer> table = new HashMap<>();
        
        for (int i = 0; i < choices.length; i++) {
            int c = choices[i];
            if (c == 4) continue;
            int idx = 0;
            if (c > 4) {
                idx = 1;
            }
            String type = Character.toString(survey[i].charAt(idx));
            table.put(type, table.getOrDefault(type,0) + score[choices[i]-1]);
        }
        
        for (String type : indicator) {
            String a = Character.toString(type.charAt(0));
            String b = Character.toString(type.charAt(1));
            String character = table.getOrDefault(a,0) < table.getOrDefault(b,0) ? b : a;
            answer += character;
        }
        // System.out.println(table.toString());
        
        return answer;
    }
    
    
}
