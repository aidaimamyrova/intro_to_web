ALTER TABLE users ADD COLUMN phone_number VARCHAR(20);

-- Verify the structure
SELECT phone_number FROM users;