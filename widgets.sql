DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE blog (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  description VARCHAR,
  email VARCHAR
);

INSERT INTO blog (title, description, email)
  VALUES ('testTitle', 'testDescription', 'testEmail');

INSERT INTO blog (title, description, email)
  VALUES ('testTitle2', 'testDescription2', 'testEmail2');