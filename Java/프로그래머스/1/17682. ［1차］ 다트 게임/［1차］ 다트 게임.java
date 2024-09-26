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