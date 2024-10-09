// import java.util.*;

// class Solution {
//     public int[] solution(String today, String[] terms, String[] privacies) {
//         int[] answer;
//         ArrayList<Integer> arrList = new ArrayList<>();
//         Map<String, Integer> mapTerms = new HashMap<>(); 
//         today = today.replaceAll("\\.","");
        
//         for (String str : terms) {
//             String[] arr = str.split(" ");
//             mapTerms.put(arr[0], Integer.parseInt(arr[1]));
//         }
        
//         for (int i = 0; i < privacies.length; i++) {
//             String[] arr = privacies[i].split(" ");
//             String collectionDate = arr[0];
//             String type = arr[1];
//             // System.out.println(collectionDate + "/" + type);
            
//             String dueDate = getPrivacyDate(collectionDate, mapTerms.get(type));
//             // System.out.println("====" + dueDate);
            
//             if (today.compareTo(dueDate) > 0) {
//                 arrList.add(i+1);
//             }
//         }
//         answer = arrList.stream().mapToInt(Integer::intValue).toArray();
//         // Arrays.sort(answer);
//         return answer;
//     }
    
//     public String getPrivacyDate(String cDate, int month) {
//         String[] arrDate = cDate.split("\\.");
//         arrDate[1] = String.format("%02d",Integer.parseInt(arrDate[1]) + month);
//         arrDate[2] = String.format("%02d",Integer.parseInt(arrDate[2]) - 1);
        
//         if (arrDate[2].equals("00")) {
//             arrDate[2] = "28";
//             arrDate[1] = String.format("%02d",Integer.parseInt(arrDate[1]) - 1);
//         }
        
//         if (arrDate[1].equals("00")) {
//             arrDate[1] = "12";
//             arrDate[0] = String.format("%04d",Integer.parseInt(arrDate[0]) - 1);
//         }
        
//         if (Integer.parseInt(arrDate[1]) > 12) {
//             int addYear = 0;
//             int curMonth = Integer.parseInt(arrDate[1]);
//             while (curMonth > 12) {
//                 curMonth = curMonth - 12;
//                 ++addYear;
//             }
//             if (curMonth == 0) {
//                 curMonth = 12;
//                 --addYear;
//             }
//             // System.out.println("getPrivacyDate3: " + curMonth + " / " + addYear);
//             arrDate[0] = String.format("%04d",Integer.parseInt(arrDate[0]) + addYear);
//             arrDate[1] = String.format("%02d", curMonth);
//         }
//         return String.join("", arrDate);
//     }
// }


import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        List<Integer> answer = new ArrayList<>();
        Map<String, Integer> termMap = new HashMap<>();
        int date = getDate(today);

        for (String s : terms) {
            String[] term = s.split(" ");

            termMap.put(term[0], Integer.parseInt(term[1]));
        }
        for (int i = 0; i < privacies.length; i++) {
            String[] privacy = privacies[i].split(" ");

            if (getDate(privacy[0]) + (termMap.get(privacy[1]) * 28) <= date) {
                answer.add(i + 1);
            }
        }
        return answer.stream().mapToInt(integer -> integer).toArray();
    }

    private int getDate(String today) {
        String[] date = today.split("\\.");
        int year = Integer.parseInt(date[0]);
        int month = Integer.parseInt(date[1]);
        int day = Integer.parseInt(date[2]);
        return (year * 12 * 28) + (month * 28) + day;
    }
}