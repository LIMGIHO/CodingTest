-- 코드를 입력하세요
SELECT T1.PRODUCT_ID
     , T2.PRODUCT_NAME
     , SUM(T1.AMOUNT * T2.PRICE) AS TOTAL_SALES
  FROM FOOD_ORDER T1
 INNER JOIN FOOD_PRODUCT T2
    ON T2.PRODUCT_ID = T1.PRODUCT_ID
 WHERE SUBSTR(T1.PRODUCE_DATE,1,7) = '2022-05'
 GROUP BY T1.PRODUCT_ID, T2.PRODUCT_NAME
 ORDER BY SUM(T1.AMOUNT * T2.PRICE) DESC, T1.PRODUCT_ID
 ;