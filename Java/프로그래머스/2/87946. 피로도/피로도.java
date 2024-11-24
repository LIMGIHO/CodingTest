import java.util.*;

class Solution {
    public int solution(int k, int[][] dungeons) {
        int answer = -1;
        int row = dungeons.length;
        int[] index = new int[row];
        
        for (int i = 0; i < row; i++) {
            index[i] = i;
        }
        
        List<List<Integer>> result = new ArrayList<>();
        setAllCase(index, new ArrayList<>(),new boolean[row], result);
        
        for (List<Integer> list : result) {
            int current = k;
            int possible = 0;
            for (Integer idx : list) {
                int limit = dungeons[idx][0];
                int use = dungeons[idx][1];
                
                if (current >= limit) {
                    possible++;
                    current -= use;
                }
            }
            
            answer = Math.max(answer, possible);
        }
        
        return answer;
    }
    
    private void setAllCase(int[] index, ArrayList<Integer> current, boolean[] used, List<List<Integer>> result) {
        
        if (current.size() == index.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        
        for (int i = 0; i < index.length; i++) {
            if (used[i]) continue;
            
            current.add(i);
            used[i] = true;
            setAllCase(index, current, used, result);
            
            used[i] = false;
            current.remove(current.size() - 1);
        }
    }
}