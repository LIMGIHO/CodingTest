class Solution {
    public String solution(String new_id) {
        String answer = "";
        new_id = checkLV1(new_id);
        new_id = checkLV2(new_id);
        new_id = checkLV3(new_id);
        new_id = checkLV4(new_id);
        new_id = checkLV5(new_id);
        new_id = checkLV6(new_id);
        new_id = checkLV7(new_id);
        
        answer = new_id;
        return answer;
    }
    
    public String checkLV1(String new_id) {
        new_id = new_id.toLowerCase();
        return new_id;
    }
    
    public String checkLV2(String new_id) {
        new_id = new_id.replaceAll("[^0-9a-z-_.]", "");
        return new_id;
    }
    
    public String checkLV3(String new_id) {
        // System.out.println("LV3 : " + new_id + new_id.indexOf(".."));
        while (new_id.indexOf("..") > -1) new_id = new_id.replaceAll("\\.\\.", ".");
        return new_id;
    }
    
    public String checkLV4(String new_id) {
        String id = "";
        while (new_id.length() > 0 && (new_id.charAt(0) == '.' || new_id.charAt(new_id.length() - 1) == '.')) {
            id = "";
            for (int i = 0; i < new_id.length(); i++) {
                char c = new_id.charAt(i);
                if (i == 0 && c == '.') continue;
                if (i == new_id.length() - 1 && c == '.') break;
                
                id += Character.toString(c);
            }
            new_id = id;
        }
        return new_id;
    }
    
    public String checkLV5(String new_id) {
        if (new_id.equals("")) new_id = "a";
        
        return new_id;
    }
    
    public String checkLV6(String new_id) {
        if (new_id.length() > 15) {
            new_id = new_id.substring(0,15);
            new_id = checkLV4(new_id);
        }
        
        return new_id;
    }
    
    public String checkLV7(String new_id) {
        while (new_id.length() < 3) new_id += Character.toString(new_id.charAt(new_id.length() -1));
        
        return new_id;
    }
}




// class Solution {
//     public String solution(String new_id) {

//         String s = new KAKAOID(new_id)
//                 .replaceToLowerCase()
//                 .filter()
//                 .toSingleDot()
//                 .noStartEndDot()
//                 .noBlank()
//                 .noGreaterThan16()
//                 .noLessThan2()
//                 .getResult();


//         return s;
//     }

//     private static class KAKAOID {
//         private String s;

//         KAKAOID(String s) {
//             this.s = s;
//         }

//         private KAKAOID replaceToLowerCase() {
//             s = s.toLowerCase();
//             return this;
//         }

//         private KAKAOID filter() {
//             s = s.replaceAll("[^a-z0-9._-]", "");
//             return this;
//         }

//         private KAKAOID toSingleDot() {
//             s = s.replaceAll("[.]{2,}", ".");
//             return this;
//         }

//         private KAKAOID noStartEndDot() {
//             s = s.replaceAll("^[.]|[.]$", "");
//             return this;
//         }

//         private KAKAOID noBlank() {
//             s = s.isEmpty() ? "a" : s;
//             return this;
//         }

//         private KAKAOID noGreaterThan16() {
//             if (s.length() >= 16) {
//                 s = s.substring(0, 15);
//             }
//             s = s.replaceAll("[.]$", "");
//             return this;
//         }

//         private KAKAOID noLessThan2() {
//             StringBuilder sBuilder = new StringBuilder(s);
//             while (sBuilder.length() <= 2) {
//                 sBuilder.append(sBuilder.charAt(sBuilder.length() - 1));
//             }
//             s = sBuilder.toString();
//             return this;
//         }

//         private String getResult() {
//             return s;
//         }
//     }
// }
