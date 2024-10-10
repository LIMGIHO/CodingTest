import java.util.*;

class Solution {
    public String[] solution(String[] players, String[] callings) {
        String[] answer = new String[players.length];
        Map<String, Integer> playersMap = new HashMap<>();
        
        for (int i = 0; i < players.length; i++) {
            playersMap.put(players[i], i);
        }
        
        for (String name : callings) {
            int rank = playersMap.get(name);
            String f_name = players[rank - 1]; 
            
            playersMap.put(name, rank - 1);
            playersMap.put(f_name, rank);
            players[rank] = f_name;
            players[rank-1] = name;
            
        }
        
        for (String key : playersMap.keySet()) {
            int val = playersMap.get(key);
            answer[val] = key;
        }
        
        return answer;
    }
}