-- 코드를 입력하세요
SELECT T.CATEGORY
     , T.PRICE AS MAX_PRICE
     , T.PRODUCT_NAME
  FROM (
        SELECT CATEGORY
             , PRICE
             , PRODUCT_NAME
             , ROW_NUMBER() OVER (PARTITION BY CATEGORY ORDER BY PRICE DESC) RN
          FROM FOOD_PRODUCT
         WHERE CATEGORY IN ('과자','국','김치','식용유')
       ) T
 WHERE T.RN = 1
 ORDER BY PRICE DESC
 ;