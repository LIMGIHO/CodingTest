import java.util.*;

class Solution
{
    public int solution(String s)
    {
        int answer = -1;
        Deque<String> stack = new LinkedList<>();
        
        for (String c : s.split("")) {
            // stack.push(c);
            if (c.equals(stack.peek())) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }
        answer = stack.isEmpty() ? 1 : 0;
        return answer;
    }
}