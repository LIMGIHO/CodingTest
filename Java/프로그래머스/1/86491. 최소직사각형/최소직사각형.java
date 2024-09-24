import java.util.*;

class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        List<Integer> width = new ArrayList<>();
        List<Integer> height = new ArrayList<>();
        for (int[] size : sizes) {
            int a = size[0];
            int b = size[1];
            width.add(Math.max(a,b));
            height.add(Math.min(a,b));
        };
        
        answer = width.stream().max(Integer::compareTo).orElseThrow()
                * height.stream().max(Integer::compareTo).orElseThrow();
        return answer;
    }
}

// import java.util.*;
// class Solution {
//     public int solution(int[][] sizes) {
//         return Arrays.stream(sizes).reduce((a, b) -> new int[]{
//                 Math.max(Math.max(a[0], a[1]), Math.max(b[0], b[1])), Math.max(Math.min(a[0], a[1]), Math.min(b[0], b[1]))
//         }).map(it -> it[0] * it[1]).get();
//     }
// }

// class Solution {
//     public int solution(int[][] sizes) {
//         int length = 0, height = 0;
//         for (int[] card : sizes) {
//             length = Math.max(length, Math.max(card[0], card[1]));
//             height = Math.max(height, Math.min(card[0], card[1]));
//         }
//         int answer = length * height;
//         return answer;
//     }
// }
