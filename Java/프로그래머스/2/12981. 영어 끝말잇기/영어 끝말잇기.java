import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        char lastWord = ' ';
        int no = 0;
        int turn = 0;
        Set<String> set = new HashSet<>();
        
        for (int i = 0; i < words.length; i++) {
            String w = words[i];
            char first = w.charAt(0);
            // System.out.println("i : " + i + " / " + w + " / " + set + " / " + lastWord + " / " + first);
            if (set.contains(w) || (lastWord != ' '  && first != lastWord))  {
                no = (i % n) + 1;
                turn = (int)Math.ceil((double)(i + 1) / n);
                // System.out.println(i + "/" + n + " / " + Math.ceil(double((i + 1) / n));
                break;
            }
            lastWord = w.charAt(w.length()-1);
            set.add(w);
        }
        answer[0] = no;
        answer[1] = turn;
        return answer;
    }
}