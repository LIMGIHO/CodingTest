class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        int[][] answer = {};
        String [] colInfo = {"code", "date", "maximum", "remain"};
        int ext_idx = getIndex(colInfo, ext);
        int sort_idx = getIndex(colInfo, sort_by);
        answer = java.util.Arrays.stream(data)
                    .filter(row -> row[ext_idx] < val_ext)
                    .sorted(java.util.Comparator.comparingInt(row -> row[sort_idx]))
                    .toArray(int[][]::new);
        
        
        return answer;
    }
    
    public int getIndex(String[] cols, String str) {
        for (int i = 0; i < cols.length; i++) {
            if (cols[i].equals(str)) {
                return i;
            }
        }
        
        return 0;
    }
}