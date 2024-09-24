import java.util.*;

class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        List<Integer> width = new ArrayList<>();
        List<Integer> height = new ArrayList<>();
        for (int[] size : sizes) {
            int a = size[0];
            int b = size[1];
            width.add(Math.max(a,b));
            height.add(Math.min(a,b));
        };
        
        answer = width.stream().max(Integer::compareTo).orElseThrow()
                * height.stream().max(Integer::compareTo).orElseThrow();
        return answer;
    }
}