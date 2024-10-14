import java.util.*;

class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<String> hamburger = new Stack<>();
        
        for (int i = 0; i < ingredient.length; i++) {
            hamburger.push(ingredient[i] + "");
            
            while(hamburger.size() > 3) {
                String temp = "";
                int size = hamburger.size() - 1;
                for (int j = 3; j >= 0; j--) {
                    temp += hamburger.get(size - j);
                }
                
                if (temp.equals("1231")) {
                    answer++;
                    hamburger.pop();hamburger.pop();hamburger.pop();hamburger.pop();
                } else break;
            }
        }
        
        return answer;
    }
}