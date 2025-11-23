const express = require('express');
const studentRoutes = require('./students');

const router = express.Router();

// Set up the main routes
router.use('/students', studentRoutes);

module.exports = router;