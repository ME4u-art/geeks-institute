--Create--
CREATE TABLE IF NOT EXISTS students(
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    birth_date  DATE
);

--Insert--
--1--
INSERT INTO students(first_name,last_name,birth_date)
VALUES
    ('Marc','Benichou','02-11-1998'),
    ('Yoan','Cohen','03-12-2010'),
    ('Lea','Bennichou','27-07-1987'),
    ('Amelia','Dux','07-04-1996'),
    ('David','Grez','14-06-2003'),
    ('Omer','Simpson','03-10-1980');
--2--
INSERT INTO students(last_name,first_name,birth_date)
VALUES
    ('Gnouni','Hicham','01-06-2000');

--Select--

--1--

SELECT *
FROM students;

--2--

Select first_name,
       last_name
from students;

--3--
    --1--
Select first_name,last_name
FROM students
WHERE id = 2;
    --2--
Select first_name,last_name
from students
WHERE last_name = 'Benichou' and first_name = 'Marc';
    --3--
Select first_name,last_name
from students
WHERE last_name = 'Benichou'  OR first_name ='Marc';
    --4--
SELECT first_name
from students
WHERE first_name ILIKE '%a%'; 

    --5--
SELECT first_name
FROM students
WHERE first_name ILIKE 'a%'

    --6--
SELECT first_name
FROM students
WHERE first_name ILIKE '%a'

    --7--
SELECT first_name
FROM students
WHERE RIGHT(first_name , 2) LIKE '_a';

    --8--
SELECT first_name,id
FROM students
WHERE id in (1,3);

--4--

SELECT birth_date,first_name 
FROM students
WHERE birth_date >= '1/01/2000'
