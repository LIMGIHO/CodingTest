class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        int seq = 0;
        for (String target : targets) {
            for (int i = 0; i < target.length(); i++) {
                String target_str = Character.toString(target.charAt(i));
                int click = -1;
                for (int j = 0; j < keymap.length; j++) {
                    int idx = keymap[j].indexOf(target_str) + 1;
                    if (idx != 0) {
                        click = click == -1 ? idx
                                : (click > idx ? idx : click);
                    }
                }
                if (click == -1) {
                    answer[seq] = -1;
                    break;
                }
                else answer[seq] += click;      
            } 
            seq++;
        }
        
        return answer;
    }
}