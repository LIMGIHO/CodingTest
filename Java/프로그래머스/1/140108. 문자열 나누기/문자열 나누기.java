import java.util.*;

class Solution {
    public int solution(String s) {
        int answer = 0;
        List<String> list = new ArrayList<>();
        String temp = "";
        char first = 0;
        int x = 0;
        int non_x = 0;
        
        for (char str : s.toCharArray()) {
            if (x == 0) {
                first = str;
                x++;
            } else {
                if (first == str) x++;
                else non_x++;
            }
            temp += str;
            if (x == non_x) {
                list.add(temp);
                temp = "";
                x = 0;
                non_x = 0;
                first = 0;
            }            
        }
        if (x != 0) list.add(temp);
        // System.out.println(list);
        answer = list.size();
        return answer;
    }
}