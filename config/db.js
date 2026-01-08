const mongoose = require('mongoose');
require('dotenv').config();


const connectToDB = async () => {
    try {
        const DB_FULL_ADRESSE = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        mongoose.connect(DB_FULL_ADRESSE)
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

module.exports = {
    connectToDB
};