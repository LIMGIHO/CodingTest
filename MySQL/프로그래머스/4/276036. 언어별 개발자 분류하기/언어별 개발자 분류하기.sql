-- 코드를 작성해주세요
SELECT *
  FROM (
        SELECT CASE WHEN SKILL_NAME LIKE '%Python%' AND CATEGORY LIKE '%Front End%' THEN 'A'
                    WHEN SKILL_NAME LIKE '%C#%' THEN 'B'
                    WHEN CATEGORY LIKE '%Front End%' THEN 'C' END GRADE
             , T.ID, T.EMAIL
          FROM (
                SELECT T1.ID, T1.EMAIL, GROUP_CONCAT(T2.NAME) SKILL_NAME, GROUP_CONCAT(T2.CATEGORY) CATEGORY
                  FROM DEVELOPERS T1
                 INNER JOIN SKILLCODES T2
                    ON T2.CODE & T1.SKILL_CODE > 0
                 GROUP BY T1.ID, T1.EMAIL
               ) T
        ) T
 WHERE T.GRADE IS NOT NULL
 ORDER BY T.GRADE, T.ID
  ;
  
  