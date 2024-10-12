import java.util.*;

class Solution {
    public int[] solution(String[] park, String[] routes) {
        // int[] answer = {};
        int[] cur_loc = {-1,-1};
        int row = park.length;
        int col = park[0].length();
        
        for (int x = 0; x < row; x++) {
            for (int y = 0; y < col; y++) {
                if (park[x].charAt(y) == 'S') {
                    cur_loc[0] = x;
                    cur_loc[1] = y;
                    break;
                }
            }
            if (cur_loc[0] == x) break;
        }
        // System.out.println("Start:" + Arrays.toString(cur_loc));
        
        for (String route : routes) {
            String direction = route.split(" ")[0];
            int move = Integer.parseInt(route.split(" ")[1]);
            
            cur_loc = setMove(park, cur_loc, direction, move);
            // System.out.println(Arrays.toString(cur_loc));
        }
        
        return cur_loc;
    }
    
    public int[] setMove(String[] park, int[] curr, String d, int m) {
        int row = park.length;
        int col = park[0].length();
        int c_row = curr[0];
        int c_col = curr[1];
        
        for (int i = 0; i < m; i++) {
            switch (d) {
                case "N":
                    c_row -= 1;
                    break;
                case "S":
                    c_row += 1;
                    break;
                case "W":
                    c_col -= 1;
                    break;
                case "E":
                    c_col += 1;
                    break;
            }
            
            if (c_row < 0 || c_row >= row || c_col < 0 || c_col >= col || park[c_row].charAt(c_col) == 'X') return curr;
        }
        
        return new int[] {c_row, c_col};
        
    }
}