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

        String line;
        List<Integer> rows = new ArrayList<>();
        while ((line = reader.readLine()) != null && !line.isEmpty()) {
            rows.add(Integer.parseInt(line));
        }

        solution(rows);

        reader.close();
    }

    private static void solution(List<Integer> list) {

        int answer = 0;
        String v = String.format("%02d", list.get(0));
        String temp = "";
        while (!v.equals(temp)) {
            if (temp.equals(""))
                temp = v;
            int a = Character.getNumericValue(temp.charAt(0));
            int b = Character.getNumericValue(temp.charAt(1));
            temp = b + String.format("%02d", a + b).substring(1, 2);
            answer++;
        }

        System.out.println(answer);
    }

}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
