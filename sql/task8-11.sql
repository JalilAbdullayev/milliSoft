CREATE DATABASE university
USE university

CREATE TABLE roles (
    role_id   INT IDENTITY PRIMARY KEY,
    role_name NVARCHAR(30) NOT NULL
)

INSERT INTO roles (role_name)
VALUES ('Admin'),
       (N'Təlimçi'),
       ('Mentor'),
       (N'Tələbə')

CREATE TABLE users (
    user_id      INT IDENTITY PRIMARY KEY,
    user_name    NVARCHAR(20) NOT NULL,
    user_surname NVARCHAR(30) NOT NULL,
    user_role    INT FOREIGN KEY REFERENCES roles(role_id)
)

INSERT INTO users (user_name, user_surname, user_role)
VALUES (N'Əli', N'Əliyev', 1),
       (N'Vəli', N'Əliyev', 2),
       (N'Əli', N'Əliyev', 3),
       (N'Nərgiz', N'İsgəndərova', 2),
       (N'Günel', N'Fərmanzadə', 3),
       (N'Ələsgər', N'Teymurlu', 4),
       ('Taleh', 'Yaqubov', 4)

CREATE TABLE groups (
    group_id      INT IDENTITY PRIMARY KEY,
    group_name    VARCHAR(10) NOT NULL,
    group_teacher INT FOREIGN KEY REFERENCES users(user_id),
    group_mentor  INT FOREIGN KEY REFERENCES users(user_id)
)

INSERT INTO groups (group_name, group_teacher, group_mentor)
VALUES ('1', 2, 3),
       ('2', 4, 5)

CREATE TABLE students (
    student_id      INT IDENTITY PRIMARY KEY,
    student_user_id INT FOREIGN KEY REFERENCES users(user_id),
    student_group   INT FOREIGN KEY REFERENCES groups(group_id)
)

INSERT INTO students (student_user_id, student_group)
VALUES (6, 1),
       (7, 2)

CREATE TABLE records (
    record_id   INT IDENTITY PRIMARY KEY,
    record_name NVARCHAR(30) NOT NULL,
    record_link VARCHAR(MAX) NOT NULL
)

INSERT INTO records (record_name, record_link)
VALUES (N'HTML', 'https://example.com'),
       (N'CSS', 'https://example.com')

CREATE TABLE recordPermission (
    permission_id         INT IDENTITY PRIMARY KEY,
    permission_student_id INT FOREIGN KEY REFERENCES students(student_id),
    permission_record_id  INT FOREIGN KEY REFERENCES records(record_id)
)

CREATE PROCEDURE givePermission @userId INT, @studentId INT, @recordId INT
AS
BEGIN
    IF EXISTS(SELECT user_role, group_mentor, group_teacher
              FROM students
                       JOIN users ON user_id = student_user_id
                       JOIN groups ON group_id = student_group
              WHERE student_id = @studentId AND @userId = group_mentor
                 OR @userId = group_teacher)
        BEGIN
            INSERT INTO recordPermission (permission_student_id, permission_record_id)
            VALUES (@studentId, @recordId)
        END
    ELSE
        IF (SELECT user_role FROM users WHERE user_id = @userId) = 1
            BEGIN
                INSERT INTO recordPermission (permission_student_id, permission_record_id)
                VALUES (@studentId, @recordId)
            END
END
    EXEC givePermission @userId = 1, @studentId = 1, @recordId = 2
    CREATE PROCEDURE revokePermission @userId INT, @studentId INT, @recordId INT
    AS
    BEGIN
        IF EXISTS(SELECT user_role, group_mentor, group_teacher
                  FROM students
                           JOIN users ON user_id = student_user_id
                           JOIN groups ON group_id = student_group
                  WHERE student_id = @studentId AND @userId = group_mentor
                     OR @userId = group_teacher)
            BEGIN
                DELETE
                FROM recordPermission
                WHERE permission_record_id = @recordId AND permission_student_id = @studentId
            END
        ELSE
            IF (SELECT user_role FROM users WHERE user_id = @userId) = 1
                BEGIN
                    DELETE
                    FROM recordPermission
                    WHERE permission_record_id = @recordId AND permission_student_id = @studentId
                END
    END
        EXEC revokePermission @userId = 4, @studentId = 1, @recordId = 2