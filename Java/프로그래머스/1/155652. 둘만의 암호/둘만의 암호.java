class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        
        for (String str : s.split("")) {
            answer += getReplace(str, skip, index);
        }
        
        return answer;
    }
    
    public String getReplace(String str, String skip, int index) {
        String alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
        int idx = alpha.indexOf(str);
        String s = str;
        while (index > 0) {
            idx++;
            s = Character.toString(alpha.charAt(idx));
            
            if (skip.contains(s)) continue;
            index--;
        }
        
        return s;
    }
}


// class Solution {
//     public String solution(String s, String skip, int index) {
//         StringBuilder answer = new StringBuilder();

//         for (char letter : s.toCharArray()) {
//             char temp = letter;
//             int idx = 0;
//             while (idx < index) {
//                 temp = temp == 'z' ? 'a' : (char) (temp + 1);
//                 if (!skip.contains(String.valueOf(temp))) {
//                     idx += 1;
//                 }
//             }
//             answer.append(temp);
//         }

//         return answer.toString();
//     }
// }

import java.util.Set;
import java.util.stream.Collectors;

class Solution {
    public String solution(String s, String skip, int index) {
        return new StringGenerator(index, skip).generate(s);
    }

    private static class StringGenerator {
        private final Integer offsetIndex;
        private final Set<Character> skipCharacters;

        public StringGenerator(Integer offsetIndex, String skipCharacters) {
            this(offsetIndex, parseSkipCharacters(skipCharacters));
        }

        public StringGenerator(Integer offsetIndex, Set<Character> skipCharacters) {
            this.offsetIndex = offsetIndex;
            this.skipCharacters = skipCharacters;
        }

        public String generate(String base) {
            return base.chars()
                    .mapToObj(character -> (char) character)
                    .map(this::applyOffset)
                    .map(String::valueOf)
                    .collect(Collectors.joining());
        }

        private Character applyOffset(Character character) {
            int count = 0;
            Character applied = character;

            while (count < offsetIndex) {
                applied++;

                if (applied > 'z') {
                    applied = 'a';
                }

                if (skipCharacters.contains(applied)) {
                    continue;
                }

                count++;
            }

            return applied;
        }

        private static Set<Character> parseSkipCharacters(String skipCharacters) {
            return skipCharacters.chars()
                    .mapToObj(character -> (char) character)
                    .collect(Collectors.toSet());
        }
    }
}

//         class Solution {
//     public String solution(String s, String skip, int index) {
//         String answer = "";
//         //skip을 알파벳에서 없애고 시작하기.
//         String alphabet = "abcdefghijklmnopqrstuvwxyz";
//         String[] delete = skip.split("");

//         for(String d:delete)
//             alphabet = alphabet.replace(d,"");

//         String[] myalphabet = alphabet.split("");
//         String[] sArr = s.split("");

//         for(int i = 0; i< sArr.length; i++){
//             for(int j = 0; j < myalphabet.length; j++){

//                 if(sArr[i].equals(myalphabet[j])){

//                     answer+=myalphabet[(j+index)%myalphabet.length];
//                     continue;
//                 }
//             }
//         }

//         return answer;
//     }
// }
