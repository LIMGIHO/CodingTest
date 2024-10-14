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


// class Solution {
//     public int solution(int[] ingredient) {
//         int[] stack = new int[ingredient.length];
//         int sp = 0;
//         int answer = 0;
//         for (int i : ingredient) {
//             stack[sp++] = i;
//             if (sp >= 4 && stack[sp - 1] == 1
//                 && stack[sp - 2] == 3
//                 && stack[sp - 3] == 2
//                 && stack[sp - 4] == 1) {
//                 sp -= 4;
//                 answer++;
//             }
//         }
//         return answer;
//     }
// }
