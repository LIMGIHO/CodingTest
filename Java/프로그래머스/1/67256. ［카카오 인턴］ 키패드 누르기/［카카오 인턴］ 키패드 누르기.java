import java.util.*;

class Solution {
    public String solution(int[] numbers, String hand) {
        String answer = "";
        Map<String, int[]> mapHand = new HashMap<>();
        mapHand.put("left", new int[]{3,0}); 
        mapHand.put("right", new int[]{3,2});
        
        Map<String, int[]> mapPad = new HashMap<>();
        mapPad.put("1", new int[]{0,0}); mapPad.put("2", new int[]{0,1}); mapPad.put("3", new int[]{0,2});
        mapPad.put("4", new int[]{1,0}); mapPad.put("5", new int[]{1,1}); mapPad.put("6", new int[]{1,2});
        mapPad.put("7", new int[]{2,0}); mapPad.put("8", new int[]{2,1}); mapPad.put("9", new int[]{2,2});
        mapPad.put("*", new int[]{3,0}); mapPad.put("0", new int[]{3,1}); mapPad.put("#", new int[]{3,2});
        
        for (int i = 0; i < numbers.length; i++) {
            String input = String.valueOf(numbers[i]);
            int row = mapPad.get(input)[0];
            int col = mapPad.get(input)[1];
            
            answer += setLocation(mapHand, hand, row, col);
            // System.out.println("i:" + i + " / input:" + input + "/ row:" + row + " / col: " + col + "/ R:" + r + " / L:" + l);
            
        }
        return answer;
    }
    
    public String setLocation(Map<String, int[]> mapHand, String hand, int cur_row, int cur_col) {
        String useHand = hand;
        
        if (cur_col == 0) useHand = "left";
        else if (cur_col == 2) useHand = "right";
        else {
            int r_x = mapHand.get("right")[0];
            int r_y = mapHand.get("right")[1];
            int l_x = mapHand.get("left")[0];
            int l_y = mapHand.get("left")[1];
            
            double r = Math.abs(r_x - cur_row) + Math.abs(r_y - cur_col);
            double l = Math.abs(l_x - cur_row) + Math.abs(l_y - cur_col);
            // System.out.println(hand + " Hand right :" + r_x + " / " + r_y + "/ left :" + l_x + "/" + l_y + "/ dif : " + r + "/" + l);
            if (r > l) useHand = "left";
            else if (l > r) useHand = "right";
            else useHand = hand;
        }
        int[] array = mapHand.get(useHand);
        array[0] = cur_row;
        array[1] = cur_col;
        // System.out.println(hand + " Hand   :" + useHand + "/ " + array[0] + "," + array[1]);
        return Character.toUpperCase(useHand.charAt(0)) + "";
    }
}


// class Solution {
//     //        0부터 9까지 좌표 {y,x}
//     int[][] numpadPos = {
//             {3,1}, //0
//             {0,0}, //1
//             {0,1}, //2
//             {0,2}, //3
//             {1,0}, //4
//             {1,1}, //5
//             {1,2}, //6
//             {2,0}, //7
//             {2,1}, //8
//             {2,2}  //9
//     };
//     //초기 위치
//     int[] leftPos = {3,0};
//     int[] rightPos = {3,2};
//     String hand;
//     public String solution(int[] numbers, String hand) {
//         this.hand = (hand.equals("right")) ? "R" : "L";

//         String answer = "";
//         for (int num : numbers) {
//             String Umji = pushNumber(num);
//             answer += Umji;

//             if(Umji.equals("L")) {leftPos = numpadPos[num]; continue;}
//             if(Umji.equals("R")) {rightPos = numpadPos[num]; continue;}
//         }
//         return answer;
//     }

//     //num버튼을 누를 때 어디 손을 사용하는가
//     private String pushNumber(int num) {
//         if(num==1 || num==4 || num==7) return "L";
//         if(num==3 || num==6 || num==9) return "R";

//         // 2,5,8,0 일때 어디 손가락이 가까운가
//         if(getDist(leftPos, num) > getDist(rightPos, num)) return "R";
//         if(getDist(leftPos, num) < getDist(rightPos, num)) return "L";

//         //같으면 손잡이
//         return this.hand;
//     }

//     //해당 위치와 번호 위치의 거리
//     private int getDist(int[] pos, int num) {
//         return Math.abs(pos[0]-numpadPos[num][0]) + Math.abs(pos[1]-numpadPos[num][1]);
//     }
// }
