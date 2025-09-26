 --EX1--.
--1--
SELECT *
FROM items
ORDER BY price;

--2--

SELECT *
FROM items
WHERE price >= 80;

--3--

SELECT first_name, last_name, email
FROM customers
ORDER BY first_name ASC
LIMIT 3;

--4--

SELECT last_name
FROM customers
ORDER BY last_name DESC;

    --EX2--

--1--
SELECT *
FROM customer;

--2--
SELECT first_name ||' '|| last_name as full_name
FROM customer;

--3--
SELECT DISTINCT create_date
FROM customer;

--4--
SELECT *
FROM customer
ORDER BY first_name DESC;

--5--
SELECT film_id,title,description,release_year,rental_rate
FROM film
ORDER BY rental_rate ASC

--6--
SELECT address,phone
FROM address
WHERE district = 'Texas';

--7--
SELECT *
FROM film
WHERE film_id IN (15,150);

--8--

SELECT film_id,title,description,length,rental_rate
FROM film
WHERE title = 'Fight Clube'--no fight clube in database :(--

--9--

SELECT film_id,title,description,length,rental_rate
FROM film
WHERE title LIKE  'Fi%' -- still no fight clube :_( --

--10--
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

--11--

SELECT *
FROM(
    SELECT *,ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num 
    FROM film
)as ranked_films
WHERE row_num >10 AND row_num <= 20;
--12--
SELECT c.first_name,c.last_name,p.amount , p.payment_date
FROM customer as c
JOIN payment as p
    ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC;

--13--
SELECT *
FROM film 
WHERE film_id not in (SELECT film_id from inventory)

--14--

SELECT city.city AS city_name,
       country.country AS country_name
FROM city
JOIN country
    ON city.country_id = country.country_id
ORDER BY city.city ASC;

--15--

SELECT c.customer_id, 
       c.first_name ||' '|| c.last_name as full_name,
       p.amount,
       p.payment_date,
       p.staff_id
FROM customer as c
JOIN payment as p
    ON c.customer_id = p.customer_id
ORDER BY p.staff_id ASC

