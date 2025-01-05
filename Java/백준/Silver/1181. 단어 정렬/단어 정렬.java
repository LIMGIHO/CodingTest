import java.io.*;
import java.util.*;
import java.util.Map.Entry;
import java.util.stream.Collector;
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
        list.remove(0);
        List<String> answer = list.stream()
                .distinct()
                .sorted(Comparator.comparingInt(String::length)
                        .thenComparing(Comparator.naturalOrder()))
                .collect(Collectors.toList());

        for (String str : answer) {
            System.out.println(str);
        }

    }

}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
