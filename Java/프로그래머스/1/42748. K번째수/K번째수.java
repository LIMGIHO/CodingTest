import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int len = commands.length;
        int[] answer = new int[len];
        
        for (int i = 0; i < len; i++) {
            int[] arr = commands[i];
            int[] temp = Arrays.copyOfRange(array, arr[0]-1, arr[1]);
            Arrays.sort(temp);
            answer[i] = temp[arr[2]-1];
            // System.out.println(Arrays.toString(temp));
        }
        
        return answer;
    }
}