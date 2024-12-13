const mongoose = require('mongoose'); // Ensure you use 'mongoose' here

function connectToDb() {
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log('Connected to Db'))
        .catch(err => console.log('Error connecting to Db:', err));
}

module.exports = connectToDb; // Export the function if needed
