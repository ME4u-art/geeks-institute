    --Exercise 1: DVD Rental--
--1--
SELECT * 
FROM language;

--2--
SELECT f.title,
       f.description,
       l.name AS language_name
FROM film AS f
JOIN language AS l
    ON f.language_id = l.language_id;
--3--
SELECT f.title,
       f.description,
       l.name AS language_name
FROM language AS l
LEFT JOIN film AS f
    ON l.language_id = f.language_id;

--4--
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Fight Clube'),
('American Psycho'),
('Ford V Ferrari');

--5--

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES language(language_id),
    title VARCHAR(100) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--6--

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
((SELECT id FROM new_film WHERE name='Fight Clube'), 1, 'Best twist film ever  ', 9,'David Fincher’s adaptation of the Chuck Palahniuk novel is a shrewd and expertly crafted study of the male in crisis.
'),
((SELECT id FROM new_film WHERE name='Ford v Ferrari'), 1, 'excellent sport drama', 7, '"Ford V Ferrari is an excellent sports drama that proves you don’t have to be an expert on the rules to lose yourself in the game."
');

--7--
DELETE FROM new_film
WHERE name = 'American Psycho';

        -- Exercise 2 : DVD Rental--

--1--
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE film_id IN (10, 20, 30);

--2--
--store_id and address_id-
--You cannot insert a customer with a store_id that doesn’t exist in the store table.
--You cannot insert a customer with an address_id that doesn’t exist in the address table.
--If you try to insert a row violating these references, PostgreSQL will throw a foreign key violation error.

--3--
DROP TABLE customer_review CASCADE;

--4--
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
--5--
SELECT f.title, f.rental_rate, r.rental_date
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
--6--
    --1--
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
  AND a.first_name || ' ' || a.last_name = 'Penelope Monroe';

    --2--
SELECT title
FROM film
WHERE length < 60
  AND rating = 'R';
    --3--
SELECT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
    --4--
SELECT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;

