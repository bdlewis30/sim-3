--70F

CREATE TABLE IF NOT EXISTS Users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(180), --69C
    email VARCHAR(180),
    firstName VARCHAR(180), 
    lastName VARCHAR(180), 
    gender VARCHAR(180), 
    hairColor VARCHAR(50), 
    eyeColor VARCHAR(50), 
    hobby VARCHAR(180), 
    bDay INTEGER, 
    bMonth VARCHAR(10), 
    bYear INTEGER, --69D
    auth_id TEXT --69E
);

