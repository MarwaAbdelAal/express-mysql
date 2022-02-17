-- CREATE DATABASE esp;
-- change with the appropriate database name
USE test;
CREATE TABLE IF NOT EXISTS temperature(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    temperature FLOAT
);
CREATE TABLE IF NOT EXISTS pressure(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pressure FLOAT
);
