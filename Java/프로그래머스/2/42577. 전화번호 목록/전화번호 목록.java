import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        int len = phone_book.length;
        
        if (len == 1) return false;
        
        Arrays.sort(phone_book);
        for (int i = 0; i < len - 1; i++) {
            String phone = phone_book[i];
            String n_phone = phone_book[i+1];
            if (n_phone.startsWith(phone)) return false;
        }
        
        return answer;
    }
}