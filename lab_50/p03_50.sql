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

-- 1. Retrieve employees whose first name starts with 'A'
SELECT * FROM employees WHERE first_name LIKE 'A%';

-- 2. Retrieve employees whose last name contains 'son'
SELECT * FROM employees WHERE last_name LIKE '%son%';

-- 3. Retrieve employees whose first name ends with 'e'
SELECT * FROM employees WHERE first_name LIKE '%e';