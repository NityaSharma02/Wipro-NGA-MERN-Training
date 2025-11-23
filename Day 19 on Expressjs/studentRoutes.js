const express = require("express");
const router = express.Router();

// In-memory database
let students = [];
let currentId = 1;


// Middleware: Validate Body

function validateStudent(req, res, next) {
  const { name, skills, course } = req.body;

  if (!name || !skills || !course) {
    return res.status(400).json({
      message: "name, skills, and course are required",
    });
  }

  next();
}


// US-01 → Get all students
// GET /students
// ------------------------------------------------
router.get("/", (req, res) => {
  return res.json(students);
});

// US-02 → Get 1 student by ID
// GET /students/:id
// ------------------------------------------------
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  return res.json(student);
});

// ------------------------------------------------
// US-03 → Add a new student
// POST /students
// ------------------------------------------------
router.post("/", validateStudent, (req, res) => {
  const { name, skills, course } = req.body;

  const newStudent = {
    id: currentId++,
    name,
    skills,
    course,
  };

  students.push(newStudent);

  return res.status(201).json(newStudent);
});

// ------------------------------------------------
// US-04 → Update student by ID
// PUT /students/:id
// ------------------------------------------------
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // Update only provided fields
  const { name, skills, course } = req.body;

  if (name) student.name = name;
  if (skills) student.skills = skills;
  if (course) student.course = course;

  return res.json(student);
});

// ------------------------------------------------
// US-05 → Delete student
// DELETE /students/:id
// ------------------------------------------------
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  return res.json({ message: "Student deleted successfully" });
});

module.exports = router;
