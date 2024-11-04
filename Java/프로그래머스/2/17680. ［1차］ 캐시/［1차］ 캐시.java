import java.util.*;

class Solution {
    public int solution(int cacheSize, String[] cities) {
        int answer = 0;
        Deque<String> stack = new ArrayDeque<>();
        
        if (cacheSize == 0) {
            return cities.length * 5;
        }
        
        for (String city : cities) {
            String c = city.toLowerCase();
            if (stack.contains(c)) {
                stack.remove(c);
                stack.add(c);
                answer += 1;
            } else {
                if (stack.size() == cacheSize) {
                    stack.removeFirst();
                }
                stack.add(c);
                answer += 5;
            }
        }
        return answer;
    }
}