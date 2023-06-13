require('dotenv').config()
const express = require('express');
const api = express();
const cors = require('cors');
const colors = require('colors');

//custom imports
const connectToDatabase = require('./config/db');
const { default: mongoose } = require('mongoose');
const { errorHandler } = require('./middleware/errorHandler');
//connect to database
connectToDatabase();  //this will connect to database


//inbult middleware
api.use(express.json());
api.use(express.urlencoded({ extended: true }));


//routes
api.use('/api/teachers', require('./routes/teachers.routes'));
api.use('/api/nonTeachingStaff', require('./routes/nonTeaching.routes'));
api.use('/api/students', require('./routes/students.routes'));


api.use(errorHandler);

api.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.yellow.bold)
    console.log('attempting to connect to mongodb database...'.dim)
});

mongoose.connection.once('open', () => {
    console.log(`connected to mongodb database at: ${mongoose.connection.host}`.green.bold)
});

mongoose.connection.on('error', (err) => {
    console.log(`error: ${err.message}`.red.bold)
});