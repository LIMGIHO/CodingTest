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
        int answer = 0;
        String[] arr = list.get(0).split(" ");
        for (int i = 0; i < arr.length; i++) {
            int v = Integer.parseInt(arr[i]);
            answer += v * v;
        }

        System.out.println(answer % 10);
    }

}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
