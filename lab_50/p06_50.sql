-- Create the employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    department TEXT,
    salary INTEGER,
    hire_date DATE
);

-- Insert sample employee records
INSERT INTO employees (first_name, last_name, department, salary, hire_date) VALUES
('Alice', 'Smith', 'HR', 50000, '2020-06-15'),
('Bob', 'Johnson', 'IT', 70000, '2019-08-23'),
('Charlie', 'Williams', 'Finance', 65000, '2021-03-11'),
('David', 'Brown', 'IT', 72000, '2018-09-30'),
('Emma', 'Davis', 'HR', 48000, '2022-01-05');

-- 1. Count the total number of employees
SELECT COUNT(*) FROM employees;

-- 2. Calculate the total payroll (Sum of all salaries)
SELECT SUM(salary) FROM employees;

-- 3. Calculate the average salary across the company
SELECT AVG(salary) FROM employees;

-- 4. Find the highest and lowest salaries
SELECT MAX(salary) AS highest_salary, MIN(salary) AS lowest_salary FROM employees;