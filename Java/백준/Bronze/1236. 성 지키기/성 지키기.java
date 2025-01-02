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
        int col = Integer.parseInt(list.get(0).split(" ")[1]);
        int emptyRow = 0;
        String[] result = new String[col];

        for (int i = 1; i < list.size(); i++) {
            if (list.get(i).replaceAll("\\.", "").equals("")) {
                emptyRow++;
                continue;
            }

            String[] temp = list.get(i).split("");
            for (int j = 0; j < temp.length; j++) {
                if (temp[j].equals("X"))
                    result[j] = "X";
            }
        }
        long emptyCol = Arrays.stream(result)
                .filter(Objects::isNull)
                .count();

        answer = Math.max((int) emptyCol, emptyRow);
        System.out.println(answer);
    }

}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
