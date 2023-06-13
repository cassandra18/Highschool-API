const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    AdmNo: {
        type: Number,
        unique: true,
        required: true,
    },
    yearOfAdmission: {
        type: Number,
        required: true,
    },
});

const student = mongoose.model("students", studentSchema);
module.exports = student
