import java.util.*;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        int[] answer;
        ArrayList<Integer> arrList = new ArrayList<>();
        Map<String, Integer> mapTerms = new HashMap<>(); 
        today = today.replaceAll("\\.","");
        
        for (String str : terms) {
            String[] arr = str.split(" ");
            mapTerms.put(arr[0], Integer.parseInt(arr[1]));
        }
        
        for (int i = 0; i < privacies.length; i++) {
            String[] arr = privacies[i].split(" ");
            String collectionDate = arr[0];
            String type = arr[1];
            System.out.println(collectionDate + "/" + type);
            
            String dueDate = getPrivacyDate(collectionDate, mapTerms.get(type));
            System.out.println("====" + dueDate);
            
            if (today.compareTo(dueDate) > 0) {
                arrList.add(i+1);
            }
        }
        answer = arrList.stream().mapToInt(Integer::intValue).toArray();
        // Arrays.sort(answer);
        return answer;
    }
    
    public String getPrivacyDate(String cDate, int month) {
        String[] arrDate = cDate.split("\\.");
        arrDate[1] = String.format("%02d",Integer.parseInt(arrDate[1]) + month);
        arrDate[2] = String.format("%02d",Integer.parseInt(arrDate[2]) - 1);
        
        if (arrDate[2].equals("00")) {
            arrDate[2] = "28";
            arrDate[1] = String.format("%02d",Integer.parseInt(arrDate[1]) - 1);
        }
        
        if (arrDate[1].equals("00")) {
            arrDate[1] = "12";
            arrDate[0] = String.format("%04d",Integer.parseInt(arrDate[0]) - 1);
        }
        
        if (Integer.parseInt(arrDate[1]) > 12) {
            int addYear = 0;
            int curMonth = Integer.parseInt(arrDate[1]);
            while (curMonth > 12) {
                curMonth = curMonth - 12;
                ++addYear;
            }
            if (curMonth == 0) {
                curMonth = 12;
                --addYear;
            }
            // System.out.println("getPrivacyDate3: " + curMonth + " / " + addYear);
            arrDate[0] = String.format("%04d",Integer.parseInt(arrDate[0]) + addYear);
            arrDate[1] = String.format("%02d", curMonth);
        }
        return String.join("", arrDate);
    }
}