const mongoose = require('mongoose');

const connectToDataBase = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB database at: ${mongoose.connection.host}`);
    }
    catch (error) {
        console.error(`Failed to connect to MongoDB, error: ${err.message}`);
        process.exit(1);
    }
};


module.exports = connectToDataBase;