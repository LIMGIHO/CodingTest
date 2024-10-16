import java.util.*;

class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        int users = stages.length;
        int[] challenge = new int[N+1];
        Map<Integer, Double> failure = new HashMap<>();
        
        for (int stage : stages) {
            challenge[stage-1]++;
        }
        
        for (int i = 0; i < N; i++) {
            int cur_cnt = challenge[i];
            if (cur_cnt == 0) failure.put(i, (double)0);
            else failure.put(i, (double)cur_cnt/users);
            users -= cur_cnt;
        }
        
        List<Map.Entry<Integer, Double>> entryList = new ArrayList<>(failure.entrySet());
        entryList.sort((a,b) -> {
            int value = b.getValue().compareTo(a.getValue());
            if (value != 0) return value;
            else {
                return a.getKey().compareTo(b.getKey());
            }
        });
        
        for (int i = 0; i < entryList.size(); i++) {
            Map.Entry<Integer, Double> entry = entryList.get(i);
            answer[i] = entry.getKey() + 1;
        }
        
        return answer;
    }
}