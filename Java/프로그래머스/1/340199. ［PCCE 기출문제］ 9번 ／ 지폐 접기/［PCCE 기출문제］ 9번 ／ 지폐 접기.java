class Solution {
    public int solution(int[] wallet, int[] bill) {
        int answer = 0;
        int b_min = bill[0] < bill[1] ? bill[0] : bill[1];
        int b_max = bill[0] > bill[1] ? bill[0] : bill[1];
        int w_min = Math.min(wallet[0], wallet[1]);
        int w_max = Math.max(wallet[0], wallet[1]);
        
        while (w_min < b_min || w_max < b_max) {
            answer++;
            int fold = (int)Math.floor(b_max / 2);
            int min = b_min;
            
            b_min = Math.min(min, fold);
            b_max = Math.max(min, fold);
            
        }
        
        return answer;
    }
}