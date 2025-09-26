        --Exercise 1 : DVD Rentals--

--1--
SELECT f.title, f.rating, f.description
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND (r.return_date IS NOT NULL OR r.rental_id IS NULL)
GROUP BY f.film_id, f.title, f.rating, f.description
ORDER BY f.title;

--2--
CREATE TABLE childrens_waiting_list (
    wait_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL REFERENCES film(film_id),
    customer_name VARCHAR(100) NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--3--
SELECT f.title,
       COUNT(w.wait_id) AS waiting_count
FROM childrens_waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.film_id, f.title
ORDER BY waiting_count DESC;

INSERT INTO childrens_waiting_list (film_id, customer_name)
VALUES 
(1, 'Alice'),
(1, 'Bob'),
(2, 'Charlie'),
(1, 'Daisy');

