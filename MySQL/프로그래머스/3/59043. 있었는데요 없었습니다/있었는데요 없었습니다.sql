-- 코드를 입력하세요
SELECT T1.ANIMAL_ID, T1.NAME
  FROM ANIMAL_INS T1
 INNER JOIN ANIMAL_OUTS T2
    ON T2.ANIMAL_ID = T1.ANIMAL_ID
 WHERE T1.DATETIME > T2.DATETIME
 ORDER BY T1.DATETIME