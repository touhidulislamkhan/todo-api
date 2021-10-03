const mongoose = require('mongoose');

const connectionURL = process.env.MONGO_URI;

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(connectionURL);

        console.log(`Connected to MongoDB`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectdb;
