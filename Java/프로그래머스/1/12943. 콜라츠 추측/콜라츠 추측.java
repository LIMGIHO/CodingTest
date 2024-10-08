class Solution {
    public int solution(int num) {
        int answer = 0;
        Long numL = (long) num;
        while (numL != 1) {
            answer++;
            
            if (numL % 2 == 0) {
                numL = numL / 2;
            } else {
                numL = (numL * 3) + 1;
            }
            if (answer >= 500) return -1;
        }
        
        return answer;
    }
}