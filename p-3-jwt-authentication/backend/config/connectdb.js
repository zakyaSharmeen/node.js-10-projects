 const mongoose = require("mongoose")

 const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {dbName:"greekshop"}
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("connected DATABSE");
        
    }

    catch(error){
        console.log(error);
        
    }
 }

 module.exports = connectDB