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


// import java.util.ArrayList;
// import java.util.Collections;
// import java.util.List;

// class Solution {
//     public int[] solution(int N, int[] lastStages) {
//         int nPlayers = lastStages.length;
//         int[] nStagePlayers = new int[N + 2];
//         for (int stage : lastStages) {
//             nStagePlayers[stage] += 1;
//         }

//         int remainingPlayers = nPlayers;
//         List<Stage> stages = new ArrayList<>();
//         for (int id = 1 ; id <= N; id++) {
//             double failure = (double) nStagePlayers[id] / remainingPlayers;
//             remainingPlayers -= nStagePlayers[id];

//             Stage s = new Stage(id, failure);
//             stages.add(s);
//         }
//         Collections.sort(stages, Collections.reverseOrder());

//         int[] answer = new int[N];
//         for (int i = 0; i < N; i++) {
//             answer[i] = stages.get(i).id;
//         }
//         return answer;
//     }

//     class Stage implements Comparable<Stage> {
//         public int id;
//         public double failure;

//         public Stage(int id_, double failure_) {
//             id = id_;
//             failure = failure_;
//         }

//         @Override
//         public int compareTo(Stage o) {
//             if (failure < o.failure ) {
//                 return -1;
//             }
//             if (failure > o.failure ) {
//                 return 1;
//             }
//             return 0;
//         }
//     }
// }
