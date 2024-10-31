class Solution {
    public int solution(int n) {
        int answer = 0;
        int count = Integer.bitCount(n);
        int nextCnt = 0;
        
        while (count != nextCnt) {
            ++n;
            nextCnt = Integer.bitCount(n);
        } 
        
        return n;
    }
}


class TryHelloWorld {
    public int nextBigNumber(int n) {
        int postPattern = n & -n, smallPattern = ((n ^ (n + postPattern)) / postPattern) >> 2;
        return n + postPattern | smallPattern;
    }
    public static void main(String[] args) {
        int n = 78;
        System.out.println(new TryHelloWorld().nextBigNumber(n));
    }
}
