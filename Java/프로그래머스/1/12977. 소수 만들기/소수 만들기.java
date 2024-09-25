import java.util.*;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        List<Integer> resultList = new ArrayList<>();
        getCase(nums, 0, new int[]{}, resultList);

        for (int v : resultList) {
            boolean isPrime = true;
            for (int i = 2; i < v; i++) {
                if (v % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) answer++;
        }
        return answer;
    }
    
    public void getCase(int[] nums, int start, int[] arr, List<Integer> resultList) {
        if (arr.length == 3) {
            Integer result = 0;
            for (int v : arr) {
                Integer value = v; 
                result += value;
            }
            resultList.add(result);
            return;
        }
        
        for (int i = start; i < nums.length; i++ ) {
            int[] newArr = Arrays.copyOf(arr, arr.length + 1);
            newArr[newArr.length - 1] = nums[i];
            getCase(nums, i + 1, newArr, resultList);
        }
        
    }
}