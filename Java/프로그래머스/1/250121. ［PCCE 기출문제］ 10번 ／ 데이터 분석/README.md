### ※개인 의견
1. js에서 filter,map, reduce등 간편하게 사용하던걸 stream을 통해 사용해야해서 익숙해져야 됨
2. 자바에서는 sorted로 사용...
3. 간단한 작업에서는 for로 사용하는게 stream을 사용할때보다 추가 오버헤드가 발생하여 빠름(람다표현, 중간연산과 최종연산, 병렬처리, gc오버헤드)
   사용시 성능비교해가면서 사용할 필요가 있음 


# [level 1] [PCCE 기출문제] 10번 / 데이터 분석 - 250121 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/250121) 

### 성능 요약

메모리: 80.6 MB, 시간: 1.82 ms

### 구분

코딩테스트 연습 > PCCE 기출문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2024년 09월 21일 18:33:34

### 문제 설명

<p>AI 엔지니어인 현식이는 데이터를 분석하는 작업을 진행하고 있습니다. 데이터는 ["코드 번호(code)", "제조일(date)", "최대 수량(maximum)", "현재 수량(remain)"]으로 구성되어 있으며 현식이는 이 데이터들 중 조건을 만족하는 데이터만 뽑아서 정렬하려 합니다.</p>

<p>예를 들어 다음과 같이 데이터가 주어진다면</p>
<div class="highlight"><pre class="codehilite"><code>data = [[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]]
</code></pre></div>
<p>이 데이터는 다음 표처럼 나타낼 수 있습니다.</p>
<table class="table">
        <thead><tr>
<th>code</th>
<th>date</th>
<th>maximum</th>
<th>remain</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>20300104</td>
<td>100</td>
<td>80</td>
</tr>
<tr>
<td>2</td>
<td>20300804</td>
<td>847</td>
<td>37</td>
</tr>
<tr>
<td>3</td>
<td>20300401</td>
<td>10</td>
<td>8</td>
</tr>
</tbody>
      </table>
<p>주어진 데이터 중 "제조일이 20300501 이전인 물건들을 현재 수량이 적은 순서"로 정렬해야 한다면 조건에 맞게 가공된 데이터는 다음과 같습니다.</p>
<div class="highlight"><pre class="codehilite"><code>data = [[3,20300401,10,8],[1,20300104,100,80]]
</code></pre></div>
<p>정렬한 데이터들이 담긴 이차원 정수 리스트 <code>data</code>와 어떤 정보를 기준으로 데이터를 뽑아낼지를 의미하는 문자열 <code>ext</code>, 뽑아낼 정보의 기준값을 나타내는 정수 <code>val_ext</code>, 정보를 정렬할 기준이 되는 문자열 <code>sort_by</code>가 주어집니다.</p>

<p><strong><code>data</code>에서 <code>ext</code> 값이 <code>val_ext</code>보다 작은 데이터만 뽑은 후, <code>sort_by</code>에 해당하는 값을 기준으로 오름차순으로 정렬</strong>하여 return 하도록 solution 함수를 완성해 주세요. 단, 조건을 만족하는 데이터는 항상 한 개 이상 존재합니다.</p>

<hr>

<h4>제한사항</h4>

<ul>
<li>1 ≤ <code>data</code>의 길이 ≤ 500

<ul>
<li><code>data[i]</code>의 원소는 [코드 번호(code), 제조일(date), 최대 수량(maximum), 현재 수량(remain)] 형태입니다.</li>
<li>1 ≤ 코드 번호≤ 100,000</li>
<li>20000101 ≤ 제조일≤ 29991231</li>
<li><code>data[i][1]</code>은 yyyymmdd 형태의 값을 가지며, 올바른 날짜만 주어집니다. (yyyy : 연도, mm : 월, dd : 일)</li>
<li>1 ≤ 최대 수량≤ 10,000</li>
<li>1 ≤ 현재 수량≤ 최대 수량</li>
</ul></li>
<li><code>ext</code>와 <code>sort_by</code>의 값은 다음 중 한 가지를 가집니다.

<ul>
<li>"code", "date", "maximum", "remain"</li>
<li>순서대로 코드 번호, 제조일, 최대 수량, 현재 수량을 의미합니다.</li>
</ul></li>
<li><code>val_ext</code>는 <code>ext</code>에 따라 올바른 범위의 숫자로 주어집니다.</li>
<li>정렬 기준에 해당하는 값이 서로 같은 경우는 없습니다.</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>data</th>
<th>ext</th>
<th>val_ext</th>
<th>sort_by</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]]</td>
<td>"date"</td>
<td>20300501</td>
<td>"remain"</td>
<td>[[3,20300401,10,8],[1,20300104,100,80]]</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li>본문의 내용과 동일합니다.</li>
</ul>

<hr>

<ul>
<li>cpp를 응시하는 경우 리스트는 배열과 동일한 의미이니 풀이에 참고해주세요.

<ul>
<li>ex) 번호가 담긴 정수 <u><strong>리스트</strong></u> <code>numbers</code>가 주어집니다. =&gt; 번호가 담긴 정수 <u><strong>배열</strong></u> <code>numbers</code>가 주어집니다.</li>
</ul></li>
<li>java를 응시하는 경우 리스트는 배열, 함수는 메소드와 동일한 의미이니 풀이에 참고해주세요.

<ul>
<li>ex) solution <u><strong>함수</strong></u>가 올바르게 작동하도록 한 줄을 수정해 주세요. =&gt; solution <u><strong>메소드</strong></u>가 올바르게 작동하도록 한 줄을 수정해 주세요.</li>
</ul></li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
