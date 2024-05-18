CREATE DATABASE geo

CREATE TABLE religion (
    id   INT IDENTITY PRIMARY KEY,
    name NVARCHAR(20) NOT NULL
)

INSERT INTO religion
VALUES ('islam'),
       ('xristian'),
       ('hindu'),
       ('buddizm')

UPDATE geo.dbo.religion
SET name = 'buddist'
WHERE id = 4

CREATE TABLE countries (
    id          INT IDENTITY PRIMARY KEY,
    name        NVARCHAR(20) NOT NULL,
    phone_code  SMALLINT     NOT NULL,
    population  INT          NOT NULL DEFAULT 0,
    area        INT          NOT NULL DEFAULT 0,
    religion_id INT          NOT NULL FOREIGN KEY REFERENCES geo.dbo.religion (id)
)

INSERT INTO countries
VALUES ('Almaniya', 49, 83257547, 357592, 2),
       (N'İsveç', 46, 10666089, 450295, 2),
       ('Kanada', 1, 39066584, 9984670, 2),
       (N'Çin', 86, 1425238086, 9706961, 4),
       ('Hindistan', 91, 1440125027, 3287263, 3),
       (N'Küveyt', 965, 4344490, 17818, 1),
       (N'Norveç', 47, 5509513, 385207, 2)

SELECT *
FROM countries
ORDER BY name

SELECT *
FROM countries
WHERE population > 10000000
  AND religion_id = 2

SELECT TOP 3 *
FROM countries
ORDER BY population DESC

CREATE TABLE cities (
    id         INT IDENTITY PRIMARY KEY,
    name       NVARCHAR(20) NOT NULL,
    population INT          NOT NULL DEFAULT 0,
    area       FLOAT        NOT NULL DEFAULT 0,
    country_id INT          NOT NULL FOREIGN KEY REFERENCES geo.dbo.countries (id)
)

INSERT INTO cities
VALUES ('Drezden', 1343305, 328.48, 1),
       (N'Şanxay', 29868000, 6340, 4),
       ('Yeni Delhi', 33807000, 42.7, 5),
       ('Vankuver', 2683000, 2878.93, 3),
       ('Stokholm', 1720000, 188, 2),
       ('Oslo', 1056000, 454, 7),
       (N'Küveyt', 3298000, 860, 6)

SELECT *
FROM cities
WHERE name LIKE 'd%'

SELECT *
FROM cities
WHERE name LIKE '__n%'