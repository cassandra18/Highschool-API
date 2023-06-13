const express = require('express');
const router = express.Router();
const {getNonTeaching, addNonTeaching} = require('../controllers/registerNonTeaching');



router.post('/addNonTeachingStaff', addNonTeaching);
router.get('/getNonTeachingStaff', getNonTeaching);

module.exports = router;