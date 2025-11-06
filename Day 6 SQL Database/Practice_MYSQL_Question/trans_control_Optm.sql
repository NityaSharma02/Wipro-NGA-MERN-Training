START TRANSACTION;

-- Insert a new employee
INSERT INTO Employee (EmpName, Gender, DOB, HireDate, DeptID)
VALUES ('Priya Nair', 'Female', '1996-04-20', '2024-09-01', 2);

-- Insert a performance record for the new employee
INSERT INTO Performance (EmpID, ProjectID, Rating, ReviewDate)
VALUES (
    (SELECT EmpID FROM Employee WHERE EmpName = 'Priya Nair'),
    1,
    8.8,
    '2024-09-30'
);

-- Insert a reward entry for the same employee
INSERT INTO Reward (EmpID, RewardMonth, RewardAmount)
VALUES (
    (SELECT EmpID FROM Employee WHERE EmpName = 'Priya Nair'),
    'September 2024',
    1800.00
);

-- If everything is successful, commit; else rollback
COMMIT;

-- If any error occurs during the process, ROLLBACK manually:
-- ROLLBACK;


-- 2️. Analyze Query Optimization using EXPLAIN

-- Example of a slow query before applying indexes
EXPLAIN SELECT 
    e.EmpName, d.DeptName, p.ProjectName, perf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance perf ON e.EmpID = perf.EmpID
JOIN Project p ON perf.ProjectID = p.ProjectID
WHERE e.EmpName LIKE '%a%';

-- 3️. Create Indexes to Optimize Query Performance
CREATE INDEX idx_projectname ON Project(ProjectName);
CREATE INDEX idx_rating ON Performance(Rating);

-- Re-run EXPLAIN after applying indexes
EXPLAIN SELECT 
    e.EmpName, d.DeptName, p.ProjectName, perf.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance perf ON e.EmpID = perf.EmpID
JOIN Project p ON perf.ProjectID = p.ProjectID
WHERE e.EmpName LIKE '%a%';
