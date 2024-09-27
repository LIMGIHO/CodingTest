import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        int[] arr = new int[n];
        List<Integer> newLost = new ArrayList<>();
        Arrays.sort(lost);
        for (int l : lost) {
            boolean isContain = false;
            for (int i = 0; i < reserve.length; i++) {
                if (reserve[i] == l) {
                    reserve[i] = 0;
                    isContain = true;
                    break;
                }
            }
            
            if (!isContain) {
                newLost.add(l);
            }
        }
        
        for (int i : reserve) {
            if (i == 0) continue;
            arr[i-1] = arr[i-1] + 1;
        }
        
        answer = n - newLost.size();
        // System.out.println(newLost.toString());
        // System.out.println(Arrays.toString(arr));
        for (int l : newLost) {
            if (l - 2 >= 0 && arr[l-2] > 0) {
                arr[l-2]--;
                answer++;
            } else if (l < n && arr[l] > 0) {
                arr[l]--;
                answer++;
            }
        }
        
        return answer;
    }
}