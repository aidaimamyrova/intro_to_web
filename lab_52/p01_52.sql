-- 1. Count how many employees are in each department
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;

-- 2. Calculate the total salary spent per department
SELECT department, SUM(salary) 
FROM employees 
GROUP BY department;

-- 3. Find the average salary for each department
SELECT department, AVG(salary) 
FROM employees 
GROUP BY department;

-- 4. Find the highest salary in each department
SELECT department, MAX(salary) 
FROM employees 
GROUP BY department;