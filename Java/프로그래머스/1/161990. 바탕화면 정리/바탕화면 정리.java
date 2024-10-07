class Solution {
    public int[] solution(String[] wallpaper) {
        int[] answer = {};
        int lux = 100; int luy = 100;
        int rdx = 0; int rdy = 0;
        
        for (int row = 0; row < wallpaper.length; row++) {
            for (int col = 0; col < wallpaper[row].length(); col++) {
                // System.out.println(wallpaper[row].charAt(col));
                if (wallpaper[row].charAt(col) == '#') {
                    lux = Math.min(lux, row);
                    luy = Math.min(luy, col);
                    rdx = Math.max(rdx, row);
                    rdy = Math.max(rdy, col);
                }
            }
            
        }
        
        return new int[] {lux,luy,rdx+1,rdy+1};
    }
}