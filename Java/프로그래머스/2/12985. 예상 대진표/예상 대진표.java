class Solution
{
    public int solution(int n, int a, int b)
    {
        int answer = 0;
        
        while (a != b) {
            answer++;
            a = (int)Math.ceil((double)a / (double)2);
            b = (int)Math.ceil((double)b / (double)2);
            // System.out.println(a + " / " + b + " / " + (double)(b / 2));
        }

        return answer;
    }
}



// 1 2   3 4   5 6   7 8 