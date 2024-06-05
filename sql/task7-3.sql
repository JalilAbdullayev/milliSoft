--7.3.
CREATE DATABASE education
USE education

CREATE TABLE faculties (
    faculty_id   INT IDENTITY PRIMARY KEY,
    faculty_name NVARCHAR(50) NOT NULL
)

INSERT INTO faculties
VALUES ('Computer Science'),
       ('Mathematics')

CREATE TABLE groups (
    group_id         INT IDENTITY PRIMARY KEY,
    group_name       NVARCHAR(10) NOT NULL,
    group_faculty_id INT FOREIGN KEY REFERENCES faculties(faculty_id)
)

INSERT INTO groups
VALUES ('1', 1),
       ('2', 2)

CREATE TABLE students (
    student_id               INT IDENTITY PRIMARY KEY,
    student_name             NVARCHAR(20) NOT NULL,
    student_surname          NVARCHAR(30) NOT NULL,
    student_father_name      NVARCHAR(20) NOT NULL,
    student_FIN              VARCHAR(7)   NOT NULL UNIQUE,
    student_seminar_score    TINYINT DEFAULT 0,
    student_exam_score       TINYINT DEFAULT 0,
    student_group_id         INT FOREIGN KEY REFERENCES groups(group_id),
    student_lessonPermission BIT     DEFAULT 0
)

INSERT INTO students (student_name, student_surname, student_father_name, student_FIN, student_seminar_score,
                      student_exam_score, student_group_id)
VALUES ('Jalil', 'Abdullayev', 'Nazim', '5Y26M8W', 50, 50, 1),
       ('Aziz', 'Abdullayev', 'Nazim', '4DF2CD4', 50, 30, 1),
       (N'Cəfər', 'Abbasov', N'Əli', '5FGB2FD', 40, 25, 2),
       (N'Əli', N'Əliyev', N'Əlibala', '4DG2DF5', 45, 29, 2),
       ('Vaqif', N'İsgəndərov', N'Ələsgər', '8G5DD9A', 40, 40, 2),
       (N'Ləman', 'Babayeva', N'Vəli', '7G2D5AH', 41, 37, 1)

CREATE VIEW students_final_scores AS
SELECT *, student_seminar_score + student_exam_score AS student_final_score
FROM students

CREATE FUNCTION checkExam(@id INT)
    RETURNS CHAR(1)
AS
BEGIN
    DECLARE @score TINYINT
    DECLARE @result CHAR(1)
    DECLARE @studentExamScore TINYINT

    SELECT @score = student_final_score
    FROM students_final_scores
    WHERE student_id = @id

    SELECT @studentExamScore = student_exam_score
    FROM students
    WHERE student_id = @id

    IF @score <= 50 OR @studentExamScore < 17
        SET @result = 'F'
    ELSE
        IF @score <= 60
            SET @result = 'E'
        ELSE
            IF @score <= 70
                SET @result = 'D'
            ELSE
                IF @score <= 80
                    SET @result = 'C'
                ELSE
                    IF @score <= 90
                        SET @result = 'B'
                    ELSE
                        SET @result = 'A'
    RETURN @result
END

SELECT dbo.checkExam(1)

--8.3.
CREATE PROCEDURE letPermission @userId INT
AS
BEGIN
    IF
        (SELECT student_lessonPermission FROM students WHERE student_id = @userId) = 1
        BEGIN
            UPDATE students
            SET student_lessonPermission = 0
            WHERE student_id = @userId
        END
    ELSE
        BEGIN
            UPDATE students
            SET student_lessonPermission = 1
            WHERE student_id = @userId
        END
END
    EXEC letPermission @userId = 1

--7.7.
SELECT student_name, student_surname, student_father_name, student_final_score, rank
FROM (SELECT student_name,
             student_surname,
             student_father_name,
             student_final_score,
             DENSE_RANK() OVER (ORDER BY student_final_score DESC) rank
      FROM students_final_scores) AS subquery
WHERE rank = 3

--7.8.
SELECT faculty_id, student_name, student_surname, student_father_name, faculty_name, student_final_score
FROM (SELECT faculty_id,
             student_name,
             student_surname,
             student_father_name,
             faculty_name,
             student_final_score,
             RANK() OVER (PARTITION BY faculty_id ORDER BY student_final_score DESC) rank
      FROM students_final_scores
               JOIN groups ON students_final_scores.student_group_id = groups.group_id
               JOIN faculties ON faculties.faculty_id = groups.group_faculty_id) subquery
WHERE rank = 3

--7.9.
SELECT student_name, student_surname, student_father_name, student_final_score, group_name, rank
FROM (SELECT student_name,
             student_surname,
             student_father_name,
             student_final_score,
             student_group_id,
             group_name,
             DENSE_RANK() OVER (PARTITION BY student_group_id ORDER BY student_final_score DESC) rank
      FROM students_final_scores
               JOIN groups ON students_final_scores.student_group_id = groups.group_id) AS subquery
WHERE rank >= 2