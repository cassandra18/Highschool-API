const express = require('express');
const router = express.Router();
const { getStudent, addStudents } = require('../controllers/registerStudents');



router.post('/addStudents', addStudents);
router.get('/getstudents', getStudent);

module.exports = router;