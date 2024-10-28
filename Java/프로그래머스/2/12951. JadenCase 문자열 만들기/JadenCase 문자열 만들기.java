class Solution {
    public String solution(String s) {
        String answer = "";
        boolean isFirst = true;
        s = s.toLowerCase();
        for (char str : s.toCharArray()) {
            if (isFirst) str = Character.toUpperCase(str);
            
            if (str == ' ') {
                isFirst = true;
            } else {
                isFirst = false;
            }
            
            answer += Character.toString(str);
        }
        
        return answer;
    }
}