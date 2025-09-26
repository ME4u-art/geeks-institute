        --Exercise 1 : DVD Rentals--
    
    --1--
 SELECT r.rental_id,
       r.rental_date,
       c.first_name || ' ' || c.last_name AS customer_name,
       f.title AS film_title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL;

--2--
SELECT c.customer_id,
       c.first_name || ' ' || c.last_name AS customer_name,
       COUNT(*) AS outstanding_rentals
FROM rental r
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY outstanding_rentals DESC;

--3--


CREATE VIEW action_films_with_actors AS
SELECT f.film_id, f.title, f.description,
       c.name AS category_name,
       a.first_name || ' ' || a.last_name AS actor_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Action';

SELECT * 
FROM action_films_with_actors
WHERE actor_name = 'Joe Swank';

            --Exercise 2 – Happy Halloween--

--1--
SELECT s.store_id,
       ci.city,
       co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;
--2--
SELECT s.store_id,
       SUM(f.length) AS total_minutes,
       SUM(f.length)/60.0 AS total_hours,
       SUM(f.length)/(60.0*24) AS total_days
FROM inventory i
JOIN store s ON i.store_id = s.store_id
JOIN film f ON i.film_id = f.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL OR r.rental_id IS NULL
GROUP BY s.store_id;
--3--
SELECT DISTINCT c.customer_id,
       c.first_name || ' ' || c.last_name AS customer_name,
       ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN store s ON s.address_id = a.address_id OR s.address_id = a.address_id;
--4--
SELECT DISTINCT c.customer_id,
       c.first_name || ' ' || c.last_name AS customer_name,
       co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN store s ON s.address_id = a.address_id OR s.address_id = a.address_id;

--5--

SELECT title,
       length,
       SUM(length) OVER () AS total_minutes,
       SUM(length)/60.0 OVER () AS total_hours,
       SUM(length)/(60.0*24) OVER () AS total_days
FROM film
WHERE category_id NOT IN (SELECT category_id FROM category WHERE name = 'Horror')
   OR title ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
   OR description ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%']);

--6--
CREATE TABLE safe_movies (
    film_id INT PRIMARY KEY REFERENCES film(film_id),
    title VARCHAR(255) NOT NULL,
    length INT NOT NULL,
    CONSTRAINT safe_movie_check CHECK (
        film_id NOT IN (
            SELECT f.film_id
            FROM film f
            JOIN film_category fc ON f.film_id = fc.film_id
            JOIN category c ON fc.category_id = c.category_id
            WHERE c.name = 'Horror'
        )
        AND title NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
        AND description NOT ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
    )
);


--7--

SELECT 
    -- General list
    COUNT(*) AS total_movies,
    SUM(length) AS total_minutes,
    SUM(length)/60.0 AS total_hours,
    SUM(length)/(60.0*24) AS total_days,
    
    -- Safe list
    SUM(CASE 
            WHEN c.name != 'Horror'
              OR f.title ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
              OR f.description ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
            THEN f.length 
            ELSE 0 
        END) AS safe_total_minutes,
    
    SUM(CASE 
            WHEN c.name != 'Horror'
              OR f.title ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
              OR f.description ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
            THEN f.length/60.0 
            ELSE 0 
        END) AS safe_total_hours,
    
    SUM(CASE 
            WHEN c.name != 'Horror'
              OR f.title ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
              OR f.description ILIKE ANY (ARRAY['%beast%', '%monster%', '%ghost%', '%dead%', '%zombie%', '%undead%'])
            THEN f.length/(60.0*24)
            ELSE 0 
        END) AS safe_total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id;

