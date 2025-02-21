



const mongoose = require("mongoose");

// atlas
const mongoURL = "mongodb+srv://admin:adminFood123@food-app.7biyr.mongodb.net/food-app?retryWrites=true&w=majority";

const mongoDB = async () => {
    try {
        // Connect to the database
        await mongoose.connect(mongoURL);
        console.log("MongoDB connected successfully");

        // Wait for the database connection to be fully established
        const db = mongoose.connection.db;

        // Fetch data from the 'food' collection
        const foodCollection = db.collection("food");

        // Ensure the collection exists and fetch data
        const data = await foodCollection.find({}).toArray();

        if(!data){
            console.log(error);
        }else{
            // Assign to global variable
        global.food = data;
        console.log('====================================');
        // console.log(global.food);
        console.log('====================================');

        }
        // /////////////////////////////////////////////////


        // Fetch data from the 'foodCategory' collection
        const foodCategoryCollection = db.collection("foodCategory");

        // Ensure the collection exists and fetch data
        const categoryData = await foodCategoryCollection.find({}).toArray();

        if(!categoryData){
            console.log(error);
        }else{
            // Assign to global variable
        global.foodCategory = categoryData;
        console.log('====================================');
        // console.log(global.foodCategory);

        }


        
    } catch (error) {
        // Log errors with more detail
        console.error("MongoDB connection or query failed:", error.message);
        process.exit(1);
    }
};

module.exports = mongoDB;
