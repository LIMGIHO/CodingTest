// import java.io.*;
// import java.util.*;
// import java.util.Map.Entry;
// import java.util.stream.Collector;
// import java.util.stream.Collectors;

// public class Main {
//     public static void main(String[] args) throws IOException {
//         BufferedReader reader;
//         if (args.length > 0) {
//             // 파일 경로가 인자로 전달된 경우
//             reader = new BufferedReader(new InputStreamReader(new FileInputStream(args[0]), "UTF-8"));
//         } else {
//             // 표준 입력
//             reader = new BufferedReader(new InputStreamReader(System.in, "UTF-8"));
//         }

//         String line;
//         List<String> rows = new ArrayList<>();
//         while ((line = reader.readLine()) != null && !line.isEmpty()) {
//             rows.add(line);
//         }

//         solution(rows);

//         reader.close();
//     }

//     private static void solution(List<String> list) {
//         list.remove(0);
//         List<String> answer = list.stream()
//                 .distinct()
//                 .sorted(Comparator.comparingInt(String::length)
//                         .thenComparing(Comparator.naturalOrder()))
//                 .collect(Collectors.toList());

//         for (String str : answer) {
//             System.out.println(str);
//         }

//     }



import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        String[] str = new String[N];

        for (int i = 0; i < N; i++) {
            str[i] = br.readLine();
        }

        Arrays.sort(str, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                if (s1.length() == s2.length()) {
                    return s1.compareTo(s2);
                } else {
                    return s1.length() - s2.length();
                }
            }
        });

        StringBuilder sb = new StringBuilder();
        sb.append(str[0]).append("\n");

        for (int i = 1; i < N; i++) {
            if (!str[i].equals(str[i - 1])) {
                sb.append(str[i]).append("\n");
            }
        }
        System.out.println(sb);
    }
}


}

// javac -encoding UTF-8 Main.java
// java Main dev/stdin
