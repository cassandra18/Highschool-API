require('dotenv').config();
const mongoose = require('mongoose');

const connectToDataBase = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};


module.exports = connectToDataBase;