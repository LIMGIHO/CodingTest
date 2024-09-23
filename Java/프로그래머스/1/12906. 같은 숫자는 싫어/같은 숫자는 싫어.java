import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int[] answer = {};
        int x_n = -1;
        List<Integer> numbers = new ArrayList<>();
        
        for (int n : arr) {
            if (x_n == -1 || x_n != n) {
                x_n = n;
                numbers.add(n);
            }
        }
        answer = new int[numbers.size()];
        for (int i = 0; i < numbers.size(); i++) {
            answer[i] = numbers.get(i);
        }
            
        return answer;
    }
}