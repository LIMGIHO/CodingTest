-- 코드를 입력하세요
SELECT T1.MEMBER_NAME
     , T2.REVIEW_TEXT
     , SUBSTR(T2.REVIEW_DATE,1,10) REVIEW_DATE
  FROM (
        SELECT *
          FROM (
                SELECT MEMBER_ID, MEMBER_NAME
                     , (SELECT COUNT(*) FROM REST_REVIEW Z 
                         WHERE Z.MEMBER_ID = T.MEMBER_ID) CNT
                  FROM MEMBER_PROFILE T
               ) T
         ORDER BY T.CNT DESC
         LIMIT 1
       ) T1
 INNER JOIN REST_REVIEW T2
    ON T2.MEMBER_ID = T1.MEMBER_ID
 ORDER BY T2.REVIEW_DATE, T2.REVIEW_TEXT
 ;