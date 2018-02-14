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


