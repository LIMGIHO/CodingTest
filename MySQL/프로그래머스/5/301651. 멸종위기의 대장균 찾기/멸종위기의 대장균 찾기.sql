-- 코드를 작성해주세요
WITH RECURSIVE RC AS (
    SELECT 1 AS LV, PARENT_ID, ID
      FROM ECOLI_DATA
     WHERE PARENT_ID IS NULL
     UNION ALL
    SELECT T2.LV + 1, T1.PARENT_ID, T1.ID
      FROM ECOLI_DATA T1
     INNER JOIN RC T2
        ON T2.ID = T1.PARENT_ID
     WHERE T1.PARENT_ID IS NOT NULL
)
SELECT COUNT(*) AS COUNT
     , T.LV     AS GENERATION
  FROM (
        SELECT T.LV
             , (SELECT COUNT(*) FROM ECOLI_DATA Z WHERE Z.PARENT_ID = T.ID) CNT
          FROM RC T
       ) T
 WHERE T.CNT = 0
 GROUP BY T.LV
 ORDER BY T.LV
 ;
