-- 1️. Insert data into Department
INSERT INTO Department (DeptName, Location) VALUES
('Human Resources', 'Bangalore'),
('Software Development', 'Hyderabad'),
('Finance', 'Mumbai'),
('Marketing', 'Pune'),
('IT Support', 'Delhi');

-- 2️. Insert data into Employee
INSERT INTO Employee (EmpName, Gender, DOB, HireDate, DeptID) VALUES
('Aarav Sharma', 'Male', '1992-03-15', '2020-07-01', 2),
('Nitya Verma', 'Female', '1995-09-10', '2021-01-10', 1),
('Rohan Mehta', 'Male', '1990-11-25', '2019-03-20', 2),
('Kavya Singh', 'Female', '1998-06-30', '2022-05-15', 3),
('Arjun Patel', 'Male', '1994-12-12', '2020-10-10', 5);

-- 3️. Insert data into Project
INSERT INTO Project (ProjectName, DeptID, StartDate, EndDate) VALUES
('Employee Portal Revamp', 2, '2024-01-01', '2024-06-30'),
('Payroll Automation', 3, '2024-03-01', '2024-08-30'),
('Recruitment Dashboard', 1, '2024-02-15', '2024-07-15'),
('Customer Insights', 4, '2024-04-10', '2024-09-10'),
('Network Upgrade', 5, '2024-05-01', '2024-10-01');

-- 4️. Insert data into Performance
INSERT INTO Performance (EmpID, ProjectID, Rating, ReviewDate) VALUES
(1, 1, 8.5, '2024-07-01'),
(2, 3, 9.0, '2024-07-01'),
(3, 1, 7.5, '2024-07-01'),
(4, 2, 8.0, '2024-07-01'),
(5, 5, 9.2, '2024-07-01');

-- 5️. Insert data into Reward
INSERT INTO Reward (EmpID, RewardMonth, RewardAmount) VALUES
(1, 'July 2024', 1500.00),
(2, 'July 2024', 1200.00),
(3, 'July 2024', 800.00),
(4, 'July 2024', 2000.00),
(5, 'July 2024', 950.00);

-- 6️. Update: Change one employee’s department
UPDATE Employee
SET DeptID = 3
WHERE EmpName = 'Nitya Verma';

-- 7️. Delete: Remove reward records where amount < 1000
DELETE FROM Reward WHERE RewardAmount < 1000;
