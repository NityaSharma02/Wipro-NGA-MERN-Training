const fs = require('fs');
const path = require('path');
const studentsDataPath = path.join(__dirname, '../data/students.json');

// Function to get all students
exports.getAllStudents = (req, res) => {
    fs.readFile(studentsDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading student data' });
        }
        const students = JSON.parse(data);
        res.render('students/list', { students });
    });
};

// Function to render the student form
exports.getStudentForm = (req, res) => {
    res.render('students/form');
};

// Function to add a new student
exports.addStudent = (req, res) => {
    const { name, email } = req.body;
    fs.readFile(studentsDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading student data' });
        }
        const students = JSON.parse(data);
        const newStudent = { id: students.length + 1, name, email };
        students.push(newStudent);
        fs.writeFile(studentsDataPath, JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving student data' });
            }
            res.redirect('/students');
        });
    });
};