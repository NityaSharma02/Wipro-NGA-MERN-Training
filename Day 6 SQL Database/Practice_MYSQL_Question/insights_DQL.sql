-- 1️. Retrieve all employees who joined after 2019-01-01
SELECT EmpID, EmpName, HireDate
FROM Employee
WHERE HireDate > '2019-01-01';

-- 2️. Find the average performance rating of employees in each department
SELECT 
    d.DeptName,
    ROUND(AVG(p.Rating), 2) AS AvgRating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
GROUP BY d.DeptName;

-- 3️. List employees with their age (using date function)
SELECT 
    EmpName,
    TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Age
FROM Employee;

-- 4️. Find the total rewards given in the current year
SELECT 
    YEAR(CURDATE()) AS CurrentYear,
    SUM(RewardAmount) AS TotalRewards
FROM Reward
WHERE YEAR(STR_TO_DATE(RewardMonth, '%M %Y')) = YEAR(CURDATE());

-- 5️. Retrieve employees who have received rewards greater than 2000
SELECT 
    e.EmpName,
    r.RewardMonth,
    r.RewardAmount
FROM Employee e
JOIN Reward r ON e.EmpID = r.EmpID
WHERE r.RewardAmount > 2000;