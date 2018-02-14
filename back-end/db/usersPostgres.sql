DROP DATABASE IF EXISTS selfish_users;
CREATE DATABASE selfish_users;

\c selfish_users;


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  full_name VARCHAR,
  username VARCHAR UNIQUE,
  password_digest VARCHAR
);

CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  post_image VARCHAR,
  caption VARCHAR,
  user_id INTEGER REFERENCES users(ID),
  dates VARCHAR
);

CREATE TABLE likes (
  ID SERIAL PRIMARY KEY,
  liker_id INTEGER REFERENCES users(ID),
  post_id INTEGER REFERENCES posts(ID)
);


CREATE TABLE follows (
  ID SERIAL PRIMARY KEY,
  follower_id INTEGER REFERENCES users(ID),
  followee_id INTEGER REFERENCES users(ID)
);

-- INSERT INTO users VALUES (1, 'john@jazz.com', 'John Stockton', 'assistleader', 'password');
-- INSERT INTO users VALUES (2, 'mailman@jazz.com', 'Karl Malone', 'mailman', 'password');
-- INSERT INTO users VALUES (3, 'notarolemodel@suns.com', 'Charles Barkley', 'sircharles', 'password');
-- INSERT INTO users VALUES (4, 'mrrobinson@spurs.com', 'David Robinson', 'admiral', 'password');
-- INSERT INTO users VALUES (5, 'clyde@blazers.com', 'Clyde Drexler', 'theglide', 'password');
-- INSERT INTO users VALUES (6, 'legend@celtics.com', 'Larry Bird', 'larrylegend', 'password');
-- INSERT INTO users VALUES (7, 'lefty@warriors.com', 'Chris Mullin', 'luckylefty', 'password');
-- INSERT INTO users VALUES (8, 'magic@lakers.com', 'Magic Johnson', 'magic', 'password');
-- INSERT INTO users VALUES (9, 'pip@bulls.com', 'Scottie Pippen', 'pippenainteasy', 'password');
-- INSERT INTO users VALUES (10, 'air@bulls.com', 'Michael Jordan', 'airjordan', 'password');


