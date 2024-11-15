class Solution {
    public long solution(int n) {
        long answer = 0;
        int[] fibo = new int[n+2];
        fibo[1] = 1;
        fibo[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567;
        }
        answer = fibo[n];
        return answer;
    }
}
