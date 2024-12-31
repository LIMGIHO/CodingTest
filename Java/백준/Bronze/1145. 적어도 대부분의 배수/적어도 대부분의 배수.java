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
        List<String> rows = new ArrayList<>();
        while ((line = reader.readLine()) != null && !line.isEmpty()) {
            rows.add(line);
        }

        solution(rows);

        reader.close();
    }

    private static void solution(List<String> list) {

        String[] arr = list.get(0).split(" ");
        int[] nums = Arrays.stream(arr)
                .mapToInt(Integer::parseInt)
                .toArray();
        int answer = 1;
        int divisor = 0;
        while (divisor < 3) {
            divisor = 0;
            answer++;
            for (int i = 0; i < nums.length; i++) {
                if (answer % nums[i] == 0)
                    divisor++;
            }
        }

        System.out.println(answer);
    }

}