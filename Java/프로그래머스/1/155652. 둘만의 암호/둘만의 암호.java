class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        for (String str : s.split("")) {
            answer += getReplace(str, skip, index);
        }
        
        return answer;
    }
    
    public String getReplace(String str, String skip, int index) {
        String alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
        int idx = alpha.indexOf(str);
        String s = str;
        while (index > 0) {
            idx++;
            s = Character.toString(alpha.charAt(idx));
            
            if (skip.contains(s)) continue;
            index--;
        }
        
        return s;
    }
}