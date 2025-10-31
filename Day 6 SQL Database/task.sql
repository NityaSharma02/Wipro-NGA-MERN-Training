/*Scenario Background
You are working as a Database Developer for EduPro Learning, a university that wants to manage its course enrollments, students, and instructors efficiently.
The current data is stored in spreadsheets, and you have been asked to design a normalized database schema, populate it with data, and write queries to generate reports for the academic department.
User Stories and Tasks
User Story 1 — Database Design & Normalization
As a database developer, I need to design a database schema that eliminates redundancy and maintains data integrity.
Tasks:
Analyze the following unstructured dataset:
StudentIDﾠStudentNameﾠCourseNameﾠInstructorNameﾠDepartmentﾠGrade
S101ﾠAsha GuptaﾠDatabase SystemsﾠDr. MehtaﾠComputer ScienceﾠA
S102ﾠRaj VermaﾠData StructuresﾠDr. SharmaﾠComputer ScienceﾠB
S101ﾠAsha GuptaﾠData StructuresﾠDr. SharmaﾠComputer ScienceﾠA
Apply normalization (up to Third Normal Form - 3NF) and design separate tables:
Student(StudentID, StudentName)
Course(CourseID, CourseName, DeptID)
Instructor(InstructorID, InstructorName, DeptID)
Department(DeptID, DeptName)
Enrollment(StudentID, CourseID, InstructorID, Grade)
Define primary and foreign keys appropriately.
Concepts Covered: Normalization, DDL, Primary and Foreign Keys
User Story 2 — Data Population and Joins
As an academic coordinator, I want to view student-course relationships and instructor assignments using SQL joins.
Tasks:
Insert sample records in each table (minimum 5 students, 5 courses, 3 instructors, 2 departments).
Write queries for the following:
Retrieve a list of students with their enrolled course names and instructors.
Display all courses along with their department names (use INNER JOIN).
Retrieve all students and the courses they are enrolled in, including those who have not yet been assigned a grade (use LEFT JOIN).
List instructors who currently have no students assigned (use RIGHT JOIN).
Concepts Covered: DML, INNER/LEFT/RIGHT Joins*/

DROP DATABASE IF EXISTS EduPro;
CREATE DATABASE EduPro;
use  EduPro;


-- Normalised tables
-- Department
CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(100) UNIQUE NOT NULL
);

-- student
CREATE TABLE Student (
    StudentID VARCHAR(10) PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL
);

-- course
CREATE TABLE Course (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- instructor
CREATE TABLE Instructor (
    InstructorID INT PRIMARY KEY,
    InstructorName VARCHAR(100) NOT NULL,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- enrollment
CREATE TABLE Enrollment (
    StudentID VARCHAR(10),
    CourseID INT,
    InstructorID INT,
    Grade CHAR(1),
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID),
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)
);


-- Data Inserting
INSERT INTO Department VALUES
(1, 'Computer Science'),
(2, 'Mathematics');

-- Student
INSERT INTO Student VALUES
('S101', 'Asha Gupta'),
('S102', 'Raj Verma'),
('S103', 'Neha Singh'),
('S104', 'Amit Rao'),
('S105', 'Priya Nair');


-- course
INSERT INTO Course VALUES
(101, 'Database Systems', 1),
(102, 'Data Structures', 1),
(103, 'Algorithms', 1),
(104, 'Linear Algebra', 2),
(105, 'Calculus', 2);

-- instructor
INSERT INTO Instructor VALUES
(201, 'Dr. Mehta', 1),
(202, 'Dr. Sharma', 1),
(204, 'Dr. Rao', 2),
(203, 'Dr. Iyer', 2);


-- enrollment
INSERT INTO Enrollment VALUES
('S101', 101, 201, 'A'),
('S102', 102, 202, 'B'),
('S101', 102, 202, 'A'),
('S103', 104, 203, NULL),
('S104', 105, 203, NULL);


-- Retrieve a list of students with their enrolled course names and instructors.
SELECT s.StudentName, c.CourseName, i.InstructorName
FROM Enrollment e
JOIN Student s ON e.StudentID = s.StudentID
JOIN Course c ON e.CourseID = c.CourseID
JOIN Instructor i ON e.InstructorID = i.InstructorID;




-- Display all courses along with their department names (use INNER JOIN).
SELECT c.CourseName, d.DeptName from course c
inner join Department d on c.DeptID = d.DeptID;



-- Retrieve all students and the courses they are enrolled in, including those who have not yet been assigned a grade (use LEFT JOIN).

SELECT s.StudentName, c.CourseName, e.Grade  FROM Student s
LEFT JOIN Enrollment e ON s.StudentID = e.StudentID
LEFT JOIN Course c ON e.CourseID = c.CourseID;


-- List instructors who currently have no students assigned (use RIGHT JOIN).
SELECT i.InstructorName FROM Enrollment e
RIGHT JOIN Instructor i ON e.InstructorID = i.InstructorID
WHERE e.StudentID IS NULL;





-- Retrieve all students who scored the highest grade (‘A’) in any course.


-- Find the course(s) where the average grade is highest using a subquery.
select  i.instructorName from Instructor
where (select count(distinct c.CourseID)
 FROM Enrollment e
    WHERE e.InstructorID = i.InstructorID
) > 1;


-- Retrieve all students who scored the highest grade (‘A’) in any course.
-- Find the course(s) where the average grade is highest using a subquery.
-- Display instructors who teach more than one course using a correlated subquery.
-- List students who have not enrolled in any course using a subquery with NOT IN.