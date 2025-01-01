import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader reader;
        if (args.length > 0) {
            // 파일 경로가 인자로 전달된 경우
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(args[0]), "UTF-8"));
        } else {
            // 표준 입력
            reader = new BufferedReader(new InputStreamReader(System.in, "UTF-8"));
        }

        String line;
        List<String> rows = new ArrayList<>();
        while ((line = reader.readLine()) != null && !line.isEmpty()) {
            rows.add(line);
        }

        solution(rows);

        reader.close();
    }

    private static void solution(List<String> list) {

        String[] arr = list.get(0).split(" ");
        String str = arr[0].toUpperCase();
        Map<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < str.length(); i++) {
            char chr = str.charAt(i);
            map.put(chr, map.getOrDefault(chr, 0) + 1);
        }

        Map<Character, Integer> sortedMap = map.entrySet().stream()
                .sorted(Map.Entry.<Character, Integer>comparingByValue().reversed())
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));

        String answer = "?";
        int max = 0;
        for (Map.Entry<Character, Integer> entry : sortedMap.entrySet()) {
            if (max == 0) {
                max = entry.getValue();
                answer = entry.getKey() + "";
            } else {
                if (max == entry.getValue())
                    answer = "?";
                break;
            }
        }

        System.out.println(answer);
    }

}
