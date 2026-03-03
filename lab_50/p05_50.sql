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

-- 1. Sort employees by salary in descending order (highest to lowest)
SELECT * FROM employees ORDER BY salary DESC;

-- 2. Sort employees by last name in alphabetical order (A-Z)
SELECT * FROM employees ORDER BY last_name ASC;

-- 3. Retrieve the top 3 highest-paid employees
SELECT * FROM employees ORDER BY salary DESC LIMIT 3;

-- 4. Retrieve the 2 oldest employees based on hire date
SELECT * FROM employees ORDER BY hire_date ASC LIMIT 2;