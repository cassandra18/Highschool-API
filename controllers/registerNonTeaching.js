const expressAsyncHandler = require('express-async-handler');

const NonTeaching = require('../models/nonTeaching.schemas');

//Add nonTeaching staff 
//POST request

const addNonTeaching = expressAsyncHandler(async (req, res) => {
    const { name, occupation, Email } = req.body;

    if (!name || !occupation || !Email) {
        res.status(400);
        throw new Error ('Please fill all the fields');
    }

    const avoidDuplicate = await NonTeaching.findOne({Email});
    if (!avoidDuplicate) {
        res.status(400);
        throw new Error ("Staff member already exist");
    }

    try {
        const addNonTeachingStaff = await NonTeaching.create({name, occupation, Email});
        if (addNonTeachingStaff)
        {
            res.status(201);
            res.json ({
            id: addNonTeachingStaff._id,
            name: addNonTeachingStaff.name,
            occupation: addNonTeachingStaff.occupation,
            Email: addNonTeachingStaff.Email,
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
 const getNonTeaching = expressAsyncHandler(async (req, res) => {
    try {
        const nonTeachingStaff = await NonTeaching.find({});
        res.json(nonTeachingStaff);
    }
    catch (error) {
        res. status (500);
        throw new Error (error);
    }
});

module.exports = {getNonTeaching, addNonTeaching};