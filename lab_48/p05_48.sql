ALTER TABLE users DROP COLUMN phone_number;

-- Verify by trying to select the column (should give an error)
SELECT phone_number FROM users;