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