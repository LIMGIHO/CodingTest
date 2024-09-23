import java.util.*;

class Solution {
    public int solution(String s) {
        int answer = 0;
        String strAnswer = "";
        String[] numWords = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        List<String> list = Arrays.asList(numWords);
        String temp = "";
        
        for (int i = 0; i < s.length(); i++) {
            String str = Character.toString(s.charAt(i));
            
            if (isInteger(str)) strAnswer += str;
            else temp += str;
            
            if (list.indexOf(temp) > -1) {
                strAnswer += list.indexOf(temp);
                temp = "";
            }
        }
        if (temp != "") strAnswer += list.indexOf(temp);
        
        answer = Integer.parseInt(strAnswer);
        return answer;
    }
    
    // 문자열이 정수인지 확인하는 메서드
    public static boolean isInteger(String str) {
        try {
            Integer.parseInt(str);  // 문자열을 정수로 변환
            return true;            // 변환 성공 시 true 반환
        } catch (NumberFormatException e) {
            return false;           // 변환 실패 시 false 반환
        }
    }
    
}


/*
다른사람 풀이 깔끔한 코드
class Solution {
    public int solution(String s) {
        String[] strArr = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
        for(int i = 0; i < strArr.length; i++) {
            s = s.replaceAll(strArr[i], Integer.toString(i));
        }
        return Integer.parseInt(s);
    }
}
*/
