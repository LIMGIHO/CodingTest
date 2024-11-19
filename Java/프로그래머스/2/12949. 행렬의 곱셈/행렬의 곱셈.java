import java.util.*;

class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int m = arr1.length;
        int n = arr2[0].length;
        int[][] answer = new int[m][n];
        
        
        for (int row = 0; row < m; row++) {
            int[] temp = arr1[row];
            for (int col = 0; col < n; col++) {
                for (int k = 0; k < arr1[0].length; k++) {
                    answer[row][col] += arr1[row][k] * arr2[k][col];
                }
            } 
        }
        
        return answer;
    }
}