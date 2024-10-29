-- 코드를 입력하세요
SELECT T1.USER_ID
     , T1.NICKNAME
     , CONCAT(T1.CITY, ' ', T1.STREET_ADDRESS1, ' ', T1.STREET_ADDRESS2) AS "전체주소"
     , INSERT(INSERT(T1.TLNO,4,0,'-'),9,0,'-')             AS "전화번호"
     # , T2.CNT
  FROM USED_GOODS_USER T1
 INNER JOIN (
            SELECT T1.WRITER_ID, COUNT(*) CNT
              FROM USED_GOODS_BOARD T1
             GROUP BY T1.WRITER_ID
             HAVING COUNT(*) >= 3
            ) T2
    ON T2.WRITER_ID = T1.USER_ID
 ORDER BY T1.USER_ID DESC
 ;