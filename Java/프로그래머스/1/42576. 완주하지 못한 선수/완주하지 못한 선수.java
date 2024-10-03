import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
//         Map<Integer, String> list = new HashMap<>();
//         for (int i = 0; i < completion.length; i++) {
//             list.add(i, completion[i]);
//         }
        
//         for (int i = 0; i < participant.length; i++) {
//             if (!list.contains(participant[i])) {
//                 answer = participant[i];
//                 break;
//             } else list.remove(participant[i]);
//         }
        
        Arrays.sort(participant);
        Arrays.sort(completion);
        
        for (int i = 0; i < participant.length - 1; i++) {
            if (!participant[i].equals(completion[i])) {
                return participant[i];
            }
        }
        
        answer = participant[participant.length-1];
        return answer;
    }
}



// import java.util.HashMap;

// class Solution {
//     public String solution(String[] participant, String[] completion) {
//         String answer = "";
//         HashMap<String, Integer> hm = new HashMap<>();
//         for (String player : participant) hm.put(player, hm.getOrDefault(player, 0) + 1);
//         for (String player : completion) hm.put(player, hm.get(player) - 1);

//         for (String key : hm.keySet()) {
//             if (hm.get(key) != 0){
//                 answer = key;
//             }
//         }
//         return answer;
//     }
// }


// public class Solution {

//     int bucketSize;
//     List<Entry>[] bucket;

//     public String solution(String[] participant, String[] completion) {
//         bucketSize = (completion.length / 5)+1;
//         bucket = new List[bucketSize];

//         for (int i = 0; i < completion.length; i++) {
//             Entry entry = get(completion[i]);
//             entry.value += 1;
//         }

//         for (int i = 0; i < participant.length; i++) {
//             Entry entry = get(participant[i]);
//             if (entry != null && entry.value > 0) {
//                 entry.value -= 1;
//             } else {
//                 return entry.key;
//             }
//         }
//         throw new RuntimeException("error");
//     }

//     private Entry get(String s) {
//         int idx = hash(s);
//         List<Entry> list = bucket[idx];
//         if (list == null) {
//             list = new List<Entry>();
//             Entry entry = new Entry(s, 0);
//             list.add(entry);
//             bucket[idx] = list;
//             return entry;
//         } else {
//             Entry entry = list.get(s);
//             if (entry == null) {
//                 entry = new Entry(s, 0);
//                 list.add(entry);
//             }
//             return entry;
//         }
//     }


//     private int hash(String s) {
//         int num = 0;
//         for(int i=0; i<s.length(); i++) {
//             num += s.codePointAt(i) * 31 + s.codePointAt(i);
//         }
//         return num % bucketSize;
//     }

//     class Entry {
//         String key;
//         int value;

//         public Entry(String key, int value) {
//             this.key = key;
//             this.value = value;
//         }
//     }

//     class List<T extends Entry> {
//         Node head;

//         public void add(T entry) {
//             Node nn = new Node(entry, null);

//             if (head == null) {
//                 head = nn;
//             } else {
//                 Node last = head;
//                 while (last.next != null) {
//                     last = last.next;
//                 }
//                 last.next = nn;
//             }
//         }

//         public <T extends Entry> T get(String s) {
//             Node node = head;
//             while (node != null) {
//                 if (node.data.key.equals(s)) {
//                     return (T) node.data;
//                 }
//                 node = node.next;
//             }

//             return null;
//         }

//         class Node<T extends Entry> {
//             T data;
//             Node next;

//             public Node(T data, Node next) {
//                 this.data = data;
//                 this.next = next;
//             }
//         }
//     }

//     public static void main(String[] args) {
//         String[] p = {"mislav", "stanko", "mislav", "ana"};
//         String[] c = {"stanko", "ana", "mislav"};
//         Solution s = new Solution();
//         String answer = s.solution(p, c);
//         System.out.println(answer);
//     }

// }