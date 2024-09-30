import java.util.*;

class Solution {
    public int solution(int k, int m, int[] score) {
        int answer = 0;
        Integer[] boxedScore = Arrays.stream(score).boxed().toArray(Integer[]::new);
        Arrays.sort(boxedScore, Comparator.reverseOrder());
        score = Arrays.stream(boxedScore).mapToInt(Integer::intValue).toArray();
        for (int i = 0; i < score.length; i+=m) {
            if (i+m > score.length) break;
            int[] arr = Arrays.copyOfRange(score, i, i+m);
            // System.out.println("====" + i + "/" + Arrays.toString(arr));
            answer += arr[arr.length-1] * arr.length;
        }
        
        // System.out.println(Arrays.toString(score));
        return answer;
    }
}


// import java.util.*;

// class Solution {
//     public int solution(int k, int m, int[] score) {
//         int answer = 0;

//         Arrays.sort(score);

//         for(int i = score.length; i >= m; i -= m){
//             answer += score[i - m] * m;
//         }

//         return answer;
//     }
// }
