CREATE DATABASE sales

CREATE TABLE filial (
    id      INT IDENTITY PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
)

INSERT INTO filial
VALUES ('28 May', '28 May')

CREATE TABLE gender (
    id   TINYINT IDENTITY PRIMARY KEY,
    name NVARCHAR(5) NOT NULL
)

INSERT INTO gender
VALUES (N'Kişi'),
       (N'Qadın')

CREATE TABLE category (
    id   INT IDENTITY PRIMARY KEY,
    name NVARCHAR(255) NOT NULL
)

INSERT INTO category
VALUES ('Elektronika'),
       ('Telefon'),
       ('Kompyuter')

CREATE TABLE marka (
    id   INT IDENTITY PRIMARY KEY,
    name NVARCHAR(255) NOT NULL
)

INSERT INTO marka
VALUES ('Apple'),
       ('Samsung'),
       ('Xiaomi')

CREATE TABLE model (
    id       INT IDENTITY PRIMARY KEY,
    name     NVARCHAR(255) NOT NULL,
    marka_id INT FOREIGN KEY REFERENCES marka (id)
)

INSERT INTO model
VALUES ('iPhone 13', 1),
       ('iPhone 14', 1),
       ('iPhone 15', 1),
       ('Galaxy S21', 2),
       ('Galaxy S22', 2),
       ('Galaxy S23', 2),
       ('Xiaomi 13', 3),
       ('Xiaomi 14', 3),
       ('Xiaomi 15', 3)

CREATE TABLE client (
    id           INT IDENTITY PRIMARY KEY,
    name         NVARCHAR(20)  NOT NULL,
    surname      NVARCHAR(20)  NOT NULL,
    father_name  NVARCHAR(20)  NOT NULL,
    FIN          VARCHAR(7)    NOT NULL,
    birthdate    DATE          NOT NULL,
    gender_id    TINYINT FOREIGN KEY REFERENCES gender (id),
    phone_number VARCHAR(10)   NOT NULL,
    address      NVARCHAR(255) NOT NULL
)

INSERT INTO client
VALUES (N'Əli', N'Əliyev', N'Əliqulu', '1Y215T1', '2000-01-01', 1, '0551548954', 'Baku')

CREATE TABLE seller (
    id          INT IDENTITY PRIMARY KEY,
    name        NVARCHAR(20) NOT NULL,
    surname     NVARCHAR(20) NOT NULL,
    father_name NVARCHAR(20) NOT NULL,
    birthdate   DATE         NOT NULL,
    gender_id   TINYINT FOREIGN KEY REFERENCES gender (id),
    salary      SMALLINT     NOT NULL,
    filial_id   INT FOREIGN KEY REFERENCES filial (id)
)

INSERT INTO seller
VALUES (N'Jalə', N'Ələsgərova', N'Sabir', '2000-01-01', 2, 1000, 1)

CREATE TABLE product (
    id             INT IDENTITY PRIMARY KEY,
    category_id    INT FOREIGN KEY REFERENCES category (id),
    model_id       INT FOREIGN KEY REFERENCES model (id),
    purchase_price INT NOT NULL,
    sale_price     INT NOT NULL
)

INSERT INTO product
VALUES (2, 1, 1000, 2000)

CREATE TABLE sale (
    id         INT IDENTITY PRIMARY KEY,
    client_id  INT FOREIGN KEY REFERENCES client (id),
    seller_id  INT FOREIGN KEY REFERENCES seller (id),
    product_id INT FOREIGN KEY REFERENCES product (id),
    quantity   INT  NOT NULL,
    discount   TINYINT,
    date       DATE NOT NULL
)

INSERT INTO sale
VALUES (1, 1, 1, 1, 10, '2022-01-01')