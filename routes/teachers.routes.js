const express = require('express');
const router = express.Router();
const { getTeacher, addTeachers } = require('../controllers/registerNonTeaching');



router.post('/addTeacher', addTeachers);
router.get('/getTeacher', getTeacher);

module.exports = router;