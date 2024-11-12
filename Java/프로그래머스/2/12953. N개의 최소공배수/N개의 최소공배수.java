class Solution {
    public int solution(int[] arr) {
        int answer = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            answer = (answer * arr[i]) / getGCD(answer,arr[i]);
        }
        
        return answer;
    }
    
    private int getGCD(int a, int b) {
        if (a % b == 0) return b;
        return getGCD(b, a % b);
    }
}
