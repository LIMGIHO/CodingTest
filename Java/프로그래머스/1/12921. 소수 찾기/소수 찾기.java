class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for (int i = 2; i <= n; i++) {
            if (isPrime(i)) {
                // System.out.println(i);
                answer++;
            }
        }
        
        return answer;
    }
    
    public boolean isPrime(int num) {
        if (num == 2) return true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        
        return true;
    }
}