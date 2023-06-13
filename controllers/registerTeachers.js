const expressAsyncHandler = require('express-async-handler');

const Teacher = require('../models/teacher.schemas');

//Add teacher
//POST request

const addTeachers = expressAsyncHandler(async (req, res) => {

    const { name, Email, rank, subject } = req.body;

    if (!name|| !Email || !rank || !subject) {
        res.status(400);
        throw new Error ('Please fill all the fields');
    }

    const avoidDuplicate = await Teacher.findOne({Email});
    if (!avoidDuplicate) {
        res.status(400);
        throw new Error ("Teacher already exist");
    }

    try {
        const addTeacher= await Teacher.create({ name, Email, rank, subject });
        if (addTeacher)
        {
            res.status(201);
            res.json ({
            id: addTeacher._id,
            name: addTeacher.name,
            Email: addTeacher.Email,
            rank: addTeacher.rank,
            subject: addTeacher.subject,

        });

        }
        else {
            res.status (400);
            throw new Error ('Invalid data');
        }
    }
    catch (error) {
        res.status(500);
        throw new Error (error);
    }
});


//Get request
 const getTeacher = expressAsyncHandler(async (req, res) => {
    try {
        const Teachers = await Teacher.find({});
        res.json(Teachers);
    }
    catch (error) {
        res. status (500);
        throw new Error (error);
    }
});

module.exports = { getTeacher, addTeachers };