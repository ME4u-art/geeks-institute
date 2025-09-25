--select--

--1--
SELECT last_name,id
FROM students
ORDER BY last_name ASC
LIMIT 4;

--2--

SELECT id ,first_name ,last_name,birth_date
FROM students
WHERE birth_date = (SELECT MAX(birth_date)FROM students);

--3--
select *
FROM students
OFFSET 2
LIMIT 3;

