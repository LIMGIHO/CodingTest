import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        // int[] answer = {};
        int[] first = {1,2,3,4,5};
        int[] second = {2,1,2,3,2,4,2,5};
        int[] third = {3,3,1,1,2,2,4,4,5,5};
        int[] score = {0,0,0};
        int maxScore = 0;
        List<Integer> top = new ArrayList<>();
        
        for (int i = 0; i < answers.length; i++) {
            int correct = answers[i];
            if (correct == first[i%first.length]) score[0]++;
            if (correct == second[i%second.length]) score[1]++;
            if (correct == third[i%third.length]) score[2]++;
        }
        maxScore = Arrays.stream(score)
                        .max().orElseThrow();
        
        for (int i = 0; i < score.length; i++) {
            if (score[i] == maxScore) top.add(i+1);
        }
        int[] answer =top.stream()
                          .mapToInt(Integer::intValue)
                          .toArray();
        return answer;
    }
}