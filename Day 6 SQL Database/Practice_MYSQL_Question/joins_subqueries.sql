-- 1️. Display Employee Name, Department Name, Project Name, and Rating using joins
SELECT 
    e.EmpName,
    d.DeptName,
    p.ProjectName,
    perf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance perf ON e.EmpID = perf.EmpID
JOIN Project p ON perf.ProjectID = p.ProjectID;

-- 2️. Find the highest-rated employee in each department using a subquery
SELECT 
    d.DeptName,
    e.EmpName,
    perf.Rating
FROM Performance perf
JOIN Employee e ON perf.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
WHERE perf.Rating = (
    SELECT MAX(p2.Rating)
    FROM Performance p2
    JOIN Employee e2 ON p2.EmpID = e2.EmpID
    WHERE e2.DeptID = e.DeptID
);

-- 3️. List all employees who have not received any rewards using a subquery
SELECT EmpName FROM Employee
WHERE EmpID NOT IN (
    SELECT EmpID FROM Reward
);