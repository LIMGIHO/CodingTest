import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        int len = priorities.length;
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for (int v : priorities) {
            pq.add(v);
        }
        
        boolean[] check = new boolean[len];
        int i = 0;
        while (!pq.isEmpty()) {
            if (!check[i]) {
                if (priorities[i] == pq.peek()) {
                    pq.poll();
                    check[i] = true;
                    answer++;
                    if (i == location) return answer;
                }
            }
            i++;
            
            if (i >= len) i = 0;
        }
        return answer;
    }
}