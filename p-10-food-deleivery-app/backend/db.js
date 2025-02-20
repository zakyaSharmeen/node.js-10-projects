


const mongoose = require("mongoose");

const mongoURL = "mongodb+srv://admin:adminFood123@food-app.7biyr.mongodb.net/food-app?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL
            
        );
        console.log("MongoDB connected successfully");

      

        // Fetch data from the 'food' collection
        const fetched_data = await mongoose.connection.db.collection("food");
        const data = await fetched_data.find({}).toArray();
        // console.log("Data from 'food' collection:", data);

    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;
