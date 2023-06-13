const mongoose = require('mongoose');

const nonTeachingSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        unique: true,
        required: true,
    },
});

const nonTeaching = mongoose.model("nonTeachings", nonTeachingSchema);
module.exports = nonTeaching;