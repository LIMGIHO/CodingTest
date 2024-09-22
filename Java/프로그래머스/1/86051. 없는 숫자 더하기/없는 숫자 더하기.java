import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        int answer = -1;
        answer = 45 - Arrays.stream(numbers)
                            .reduce(0,(a,b) -> a+b);
        return answer;
    }
}