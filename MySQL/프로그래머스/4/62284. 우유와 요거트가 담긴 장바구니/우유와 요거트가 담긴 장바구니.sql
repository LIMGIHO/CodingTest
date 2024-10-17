-- 코드를 입력하세요
SELECT CART_ID
  FROM (
        SELECT CART_ID, group_concat(DISTINCT NAME ORDER BY NAME) NAMES
          FROM CART_PRODUCTS
         WHERE NAME IN ('Milk', 'Yogurt')
         GROUP BY CART_ID
       ) T
 WHERE T.NAMES = 'Milk,Yogurt'
 ;


-- SELECT CART_ID
--     FROM (SELECT CART_ID
--             FROM CART_PRODUCTS
--             GROUP BY CART_ID, NAME
--             HAVING NAME REGEXP 'Milk|Yogurt') AS S
--     GROUP BY CART_ID
--       HAVING COUNT(CART_ID) = 2
