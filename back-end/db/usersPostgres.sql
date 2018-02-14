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


INSERT INTO users (email, full_name, username, password_digest)
VALUES ('carolina@carolina.com', 'carolina', 'carolina', 'carolina'),
          ('michael@michael.com', 'michael', 'michael', 'michael'),
          ('eddie@eddie.com', 'eddie', 'eddieeddie', 'eddieeddie'),
          ('newton@newton', 'newton', 'newtonnewton', 'newtonnewton'),
          ('david@david', 'test1', 'test1', 'daviddavid'),
          ('asdf@david', 'test2', 'test2', 'daviddavid'),
          ('test3@david', 'test3', 'test3', 'daviddavid'),
          ('test4@david', 'test4', 'test4', 'daviddavid')

