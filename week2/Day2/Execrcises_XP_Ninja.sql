--1--

SELECT first_name, last_name
FROM customers
ORDER BY last_name ASC, first_name ASC
OFFSET (SELECT COUNT(*) - 2 FROM customers)
LIMIT 2;

--2-
DELETE FROM purchases
WHERE customer_id = (
    SELECT customer_id
    FROM customers
    WHERE first_name = 'Scott' AND last_name = 'Scott'
);
--3--

SELECT *
FROM customers
WHERE first_name = 'Scott' AND last_name = 'Scott';

--4--

SELECT c.first_name,
       c.last_name,
       p.item_id,
       p.quantity_purchased
FROM purchases AS p
LEFT JOIN customers AS c
    ON p.customer_id = c.customer_id;

--5--
SELECT c.first_name,
       c.last_name,
       p.item_id,
       p.quantity_purchased
FROM purchases AS p
JOIN customers AS c
    ON p.customer_id = c.customer_id;
