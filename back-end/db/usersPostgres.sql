DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR UNIQUE,
  full_name VARCHAR,
  username VARCHAR UNIQUE,
  password_digest VARCHAR,
  post VARCHAR
);
