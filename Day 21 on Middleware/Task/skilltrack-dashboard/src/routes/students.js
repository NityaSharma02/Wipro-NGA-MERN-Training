const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');
const validateStudent = require('../middleware/validateStudent');

// Route to get the list of students
router.get('/', studentsController.getStudents);

// Route to display the form for adding a new student
router.get('/new', studentsController.showStudentForm);

// Route to handle form submission for adding a new student
router.post('/', validateStudent, studentsController.addStudent);

module.exports = router;