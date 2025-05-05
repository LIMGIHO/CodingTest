import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;

public class Main {

    public static void main(String args[]) throws Exception {

        BufferedReader reader;
        if (args.length > 0) {
            // 파일 경로가 인자로 전달된 경우
            reader = new BufferedReader(new InputStreamReader(new FileInputStream(args[0]), "UTF-8"));
        } else {
            // 표준 입력
            reader = new BufferedReader(new InputStreamReader(System.in, "UTF-8"));
        }

        // String line;
        // List<String> rows = new ArrayList<>();
        // while ((line = reader.readLine()) != null && !line.isEmpty()) {
        // rows.add(line);
        // }

        int n = Integer.parseInt(reader.readLine());
        int[] arr = new int[n];
        int i = 0;
        for (String x : reader.readLine().split(" ")) {
            arr[i++] = Integer.parseInt(x);
        }

        solution(n, arr);

        reader.close();
    }

    private static void solution(int n, int[] arr) throws Exception {
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        boolean[] check = new boolean[n];
        int[] answer = new int[n];
        int cur = 0;
        int i = 0;
        check[cur] = true;
        answer[i++] = cur + 1;

        while (i != n) {
            int move = arr[cur];
            int dir = 0;

            if (move > 0)
                dir = 1;
            else
                dir = -1;

            while (move != 0) {

                cur += dir;
                if (cur < 0)
                    cur = n - 1;
                else if (cur >= n)
                    cur = 0;

                if (!check[cur]) {
                    move -= dir;
                }

                // System.out.println("2======= : " + cur + " / move : " + move + " / " +
                // Arrays.toString(answer));
            }

            answer[i++] = cur + 1;
            check[cur] = true;

        }

        for (int j = 0; j < n; j++) {
            writer.write(answer[j] + (j + 1 < n ? " " : ""));
        }
        writer.newLine();

        writer.flush();
    }
}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
