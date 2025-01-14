

const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://zakyasharmeen:nRVbUU6073d4eUcv@cluster0.4tlue.mongodb.net/?retryWrites=true";
const DATABASE_NAME = "RESTAURANT"; 

const dbConnection = () => {
    mongoose.connect(MONGO_URL, { dbName: DATABASE_NAME })
        .then(() => {
            console.log("Connected to DATABASE SUCCESSFULLY");
        })
        .catch((err) => {
            console.error("Error occurred:", err.message); 
        });
};

module.exports = dbConnection;
