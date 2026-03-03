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

-- 1. Retrieve employees with a salary greater than 60,000
SELECT * FROM employees WHERE salary > 60000;

-- 2. Retrieve employees hired after January 1, 2020
SELECT * FROM employees WHERE hire_date > '2020-01-01';

-- 3. Retrieve employees who work in the HR or Finance department
SELECT * FROM employees WHERE department IN ('HR', 'Finance');