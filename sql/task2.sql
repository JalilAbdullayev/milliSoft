CREATE DATABASE sales

CREATE TABLE filial (
    filial_id      INT IDENTITY PRIMARY KEY,
    filial_name    NVARCHAR(255) NOT NULL,
    filial_address NVARCHAR(255) NOT NULL
)

INSERT INTO filial
VALUES ('28 May', '28 May'),
       (N'Gənclik', N'Gənclik Mall'),
       ('Nizami', 'Nizami Mall')

CREATE TABLE gender (
    gender_id   TINYINT IDENTITY PRIMARY KEY,
    gender_name NVARCHAR(5) NOT NULL
)

INSERT INTO gender
VALUES (N'Kişi'),
       (N'Qadın')

CREATE TABLE categories (
    category_id   INT IDENTITY PRIMARY KEY,
    category_name NVARCHAR(255) NOT NULL
)

INSERT INTO categories
VALUES ('Televizor'),
       ('Telefon'),
       ('Kompyuter')

CREATE TABLE marka (
    marka_id   INT IDENTITY PRIMARY KEY,
    marka_name NVARCHAR(255) NOT NULL
)

INSERT INTO marka
VALUES ('Apple'),
       ('Samsung'),
       ('Xiaomi'),
       ('Lenovo'),
       ('HP'),
       ('Dell')

CREATE TABLE models (
    model_id       INT IDENTITY PRIMARY KEY,
    model_name     NVARCHAR(255) NOT NULL,
    model_marka_id INT FOREIGN KEY REFERENCES marka(marka_id)
)

INSERT INTO models
VALUES ('iPhone 13', 1),
       ('iPhone 14', 1),
       ('iPhone 15', 1),
       ('Galaxy S21', 2),
       ('Galaxy S22', 2),
       ('Galaxy S23', 2),
       ('Xiaomi 13', 3),
       ('Xiaomi 14', 3),
       ('Xiaomi 15', 3),
       ('Lenovo Legion', 4),
       ('HP Omen', 5),
       ('Dell Alienware', 6)

--13.
SELECT CONCAT(model_name, ' (', LEN(model_name), ')')
FROM models

CREATE TABLE clients (
    client_id           INT IDENTITY PRIMARY KEY,
    client_name         NVARCHAR(20)  NOT NULL,
    client_surname      NVARCHAR(20)  NOT NULL,
    client_father_name  NVARCHAR(20)  NOT NULL,
    client_FIN          VARCHAR(7)    NOT NULL,
    client_gender_id    TINYINT FOREIGN KEY REFERENCES gender(gender_id),
    client_phone_number VARCHAR(10)   NOT NULL,
    client_address      NVARCHAR(255) NOT NULL
)

INSERT INTO clients
VALUES (N'Əli', N'Əliyev', N'Əliqulu', '1Y215T1', 1, '0551548954', 'Baku')

CREATE TABLE sellers (
    seller_id          INT IDENTITY PRIMARY KEY,
    seller_name        NVARCHAR(20) NOT NULL,
    seller_surname     NVARCHAR(20) NOT NULL,
    seller_father_name NVARCHAR(20) NOT NULL,
    seller_birthdate   DATE         NOT NULL,
    seller_gender_id   TINYINT FOREIGN KEY REFERENCES gender(gender_id),
    seller_salary      FLOAT        NOT NULL,
    seller_filial_id   INT FOREIGN KEY REFERENCES filial(filial_id)
)


INSERT INTO sellers
VALUES (N'Jalə', N'Ələsgərova', N'Sabir', '2000-01-01', 2, 1000, 1),
       ('Murad', N'Ələkbərov', 'Rasim', '2001-02-04', 1, 1200, 2)

--2.
SELECT seller_id,
       seller_name,
       seller_surname,
       seller_father_name,
       seller_birthdate,
       seller_salary,
       gender_name,
       filial_name,
       filial_address
FROM sellers
         JOIN filial ON filial.filial_id = sellers.seller_filial_id
         JOIN gender ON gender.gender_id = sellers.seller_gender_id;

--4.
SELECT *
FROM sellers
WHERE seller_name = 'Murad'

--5.
SELECT *
FROM sellers
WHERE DATEDIFF(YEAR, seller_birthdate, GETDATE()) < 25

--12.
SELECT CONCAT(seller_name, ' ', seller_surname, ' ', seller_father_name) 'Name Surname Father name'
FROM sellers

CREATE TABLE products (
    product_id             INT IDENTITY PRIMARY KEY,
    product_category_id    INT FOREIGN KEY REFERENCES categories(category_id),
    product_model_id       INT FOREIGN KEY REFERENCES models(model_id),
    product_purchase_price FLOAT NOT NULL,
    product_sale_price     FLOAT NOT NULL,
    product_quantity       INT   NOT NULL DEFAULT 0
)

INSERT INTO products
VALUES (2, 1, 1000, 2000, 2),
       (2, 2, 2000, 3000, 1),
       (3, 10, 10000, 20000, 3),
       (3, 11, 20000, 30000, 4),
       (3, 12, 30000, 40000, 2),
       (2, 2, 4000, 5000, 1),
       (2, 3, 900, 1070, 5),
       (2, 4, 1000, 1340, 11),
       (2, 5, 1600, 2140, 14),
       (2, 6, 2000, 3040, 9),
       (2, 7, 1100, 1250, 7),
       (2, 8, 1700, 1900, 3),
       (2, 9, 1800, 2000, 4)

--1.
SELECT product_id, model_name, category_name, marka_name, product_purchase_price, product_sale_price
FROM products
         JOIN categories ON products.product_category_id = categories.category_id
         JOIN models ON models.model_id = products.product_model_id
         JOIN marka ON models.model_marka_id = marka.marka_id

--3.
SELECT product_id, product_category_id, product_model_id, product_purchase_price, product_sale_price, category_name
FROM products
         INNER JOIN categories ON categories.category_id = products.product_category_id

--6.
SELECT product_model_id, COUNT(product_model_id) 'model_count'
FROM products
GROUP BY product_model_id

--7.
SELECT model_marka_id 'marka_id', model_id, SUM(product_quantity) 'product_count'
FROM models
         INNER JOIN products ON models.model_id = products.product_model_id
GROUP BY model_marka_id, model_id

--14.
SELECT TOP 1 *
FROM products
ORDER BY product_sale_price DESC

--15.
SELECT *
FROM products
WHERE product_sale_price = (SELECT MAX(product_sale_price) FROM products)
UNION
(SELECT * FROM products WHERE product_sale_price = (SELECT MIN(product_sale_price) FROM products))

--16.
SELECT marka_name,
       model_name,
       product_sale_price,
       CASE WHEN product_sale_price < 1000                THEN N'münasib'
            WHEN product_sale_price BETWEEN 1000 AND 2500 THEN N'orta qiymətli'
                                                          ELSE N'baha'
            END 'dərəcə'
FROM products
         JOIN models ON models.model_id = products.product_model_id
         JOIN marka ON marka.marka_id = models.model_marka_id
ORDER BY product_sale_price

CREATE TABLE sales (
    sale_id         INT IDENTITY PRIMARY KEY,
    sale_client_id  INT FOREIGN KEY REFERENCES clients(client_id),
    sale_seller_id  INT FOREIGN KEY REFERENCES sellers(seller_id),
    sale_product_id INT FOREIGN KEY REFERENCES products(product_id),
    sale_quantity   INT      NOT NULL DEFAULT 1,
    sale_discount   FLOAT             DEFAULT 0,
    sale_datetime   DATETIME NOT NULL DEFAULT GETDATE()
)

INSERT INTO sales
VALUES (1, 1, 1, 1, 10, '2022-01-01 11:42'),
       (1, 2, 3, 3, 0, '2024-01-30 17:50'),
       (1, 2, 4, 1, 15, '2024-01-30 17:50'),
       (1, 1, 5, 2, 5, '2024-02-01 17:48'),
       (1, 1, 2, 1, 1, '2024-03-09 16:37'),
       (1, 1, 5, 4, 0, '2024-04-07 14:53')

--8.
SELECT filial_name,
       SUM(product_sale_price) - SUM(product_sale_price * sale_quantity * sale_discount / 100) 'sale_per_month',
       MONTH(sale_datetime)                                                                    'month'
FROM sales
         JOIN sellers ON sales.sale_seller_id = sellers.seller_id
         JOIN filial ON filial.filial_id = sellers.seller_filial_id
         JOIN products ON sales.sale_product_id = products.product_id
GROUP BY filial_name, MONTH(sale_datetime)

--9.
SELECT TOP 1 COUNT(sale_product_id) 'sale_count', SUM(sale_quantity) 'quantity', product_model_id
FROM sales
         JOIN products ON sales.sale_product_id = products.product_id
GROUP BY product_model_id
ORDER BY sale_count DESC, quantity DESC

--10.
SELECT TOP 1 sale_seller_id, COUNT(sale_id) 'sale_count'
FROM sales
GROUP BY sale_seller_id
ORDER BY sale_count

CREATE VIEW sales_per_month_view AS
SELECT seller_name,
       seller_surname,
       seller_father_name,
       SUM(sale_quantity * product_sale_price -
           sale_quantity * product_sale_price * sale_discount / 100) 'sale_per_month',
       MONTH(sale_datetime)                                          'month'
FROM sales
         JOIN sellers ON sellers.seller_id = sales.sale_seller_id
         JOIN products ON products.product_id = sales.sale_product_id
GROUP BY MONTH(sale_datetime), seller_name, seller_surname, seller_father_name

--11.
SELECT *
FROM sales_per_month_view
WHERE sale_per_month > 3000

--17.
SELECT COUNT(sale_id) 'sale_count', MONTH(sale_datetime) 'month'
FROM sales
WHERE MONTH(sale_datetime) = MONTH('2024-04-12 00:00:00.000')
GROUP BY sale_datetime

CREATE VIEW sales_count_view AS
SELECT seller_name,
       seller_surname,
       seller_father_name,
       seller_salary,
       COUNT(sale_id)                   'sale_count',
       MONTH('2024-04-12 00:00:00.000') 'month'
FROM sales
         JOIN sellers ON sellers.seller_id = sales.sale_seller_id
GROUP BY seller_name, seller_surname, seller_father_name, seller_salary

--18.
SELECT TOP 1 *
FROM sales_count_view
ORDER BY sale_count DESC

--19.
SELECT TOP 1 *
FROM sales_per_month_view
WHERE month = MONTH('2024-04-12 00:00:00.000')
ORDER BY sale_per_month DESC

--20.
UPDATE sellers
SET seller_salary = seller_salary * 1.5
WHERE seller_id = (SELECT TOP 1 seller_id
                   FROM sales_count_view
                            JOIN sellers ON sales_count_view.seller_surname = sellers.seller_surname
                   ORDER BY sale_count DESC)