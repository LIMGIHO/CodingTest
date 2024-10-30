class Solution {
    public int solution(int n) {
        int answer = 0;
        int add = 1;
        
        for (int i = 1; i <= n; i++) {
            int target = 0;
            for (int j = i; j <= n; j++) {
                target += j;
                
                if (target > n) break;
                
                if (target == n) {
                    answer++;
                    break;
                }
            }
        }
        
        return answer;
    }
}