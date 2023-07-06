require('dotenv').config()
const express = require('express');
const api = express();
const cors = require('cors');
const colors = require('colors');

//custom imports
const connectToDatabase = require('./.config/dbs')
const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./middleware/errorHandler');
//connect to database
connectToDatabase();


//inbult middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));


//routes
api.use('/api/teachers', require('./routes/teachers.routes'));
api.use('/api/nonTeachingStaff', require('./routes/nonTeaching.routes'));
api.use('/api/students', require('./routes/students.routes'));

//error handling
api.use(errorHandler);

//start server
api.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.yellow.bold)
    
});

