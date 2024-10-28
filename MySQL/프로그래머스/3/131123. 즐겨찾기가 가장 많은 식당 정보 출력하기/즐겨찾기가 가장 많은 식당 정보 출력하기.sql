-- 코드를 입력하세요
SELECT FOOD_TYPE
     , REST_ID
     , REST_NAME
     , FAVORITES
  FROM (
        SELECT RANK() OVER (PARTITION BY FOOD_TYPE ORDER BY FAVORITES DESC) RN
             , FOOD_TYPE
             , REST_ID
             , REST_NAME
             , FAVORITES
          FROM REST_INFO
       ) T
 WHERE T.RN = 1
 ORDER BY T.FOOD_TYPE DESC, RN
 ;
  