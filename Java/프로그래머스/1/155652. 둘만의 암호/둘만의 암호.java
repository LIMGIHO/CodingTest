// class Solution {
//     public String solution(String s, String skip, int index) {
//         String answer = "";
        
//         for (String str : s.split("")) {
//             answer += getReplace(str, skip, index);
//         }
        
//         return answer;
//     }
    
//     public String getReplace(String str, String skip, int index) {
//         String alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
//         int idx = alpha.indexOf(str);
//         String s = str;
//         while (index > 0) {
//             idx++;
//             s = Character.toString(alpha.charAt(idx));
            
//             if (skip.contains(s)) continue;
//             index--;
//         }
        
//         return s;
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