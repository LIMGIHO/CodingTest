import java.util.*;

class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;
        boolean[] wall = new boolean[n];
        for (int i = 0; i < n; i++) {
            wall[i] = true;
        }
        
        for (int i : section) {
            wall[i-1] = false;
        }
        
        for (int i = 0; i < n; i++) {
            if (wall[i] == false) {
                for (int j = i; j < i + m; j++) {
                    if (j >= n) break;
                    wall[j] = true;
                }
                answer++;
            }
        }
        
        // System.out.println(Arrays.toString(wall));
        return answer;
    }
}