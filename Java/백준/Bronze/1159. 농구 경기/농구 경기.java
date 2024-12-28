import java.io.*;
import java.util.*;

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

        Map<Character, Integer> map = new HashMap<>();
        StringBuilder sb = new StringBuilder("");
        String line;
        while ((line = reader.readLine()) != null) {
            map.put(line.charAt(0), map.getOrDefault(line.charAt(0), 0) + 1);
        }

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {
            if (entry.getValue() >= 5)
                sb.append(entry.getKey());
        }
        System.out.println(sb.toString() == "" ? "PREDAJA" : sb.toString());
        reader.close();
    }
}