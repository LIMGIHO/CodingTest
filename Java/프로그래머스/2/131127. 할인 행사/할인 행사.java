// import java.util.*;

// class Solution {
//     public int solution(String[] want, int[] number, String[] discount) {
//         int answer = 0;
//         Map<String, Integer> map = new HashMap<>();
        
//         for (int i = 0; i < want.length; i++) {
//             map.put(want[i], i);
//         }
        
        
//         for (int i = 0; i < discount.length; i++) {
//             int[] clone = number.clone();
            
//             for (int j = i; j < i + 10 && j < discount.length; j++) {
//                 if (map.containsKey(discount[j])) {
//                     clone[map.get(discount[j])]--;
//                 }
//             }
            
//             long cnt = Arrays.stream(clone)
//                         .filter(v -> v > 0)
//                         .count();
            
//             if (cnt == 0L) answer++;
//         }
        
//         return answer;
//     }
// }



import java.util.*;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        Map<String, Integer> target = new HashMap<>();
        Map<String, Integer> current = new HashMap<>();

        // 목표 수량 설정
        for (int i = 0; i < want.length; i++) {
            target.put(want[i], number[i]);
        }

        // 초기 10일 윈도우 구성
        for (int i = 0; i < 10 && i < discount.length; i++) {
            current.put(discount[i], current.getOrDefault(discount[i], 0) + 1);
        }

        // 첫 윈도우 확인
        if (check(target, current)) {
            answer++;
        }

        // 슬라이딩 윈도우
        for (int i = 10; i < discount.length; i++) {
            // 윈도우에서 빠지는 항목 제거
            String out = discount[i - 10];
            current.put(out, current.get(out) - 1);
            if (current.get(out) == 0) {
                current.remove(out);
            }

            // 윈도우에 추가되는 항목 추가
            String in = discount[i];
            current.put(in, current.getOrDefault(in, 0) + 1);

            // 윈도우 확인
            if (check(target, current)) {
                answer++;
            }
        }

        return answer;
    }

    // 목표와 현재 상태 비교
    private boolean check(Map<String, Integer> target, Map<String, Integer> current) {
        for (String key : target.keySet()) {
            if (current.getOrDefault(key, 0) < target.get(key)) {
                return false;
            }
        }
        return true;
    }
}
