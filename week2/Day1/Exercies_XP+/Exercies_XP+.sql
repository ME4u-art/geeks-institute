

--Exercise 1 : Items and customers--
--Add two table--
CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT DEFAULT 0
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE
);
--Add the following items to the items table--
INSERT INTO items(item_name,price)
VALUES
    ('Small Desk',100),
    ('Large Desk',300),
    ('Fan',80);

--Add 5 new customers to the customers table--
INSERT INTO customers (first_name,last_name)
VALUES
    ('Greg','Jones'),
    ('Sandra','Jones'),
    ('Scott','Scott'),
    ('Trevor','Green'),
    ('Melanie','Johnson');
--Use SQL to fetch the following data from the database--
--1--

SELECT *
FROM items;

--2--

SELECT *
from items
WHERE price > 80;

--3--

SELECT *
from items
WHERE price < 300;

--4--

SELECT *
FROM customers
WHERE last_name = 'Smith';
--(NO data)--

--5--

SELECT *
FROM customers
WHERE last_name = 'Jones';

--6--

SELECT *
FROM customers
WHERE last_name !='Scott';
