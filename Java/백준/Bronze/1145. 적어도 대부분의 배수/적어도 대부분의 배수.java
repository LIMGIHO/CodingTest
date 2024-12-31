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




// import java.util.*; //1145
// import java.io.*;

// public class Main {
//   public static int Gcd(int a, int b) { // 최대공약수
//     if (a % b == 0) {
//       return b;
//     }
//     return Gcd(b, a % b);
//   }

//   public static int lcm(int a, int b) { //최소공배수
//     return a * b / Gcd(a, b);
//   }

//   public static int Min(int a, int b) { //최소값
//     if(a < b) {
//       return a;
//     }else {
//       return b;
//     }
//   }

//   public static int abcde(Integer[] num) { //최종
//     int max = 999999;
//     for(int i = 2; i < 5; i++) { //abc abd abe
//       max = Min(lcm(lcm(num[0], num[1]),num[i]), max);
//     }
//     for(int i = 0; i < 2; i++) { //acd ace 
//       for(int j = 0; j < 2; j++) { //bcd bce 
//         max = Min(lcm(lcm(num[i], num[2]),num[j + 3]), max);
//       }
//     }
//     max = Min(lcm(lcm(num[0], num[3]),num[4]), max); //ade
//     max = Min(lcm(lcm(num[1], num[3]),num[4]), max); //bde
//     max = Min(lcm(lcm(num[2], num[3]),num[4]), max); //cde
//     return max;
//   }

//   public static void main(String[] args) throws IOException {
//     BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

//     StringTokenizer st;

//     Integer[] num = new Integer[5]; //입력
//     st = new StringTokenizer(br.readLine()," ");
//     br.close();

//     for(int i = 0; i < 5; i++) {
//       num[i] = Integer.parseInt(st.nextToken());
//     }

//     Arrays.sort(num, Collections.reverseOrder());
//     System.out.println(abcde(num));
//   }
// }
