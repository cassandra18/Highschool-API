const expressAsyncHandler = require('express-async-handler');

const student = require('../models/students.schemas');

//Add students
//POST request

const addStudents = expressAsyncHandler(async (req, res) => {
    const { name, AdmNo, yearOfAdmission } = req.body;

    if (!name || !AdmNo || !yearOfAdmission) {
        res.status(400);
        throw new Error ('Please fill all the fields');
    }

    const avoidDuplicate = await student.findOne({AdmNo});
    if (!avoidDuplicate) {
        res.status(400);
        throw new Error ("Student already exist");
    }

    try {
        const addStudent = await student.create({ name, AdmNo, yearOfAdmission });
        if (addStudent)
        {
            res.status(201);
            res.json ({
            id: addStudent._id,
            name: addStudent.name,
            AdmNo: addStudent.AdmNo,
            yearOfAdmission: addStudent.yearOfAdmission,
        });

        }
        else {
            res.status (400);
            throw new Error ('Ivalid data');
        }
    }
    catch (error) {
        res.status(500);
        throw new Error (error);
    }
});


//Get request
 const getStudent = expressAsyncHandler(async (req, res) => {
    try {
        const Student = await student.find({});
        res.json(Student);
    }
    catch (error) {
        res. status (500);
        throw new Error (error);
    }
});

module.exports = { getStudent, addStudents };