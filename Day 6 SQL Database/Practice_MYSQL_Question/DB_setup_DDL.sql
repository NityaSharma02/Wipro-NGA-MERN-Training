
-- Database setup and optimization using MySQL

-- 1️. Create Database
CREATE DATABASE IF NOT EXISTS TechNovaDB;
USE TechNovaDB;

-- 2️. Create Tables

-- Department Table
CREATE TABLE Department (
    DeptID INT PRIMARY KEY AUTO_INCREMENT,
    DeptName VARCHAR(100) NOT NULL UNIQUE,
    Location VARCHAR(100)
);

-- Employee Table
CREATE TABLE Employee (
    EmpID INT PRIMARY KEY AUTO_INCREMENT,
    EmpName VARCHAR(100) NOT NULL,
    Gender ENUM('Male', 'Female', 'Other'),
    DOB DATE,
    HireDate DATE,
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
        ON DELETE SET NULL ON UPDATE CASCADE
);

-- Project Table
CREATE TABLE Project (
    ProjectID INT PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(100) NOT NULL UNIQUE,
    DeptID INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Performance Table
CREATE TABLE Performance (
    EmpID INT,
    ProjectID INT,
    Rating DECIMAL(3,1) CHECK (Rating BETWEEN 1 AND 10),
    ReviewDate DATE,
    PRIMARY KEY (EmpID, ProjectID, ReviewDate),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- Reward Table
CREATE TABLE Reward (
    EmpID INT,
    RewardMonth VARCHAR(20),
    RewardAmount DECIMAL(10,2),
    PRIMARY KEY (EmpID, RewardMonth),
    FOREIGN KEY (EmpID) REFERENCES Employee(EmpID)
        ON DELETE CASCADE ON UPDATE CASCADE
);

-- 3️Create Indexes for Optimization
CREATE INDEX idx_empname ON Employee(EmpName);
CREATE INDEX idx_deptid ON Employee(DeptID);
