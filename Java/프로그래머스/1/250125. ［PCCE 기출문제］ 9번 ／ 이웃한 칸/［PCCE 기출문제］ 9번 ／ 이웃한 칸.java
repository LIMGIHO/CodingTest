class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        int row = board.length;
        int col = board[0].length;
        int[][] directions = {{0,1},{1,0},{-1,0},{0,-1}};
        for (int i = 0; i < directions.length; i++) {
            int dh = directions[i][0];
            int dw = directions[i][1];
            
            int r = h + dh;
            int c = w + dw;
            if (r < row && c < col && r >= 0 && c >= 0) {
                System.out.println(board[r][c] + "/"+ board[h][w]);
                if (board[r][c].equals(board[h][w])) {
                    // System.out.println(board[r][c] + "/"+ board[h][w]);
                    answer++;
                }
            }
        }
        return answer;
    }
}