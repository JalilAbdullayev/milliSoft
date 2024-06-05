--8.5.
SELECT seller_name,
       seller_surname,
       seller_father_name,
       seller_salary + (SUM(sale_quantity * product_sale_price * (1 - sale_discount / 100)) * 0.02) 'salary'
FROM sales
         JOIN products ON products.product_id = sales.sale_product_id
         JOIN sellers s ON s.seller_id = sales.sale_seller_id
WHERE MONTH(sale_datetime) = MONTH('2024-04-12')
  AND YEAR(sale_datetime) = YEAR('2024-04-12')
GROUP BY seller_name, seller_surname, seller_father_name, seller_salary
--8.6.
CREATE PROCEDURE insertProduct @productId INT, @productQuantity INT, @productSellerId INT, @productClientId INT,
                               @productDiscount INT
AS
BEGIN
    IF (SELECT product_quantity FROM products WHERE product_id = @productId) < @productQuantity
        BEGIN
            SELECT 'Not enough products'
        END
    ELSE
        BEGIN
            INSERT INTO sales
            VALUES (@productClientId, @productSellerId, @productId, @productQuantity, @productDiscount, GETDATE())
        END
END
    CREATE TRIGGER saleProduct
        ON sales
        AFTER INSERT
        AS
    BEGIN
        DECLARE @productId INT
        DECLARE @productQuantity INT
        SELECT @productId = sale_product_id, @productQuantity = sale_quantity FROM inserted
        UPDATE products
        SET product_quantity = product_quantity - @productQuantity
        WHERE product_id = @productId
    END
        EXEC insertProduct @productId = 10, @productQuantity = 1, @productSellerId = 1, @productClientId = 1,
             @productDiscount = 0
        --7.6.
        CREATE FUNCTION taxes(@sellerId INT)
            RETURNS FLOAT
        BEGIN
            DECLARE @tax FLOAT = 0.14
            DECLARE @sellerSalary FLOAT = (SELECT seller_salary FROM sellers WHERE seller_id = @sellerId)
            RETURN @sellerSalary - @sellerSalary * @tax
        END
        SELECT dbo.taxes(1) AS 'Vergi çıxılmaqla maaş'
        --8.7.
        CREATE VIEW contractWillEnd AS
        SELECT *
        FROM sellers
        WHERE DATEDIFF(MONTH, GETDATE(), seller_contract_date) <= 30

--8.8
        CREATE PROCEDURE expired
        AS
        BEGIN
            UPDATE products
            SET product_status = 0
            WHERE product_expiration_date < GETDATE()
        END
            EXEC expired