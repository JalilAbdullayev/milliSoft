--8.1.
CREATE DATABASE telecom
USE telecom

CREATE TABLE customers (
    customer_id         INT IDENTITY PRIMARY KEY,
    customer_first_name NVARCHAR(50) NOT NULL,
    customer_last_name  NVARCHAR(50) NOT NULL
)

INSERT INTO customers (customer_first_name, customer_last_name)
VALUES ('John', 'Doe'),
       ('Jane', 'Doe'),
       ('Joe', 'Doe'),
       ('Jill', 'Doe'),
       ('Jack', 'Doe');

CREATE TABLE numbers (
    number_id          INT IDENTITY PRIMARY KEY,
    number_customer_id INT FOREIGN KEY REFERENCES customers(customer_id),
    number             VARCHAR(13) NOT NULL
)

INSERT INTO numbers (number_customer_id, number)
VALUES (1, '0551459615'),
       (2, '0502451583'),
       (3, '0705415678'),
       (4, '0104587412'),
       (5, '0514578224'),
       (1, '0775876874'),
       (2, '0997512475'),
       (3, '0102437376'),
       (4, '0994524762'),
       (5, '0775425872'),
       (1, '+994702145879'),
       (2, '994774525975'),
       (2, '994774525975'),
       (3, '+994557845216'),
       (4, '994778542165'),
       (3, '994778542165')


CREATE VIEW operators AS
SELECT customer_id,
       customer_first_name,
       customer_last_name,
       CASE WHEN number LIKE '055%'
           OR number LIKE '099%'
           OR number LIKE '_99499%'
           OR number LIKE '_99455%'
           OR number LIKE '99455%'
           OR number LIKE '99499%'      THEN 'Bakcell'
            WHEN number LIKE '070%'
                OR number LIKE '077%'
                OR number LIKE '_99470%'
                OR number LIKE '_99477%'
                OR number LIKE '99470%'
                OR number LIKE '99477%' THEN 'Nar'
            WHEN number LIKE '050%'
                OR number LIKE '051%'
                OR number LIKE '010%'
                OR number LIKE '_99450%'
                OR number LIKE '_99451%'
                OR number LIKE '_99410%'
                OR number LIKE '99450%'
                OR number LIKE '99451%'
                OR number LIKE '99410%' THEN 'Azercell'
            END 'Operator'
FROM customers
         JOIN numbers ON customers.customer_id = numbers.number_customer_id

SELECT operators.customer_first_name, operators.customer_last_name
FROM operators
         JOIN bakcell ON operators.customer_id = bakcell.customer_id
         JOIN azercell ON operators.customer_id = azercell.customer_id
         JOIN nar ON operators.customer_id = nar.customer_id
GROUP BY operators.customer_first_name, operators.customer_last_name

CREATE VIEW bakcell AS
    SELECT customer_id, customer_first_name, customer_last_name, number
    FROM customers
             JOIN numbers ON customers.customer_id = numbers.number_customer_id
    WHERE number LIKE '055%'
       OR number LIKE '099%'
       OR number LIKE '_99499%'
       OR number LIKE '_99455%'
       OR number LIKE '99455%'
       OR number LIKE '99499%'

CREATE VIEW azercell AS
    SELECT customer_id, customer_first_name, customer_last_name, number
    FROM customers
             JOIN numbers ON customers.customer_id = numbers.number_customer_id
    WHERE number LIKE '050%'
       OR number LIKE '051%'
       OR number LIKE '010%'
       OR number LIKE '_99450%'
       OR number LIKE '_99451%'
       OR number LIKE '_99410%'
       OR number LIKE '99450%'
       OR number LIKE '99451%'
       OR number LIKE '99410%'

CREATE VIEW nar AS
    SELECT customer_id, customer_first_name, customer_last_name, number
    FROM customers
             JOIN numbers ON customers.customer_id = numbers.number_customer_id
    WHERE number LIKE '070%'
       OR number LIKE '077%'
       OR number LIKE '_99470%'
       OR number LIKE '_99477%'
       OR number LIKE '99470%'
       OR number LIKE '99477%'

--8.2.
CREATE PROCEDURE reformat
AS
BEGIN
    UPDATE numbers
    SET number =CONCAT('+994', SUBSTRING(number, 2, 13))
    WHERE number LIKE '0%'
      AND number NOT LIKE '+994%';
    UPDATE numbers
    SET number =CONCAT('+994', SUBSTRING(number, 4, 13))
    WHERE number LIKE '994%'
      AND number NOT LIKE '+994%';
END
    EXEC reformat
    CREATE PROCEDURE removeRepeated
    AS
    BEGIN
        DELETE
        FROM numbers
        WHERE number_id NOT IN
              (SELECT MIN(number_id)
               FROM numbers
               GROUP BY number)
    END
        EXEC removeRepeated
