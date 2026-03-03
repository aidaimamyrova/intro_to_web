ALTER TABLE users RENAME COLUMN full_name TO name;

-- Verify the column name change
SELECT name FROM users;