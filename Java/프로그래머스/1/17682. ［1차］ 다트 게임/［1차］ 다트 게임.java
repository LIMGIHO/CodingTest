import java.util.*;

class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        List<Integer> result = new ArrayList<>();
        String[] resultArr = dartResult.split("(?=[SDT*#])|(?<=[SDT*#])");
        
        ;
        for (int i = 0; i < resultArr.length; i++) {
            String str = resultArr[i];
            if (!str.equals("")) setResult(result, str);
        }
        
        for (Integer v : result) {
            answer += v;
        }
        
        return answer;
    }
    
    public void setResult(List<Integer> list, String str) {
        int idx = list.size() - 1;
        Integer val = idx > -1 ? list.get(idx) : 0;
        switch (str) {
            case "S":
                break;
            case "D":
                list.set(idx, val * val);
                break;
            case "T":
                list.set(idx, val * val * val);
                break;
            case "*":
                list.set(idx, val * 2);
                if (idx > 0) list.set(idx - 1, list.get(idx-1) * 2);
                break;
            case "#":
                list.set(idx, val * -1);
                break;
            default:
                list.add(Integer.parseInt(str));
                break;
        }
    }
}



// import java.util.*;
// import java.util.regex.Matcher;
// import java.util.regex.Pattern;

// public class Solution {
//     static int[] sum = new int[3];
//     static int solution(String msg){
//         String reg = "([0-9]{1,2}[S|T|D][*|#]{0,1})";
//         Pattern p = Pattern.compile(reg+reg+reg);
//         Matcher m = p.matcher(msg);
//         m.find();
//         for(int i=1; i<=m.groupCount(); i++){
//             Pattern p1 = Pattern.compile("([0-9]{1,2})([S|T|D])([*|#]{0,1})");
//             Matcher m1 = p1.matcher(m.group(i));
//             m1.find();
//             sum[i-1] = (int)Math.pow(Integer.parseInt(m1.group(1)), getpow(m1.group(2)));
//             setting(i,m1.group(3));
//         }
//         return(sum[0]+ sum[1]+ sum[2]);
//     }
//     static void setting(int idx, String msg){
//         if(msg.equals("*")){
//             sum[idx - 1] *= 2;
//             if(idx > 1 ){
//                 sum[idx - 2] *=2;
//             }
//         }
//         else if(msg.equals("#")){
//             sum[idx - 1] *=-1 ;
//         }
//     }
//     static int getpow(String mag){
//         if(mag.equals("S")){
//             return 1; 
//         }
//         else if(mag.equals("D")){
//             return 2;
//         }
//         else {
//             return 3;
//         }

//     }


// }


// import java.util.*;
// class Solution {
//     public int solution(String dartResult) {
//         Stack<Integer> stack = new Stack<>();
//         int sum = 0;
//         for (int i = 0; i < dartResult.length(); ++i) {
//             char c = dartResult.charAt(i);
//             if (Character.isDigit(c)) {
//                 sum = (c - '0');
//                 if (sum == 1 && i < dartResult.length() - 1 && dartResult.charAt(i + 1) == '0') {
//                     sum = 10;
//                     i++;
//                 }
//                 stack.push(sum);
//             } else {
//                 int prev = stack.pop();
//                 if (c == 'D') {
//                     prev *= prev;
//                 } else if (c == 'T') {
//                     prev = prev * prev * prev;
//                 } else if (c == '*') {
//                     if (!stack.isEmpty()) {
//                         int val = stack.pop() * 2;
//                         stack.push(val);
//                     }
//                     prev *= 2;
//                 } else if (c == '#') {
//                     prev *= (-1);
//                 }
//                 // System.out.println(prev);
//                 stack.push(prev);
//             }
//         }
//         int totalScore = 0;
//         while (!stack.isEmpty()) {
//             totalScore += stack.pop();
//         }
//         return totalScore;
//     }
// }
