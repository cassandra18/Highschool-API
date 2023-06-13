const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
        required: true,
    },
    subject: {
        type: [string],
        required: true,
    },
    Email: {
        type: String,
        unique: true,
        required: true,
    },
});

const teacher = mongoose.model("Teachers", teacherSchema);
module.exports = teacher;