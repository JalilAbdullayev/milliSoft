--7.4.
CREATE TABLE users (
    user_id       INT IDENTITY (1, 1) PRIMARY KEY,
    user_name     NVARCHAR(50) NOT NULL,
    user_surname  NVARCHAR(50) NOT NULL,
    user_activity BIT DEFAULT 1
)
INSERT INTO users (user_name, user_surname)
VALUES (N'Cəlil', 'Abdullayev')
CREATE TABLE logs (
    log_id       INT IDENTITY PRIMARY KEY,
    log_user_id  INT FOREIGN KEY REFERENCES users(user_id),
    log_activity NVARCHAR(50),
    log_date     DATETIME DEFAULT GETDATE(),
)
--Insert:
CREATE TRIGGER logInsert
    ON users
    AFTER INSERT
    AS
BEGIN
    DECLARE
        @userId INT = (SELECT user_id FROM inserted)
    INSERT INTO logs (log_user_id, log_activity) VALUES (@userId, 'INSERT')
END
--Delete:
    CREATE TRIGGER logDelete
        ON users
        INSTEAD OF
            DELETE
        AS
    BEGIN
        DECLARE
            @userId INT = (SELECT user_id FROM deleted)
        INSERT INTO logs (log_user_id, log_activity) VALUES (@userId, 'DELETE')
        UPDATE users
        SET user_activity = 0
        WHERE user_id = @userId
    END
--Update:
        CREATE TRIGGER logUpdate
            ON users
            AFTER
                UPDATE
            AS
        BEGIN
            DECLARE
                @userId INT = (SELECT user_id FROM inserted)
            INSERT INTO logs (log_user_id, log_activity) VALUES (@userId, 'UPDATE')
        END
            UPDATE users
            SET user_name='Nail'
            WHERE user_id = 1
            INSERT
            INTO users (user_name, user_surname)
            VALUES (N'Cəlil', 'Abdullayev')
            DELETE
            FROM users
            WHERE user_id = 1