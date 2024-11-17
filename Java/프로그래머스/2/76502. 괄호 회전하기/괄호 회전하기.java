import java.util.*;

class Solution {
    public int solution(String s) {
        int answer = 0;
        StringBuilder sb = new StringBuilder(s);
        
        
        for (int i = 0; i < s.length(); i++) {
            moveLeft(sb);
            if (checkCorrect(sb.toString())) {
                answer++;
            }
        }
        
        return answer;
    }
    
    private void moveLeft(StringBuilder sb) {
        char first = sb.charAt(0);
        sb.append(first);
        sb.deleteCharAt(0);
    }
    
    private boolean checkCorrect(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') stack.push(c);
            else {
                if (stack.isEmpty()) return false;
                
                Character chr = stack.pop();
                
                if (
                    (c == ')' && chr != '(')
                  ||(c == '}' && chr != '{')
                  ||(c == ']' && chr != '[')
                    ) {
                    return false;
                }
            }
        }
        
        if (stack.isEmpty()) return true;
        return false;
    }
}