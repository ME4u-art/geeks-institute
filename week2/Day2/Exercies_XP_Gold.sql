--Exercise 1: DVD Rental--
    --1--
SELECT rating,
       COUNT(*) AS total_films
FROM film
GROUP BY rating
ORDER BY rating;

    --2--
SELECT *
FROM film
WHERE rating IN ('G','PG-13') AND length < 120 AND rental_rate < 3.00
ORDER BY title ASC;

    --3--
UPDATE customer
SET first_name = 'Hicham',
    last_name =  'Gnouni',
    email = 'hgnouni2@gmail.com'
WHERE customer_id = 524

    --4--
UPDATE address
SET address = 'dar saada block A N5',
    district = 'Mohammedia',
    city_id = 1,
    postal_code = '2800',
    phone = '06010203040'
WHERE address_id = 530 ;

        --Exercise 2: students table--
--update--
--1--

UPDATE students
set birth_date = '1998-11-02'
WHERE last_name = 'Benichou'

--2--
UPDATE students
SET last_name ='Guez'
WHERE first_name ='David' AND last_name = 'Grez'

--Delete--
--1--
DELETE
FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou'

--Count--
--1--
SELECT Count(*)
FROM students
--2--
SELECT Count(*)
FROM students
WHERE birth_date > '2000-01-01'
--Inser/Alter--
--1--
ALTER TABLE students
ADD COLUMN math_grade INTEGER;
--2--
UPDATE  students
SET math_grade = 80
WHERE id = 1;
--3--
UPDATE  students
SET math_grade = 90
WHERE id in (2 , 4);
--4--
UPDATE  students
SET math_grade = 40
WHERE id = 6;
--5--
SELECT COUNT(*)
FROM students
WHERE math_grade > 83
--6--
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1998-11-02', 70);

--7--
SELECT first_name||' '||last_name as full_name,
       COUNT(math_grade)AS num_grades
    
FROM students
GROUP BY first_name,last_name
ORDER BY full_name

--SUM--
--1--
SELECT SUM(math_grade) AS total_grades
FROM students

  --Exercise 3 : Items and customers--
--1--

create table purchases(
    id serial primary key,
    customer_id INTEGER REFERENCES customers(customer_id),
    item_id INTEGER REFERENCES Items(item_id),
    quantity_purchased INTEGER NOT NULL
);

--2--
INSERT INTO purchases(customer_id, item_id,quantity_purchased)
VALUES(
    (SELECT customer_id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT item_id FROM Items WHERE item_name = 'Fan'),
    1
);

INSERT INTO purchases(customer_id, item_id,quantity_purchased)
VALUES(
    (SELECT customer_id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT item_id FROM Items WHERE item_name = 'Large Desk'),
    10
);

INSERT INTO purchases(customer_id, item_id,quantity_purchased)
VALUES(
    (SELECT customer_id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT item_id FROM Items WHERE item_name = 'Small Desk'),
    2
);

     --PART II--
--I--
    --1--
SELECT *
FROM purchases;
    --2--
SELECT p.id AS purchase_id,
       c.first_name,
       c.last_name,
       p.item_id,
       p.quantity_purchased
FROM purchases AS p
JOIN customers AS c
    ON p.customer_id = c.customer_id;
    --3--
SELECT *
FROM purchases
WHERE customer_id = 5;
    --4--
SELECT p.*
FROM purchases AS p
JOIN items AS i
    ON p.item_id = i.item_id
WHERE i.item_name IN ('Large Desk', 'Small Desk');

--II--
SELECT c.first_name,
       c.last_name,
       i.item_name
FROM customers AS c
JOIN purchases AS p
    ON c.customer_id = p.customer_id
JOIN items AS i
    ON p.item_id = i.item_id;

--III--
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (3, NULL, 2);



