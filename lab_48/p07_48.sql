ALTER TABLE products ALTER COLUMN price TYPE INTEGER;

-- Verify the data type change
SELECT price FROM products;