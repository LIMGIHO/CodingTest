import java.util.*;

public class Solution {
    public int solution(int n) {
        int ans = 0;
        
        while (n > 0) {
            if (n % 2 == 0) n /= 2;
            else {
                n--;
                ans++;
            }
        }
        return ans;
    }
    
}


// 1 2 4 8 16 32 64 128
// 2 4 8
// 3 6 12 24 48 96
// 5 10 20 40
;


