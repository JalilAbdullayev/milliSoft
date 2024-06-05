CREATE DATABASE administration
USE administration

CREATE TABLE degree (
    role_id   INT IDENTITY PRIMARY KEY,
    role_name NVARCHAR(20) UNIQUE
);

INSERT INTO roles (role_name)
VALUES ('Admin'),
       (N'Təlimçi'),
       ('Mentor'),
       (N'Tələbə');

CREATE TABLE users (
    user_id   INT IDENTITY PRIMARY KEY,
    user_name NVARCHAR(20) UNIQUE,
    user_role INT FOREIGN KEY REFERENCES roles(role_id)
);

INSERT INTO users (user_name, user_role)
VALUES (N'Cəlil Abdullayev', 1),
       (N'İsgəndər Zeynalov', 2),
       (N'Əli Vəliyev', 3),
       (N'Əliyeva Zərif', 4);

CREATE PROC insertPermission @user INT, @name NVARCHAR(20), @status INT
AS
BEGIN
    DECLARE @userStatus INT = (SELECT user_role FROM users WHERE user_id = @user)
    IF @userStatus = 1
        BEGIN
            INSERT INTO users (user_name, user_role) VALUES (@name, @status)
        END
    ELSE
        IF @userStatus = 2 AND @status IN (3, 4)
            BEGIN
                INSERT INTO users (user_name, user_role) VALUES (@name, @status)
            END
        ELSE
            IF @userStatus = 3 AND @status = 4
                BEGIN
                    INSERT INTO users (user_name, user_role) VALUES (@name, @status)
                END
            ELSE
                SELECT N'Sizin bu əməliyyat üzrə səlahiyyət yoxdur.'
END
    CREATE PROC insertPermission @user INT, @name NVARCHAR(20), @status INT
    AS
    BEGIN
        DECLARE @userStatus INT = (SELECT user_role FROM users WHERE user_id = @user)
        IF @userStatus = 1
            BEGIN
                INSERT INTO users (user_name, user_role) VALUES (@name, @status)
            END
        ELSE
            IF @userStatus < @status
                BEGIN
                    INSERT INTO users (user_name, user_role) VALUES (@name, @status)
                END
            ELSE
                SELECT N'Sizin bu əməliyyat üzrə səlahiyyət yoxdur.'
    END
        CREATE PROC deletePermission @user INT, @deletedUser INT
        AS
        BEGIN
            DECLARE @userStatus INT = (SELECT user_role FROM users WHERE user_id = @user)
            DECLARE @deletedStatus INT = (SELECT user_role FROM users WHERE user_id = @deletedUser)
            IF @userStatus = 1
                BEGIN
                    DELETE FROM users WHERE user_id = @user
                END
            ELSE
                IF @userStatus < @deletedStatus
                    BEGIN
                        DELETE FROM users WHERE user_id = @user AND user_role < @userStatus
                    END
                ELSE
                    SELECT N'Sizin bu əməliyyat üzrə səlahiyyət yoxdur.'
        END

        EXEC deletePermission @user = 3, @deletedUser = 1