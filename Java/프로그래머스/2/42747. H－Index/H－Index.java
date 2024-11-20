// import java.util.*;

// class Solution {
//     public int solution(int[] citations) {
//         int answer = 0;
//         int len = citations.length;
//         Arrays.sort(citations);
        
//         for (int i = len - 1; i >= 0; i--) {
//             int hIndex = citations[i];
            
//             int count = (int)Arrays.stream(citations)
//                             .filter(v -> v >= hIndex)
//                             .count();
            
//             if (count >= hIndex && len - count <= hIndex) {
//                 answer = Math.max(len- (i+1)-1, count);
//                 break;
//             }
//         }
        
//         return answer;
//     }
// }
import java.util.Arrays;

class Solution {
    public int solution(int[] citations) {
        int answer = 0;

        Arrays.sort(citations); // 오름차순 정렬

        for(int i = citations.length - 1; i >= 0; i--) {
            if(citations.length - i >= citations[i]) break;
            answer++;
        }

        return answer;
    }
}