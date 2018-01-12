INSERT INTO Users
(username, email, firstName, lastName, gender, hairColor, eyeColor, hobby, bDay, bMonth, bYear, auth_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
RETURNING *;

--67E
--67G
