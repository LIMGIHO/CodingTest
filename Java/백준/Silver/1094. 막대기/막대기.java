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
        int a = Integer.parseInt(list.get(0));
        int baseNum = 64;
        int answer = 0;
        while (a != 0) {
            while (baseNum > a) {
                baseNum /= 2;
            }
            a -= baseNum;
            answer++;
        }
        System.out.println(answer);
    }

}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
