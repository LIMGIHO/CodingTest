import java.util.*;

class Solution {
    public int solution(int[] mats, String[][] park) {
        int answer = 0;
        int rows = park.length;
        int cols = park[0].length;
        
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                if (!park[row][col].equals("-1")) continue;
                
                int x = row;
                int y = col;
                int max = 1;
                while (true) {
                    x++; y++;
                    if (x < rows && y < cols && park[x][col].equals("-1") && park[row][y].equals("-1")) {
                        boolean canPlace = true;
                        for (int i = row; i <= x; i++) {
                            for (int j = col; j <= y; j++) {
                                if (!park[i][j].equals("-1")) {
                                    canPlace = false;
                                    break;
                                }
                            }
                        }
                        
                        if (canPlace) max++;
                    } else {
                        // System.out.println("2 = " + x + "/" + row+ "/" + y+ "/" + col);
                        break;
                    }
                }
                answer = answer < max ? max : answer;
            }
        }
        Arrays.sort(mats);
        for (int i = 0; i < mats.length; i++) {
            if (mats[i] > answer) {
                if (i == 0) {
                    answer = -1;
                    break;
                }
                else {
                    answer = mats[i-1];
                    break;
                }
            }
        }
        // System.out.println(Arrays.toString(mats));
        return answer > mats[mats.length-1] ? mats[mats.length-1] : answer;
    }
}


//함수안에서 함수를 선언할 수 없음
//기본 타입 int가 아닌 래퍼 클래스 Integer를 사용해야 합니다. Java의 컬렉션은 객체만을 다루기 때문에 기본 타입 int는 사용할 수 없고, 대신 Integer를 사용해야 합니다.