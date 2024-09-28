import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        int rows = board.length;
        List<Integer> stack = new ArrayList<>();
        
        for (int i = 0; i < moves.length; i++) {
            int cur_col = moves[i] - 1;
            int cur_row = 0;
            int cur_val = 0;
            while (cur_row < rows && cur_val == 0) {
                if (board[cur_row][cur_col] != 0) {
                    cur_val = board[cur_row][cur_col];
                    board[cur_row][cur_col] = 0;
                }
                cur_row++;
            }
            
            if (cur_val != 0) {
                if (stack.size() > 0 && stack.get(stack.size() - 1) == cur_val) {
                    stack.remove(stack.size()-1);
                    answer += 2;
                }
                else stack.add(cur_val);
            }
        }
        
        return answer;
    }
}