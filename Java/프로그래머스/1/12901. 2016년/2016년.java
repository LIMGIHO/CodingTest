class Solution {
    public String solution(int a, int b) {
        String answer = "";
        String[] week = {"FRI","SAT","SUN","MON","TUE","WED","THU"};
        int[] day = {31,29,31,30,31,30,31,31,30,31,30,31};
        int cur = b;
        for (int i = 0; i < a - 1; i++) {
            cur += day[i];
        }
        answer = week[(cur-1)%7];
        return answer;
    }
}


// import java.util.*;

// class TryHelloWorld
// {
//     public String getDayName(int month, int day)
//     {
//         Calendar cal = new Calendar.Builder().setCalendarType("iso8601")
//                         .setDate(2016, month - 1, day).build();
//         return cal.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.SHORT, new Locale("ko-KR")).toUpperCase();
//     }
//     public static void main(String[] args)
//     {
//         TryHelloWorld test = new TryHelloWorld();
//         int a=5, b=24;
//         System.out.println(test.getDayName(a,b));
//     }
// }
