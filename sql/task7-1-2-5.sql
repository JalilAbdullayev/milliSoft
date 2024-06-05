--7.1.
CREATE DATABASE auth

CREATE TABLE users (
    user_id       INT IDENTITY PRIMARY KEY,
    user_name     VARCHAR(20)  NOT NULL UNIQUE,
    user_password VARCHAR(100) NOT NULL
)

INSERT INTO users
VALUES ('Jalil', '123'),
       ('Jack', '123')

CREATE PROCEDURE userInsert @user VARCHAR(20), @password VARCHAR(100)
AS
BEGIN
    IF EXISTS(SELECT * FROM users WHERE user_name = @user)
        BEGIN
            SELECT @user + ' already exists.' AS 'Message'
        END
    ELSE
        BEGIN
            INSERT INTO users VALUES (@user, @password);
        END
END
    EXEC userInsert 'Jalil', '123'

--7.2.
    CREATE PROCEDURE resetPassword @user VARCHAR(20), @password VARCHAR(100), @newPassword VARCHAR(100)
    AS
    BEGIN
        IF NOT EXISTS(SELECT * FROM users WHERE user_name = @user)
            BEGIN
                SELECT @user + ' does not exist.' AS 'Message'
            END
        ELSE
            IF EXISTS(SELECT * FROM users WHERE user_name = @user AND user_password = @password)
                BEGIN
                    UPDATE users
                    SET user_password = @newPassword
                    WHERE user_name = @user
                END
            ELSE
                BEGIN
                    SELECT 'Wrong password.' AS 'Message'
                END
    END
        EXEC resetPassword 'Jalil', '1234', '123456'
        --7.5.
        CREATE FUNCTION concat_alternative(@str1 VARCHAR(100), @str2 VARCHAR(100))
            RETURNS VARCHAR(200)
        AS
        BEGIN
            RETURN @str1 + ' ' + @str2
        END

    SELECT dbo.concat_alternative('Hello', 'World') 'string'