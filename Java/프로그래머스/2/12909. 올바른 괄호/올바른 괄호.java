import java.util.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;
        List<String> stack = new ArrayList<>();
        
        for (char c : s.toCharArray()) {
            if (stack.size() != 0) {
                String str = stack.get(stack.size() - 1);
                if (str.equals("(")  && c ==')') {
                    stack.remove(stack.size()-1);
                    continue;
                }
            }
            stack.add(Character.toString(c));
        }
        
        answer = stack.size() > 0 ? false : true;
        return answer;
    }
}