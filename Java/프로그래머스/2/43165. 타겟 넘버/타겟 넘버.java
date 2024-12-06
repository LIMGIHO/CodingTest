import java.util.*;

class Solution {
    
    public int solution(int[] numbers, int target) {
        int answer = 0;
        List<Integer> list = new ArrayList<>();
        list.add(0);
        for (int j = 0; j < numbers.length; j++) {
            int n = numbers[j];
            int len = list.size();
            for (int i = 0; i < len; i++) {
                int cur_n = list.get(i);
                list.add(cur_n - n);
                list.set(i, cur_n + n);
                
                if (j == numbers.length - 1) {
                    if (cur_n - n == target) answer++;
                    if (cur_n + n == target) answer++;
                }
            }
        }
        
        return answer;
    }
    
//     private void calculator(List<Integer> list, int n) {
//         List<Integer> temp = new ArrayList<>();
        
//         for (int num : list) {
//             temp.add(num+n);
//             temp.add(num-n);
//         }
//     }
}


class Solution {
    public int solution(int[] numbers, int target) {
        int answer = 0;
        answer = dfs(numbers, 0, 0, target);
        return answer;
    }
    int dfs(int[] numbers, int n, int sum, int target) {
        if(n == numbers.length) {
            if(sum == target) {
                return 1;
            }
            return 0;
        }
        return dfs(numbers, n + 1, sum + numbers[n], target) + dfs(numbers, n + 1, sum - numbers[n], target);
    }
}
